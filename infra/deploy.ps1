# Deploy ACME-GH-WS optimized AWS stack and initial container image
param(
  [string]$Region = "us-east-1",
  [string]$StackName = "ACME-GH-WS",
  [string]$DbPassword = "",
  [string]$JwtSecret = "",
  [switch]$SkipImagePush
)

$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent $PSScriptRoot
Set-Location $Root

function New-RandomSecret([int]$Length = 32) {
  $chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  -join ((1..$Length) | ForEach-Object { $chars[(Get-Random -Maximum $chars.Length)] })
}

if (-not $DbPassword) { $DbPassword = New-RandomSecret 24 }
if (-not $JwtSecret) { $JwtSecret = New-RandomSecret 48 }

Write-Host "Deploying CloudFormation stack: $StackName in $Region"
aws cloudformation deploy `
  --template-file infra/acme-gh-ws.yaml `
  --stack-name $StackName `
  --parameter-overrides `
    DBPassword=$DbPassword `
    JwtSecret=$JwtSecret `
    DesiredCount=0 `
  --capabilities CAPABILITY_NAMED_IAM `
  --region $Region

$outputs = aws cloudformation describe-stacks `
  --stack-name $StackName `
  --region $Region `
  --query "Stacks[0].Outputs" `
  --output json | ConvertFrom-Json

$ecrUri = ($outputs | Where-Object { $_.OutputKey -eq "ECRRepositoryUri" }).OutputValue
$albDns = ($outputs | Where-Object { $_.OutputKey -eq "LoadBalancerDNS" }).OutputValue
$bucket = ($outputs | Where-Object { $_.OutputKey -eq "UploadsBucketName" }).OutputValue

Write-Host "ECR: $ecrUri"
Write-Host "ALB: http://$albDns"
Write-Host "S3 bucket: $bucket"
Write-Host ""
Write-Host "Save these secrets for GitHub Actions / local reference:"
Write-Host "DB_PASSWORD=$DbPassword"
Write-Host "JWT_SECRET=$JwtSecret"

if (-not $SkipImagePush) {
  Write-Host "Building and pushing initial Docker image..."
  aws ecr get-login-password --region $Region | docker login --username AWS --password-stdin ($ecrUri -replace "/acme-gh-website$", "")
  docker build -t "${ecrUri}:latest" .
  docker push "${ecrUri}:latest"

  Write-Host "Scaling ECS service to 1 task..."
  aws ecs update-service `
    --cluster ACME-GH-WS `
    --service acme-gh-website-service `
    --desired-count 1 `
    --force-new-deployment `
    --region $Region | Out-Null

  Write-Host "Run database schema: npx prisma db push (against RDS endpoint from stack outputs)"
}

Write-Host "Done. Website URL: http://$albDns"

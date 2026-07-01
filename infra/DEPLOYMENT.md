# AWS Deployment — ACME-GH-WS

Optimized ECS Fargate cluster for the ACME Global Hub Next.js website.

## Prerequisites

- AWS CLI configured (`aws configure` or `aws login`)
- Docker Desktop
- GitHub repo: https://github.com/Avneesh-Chandra/ACME_GH_Website_Dev

## 1. Provision AWS infrastructure

```powershell
cd D:\ACME_GH_Website
.\infra\deploy.ps1 -Region eu-north-1
```

This creates:

- **ECS cluster:** `ACME-GH-WS`
- **Fargate service:** `acme-gh-website-service` (0.5 vCPU / 1 GB, scales 1–3)
- **RDS:** PostgreSQL `db.t4g.micro` (Single-AZ, 7-day backups)
- **S3:** uploads bucket with versioning
- **ALB + ECR:** public HTTP endpoint and container registry

## 2. GitHub Actions secrets

In the GitHub repo, add:

| Secret | Value |
|--------|--------|
| `AWS_ACCESS_KEY_ID` | IAM user access key with ECR + ECS deploy permissions |
| `AWS_SECRET_ACCESS_KEY` | Matching secret key |

## 3. CI/CD

Push to `main` triggers `.github/workflows/deploy-aws.yml`:

1. Build Docker image
2. Push to ECR `acme-gh-website`
3. Deploy to ECS cluster `ACME-GH-WS`

## 4. Database schema

After RDS is available:

```powershell
$env:DATABASE_URL = "postgresql://acmeadmin:YOUR_PASSWORD@RDS_ENDPOINT:5432/acmegh"
npx prisma db push
```

## 5. SES (email)

Verify your domain in Amazon SES and move out of sandbox for production email.

## Stack outputs

```powershell
aws cloudformation describe-stacks --stack-name ACME-GH-WS --query "Stacks[0].Outputs"
```

const { PrismaClient } = require("@prisma/client");
const fs = require("fs");
const path = require("path");

async function main() {
  const sqlPath = path.join(__dirname, "../infra/init-schema.sql");
  const sql = fs.readFileSync(sqlPath, "utf8");
  const prisma = new PrismaClient();

  for (const statement of sql.split(";").map((s) => s.trim()).filter(Boolean)) {
    await prisma.$executeRawUnsafe(statement);
  }

  await prisma.$disconnect();
  console.log("Database schema ready");
}

main().catch((error) => {
  console.error("Database init failed:", error);
  process.exit(1);
});

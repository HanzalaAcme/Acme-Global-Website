import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const email = process.argv[2];
const password = process.argv[3];
const name = process.argv[4] || "Super Admin";

if (!email || !password) {
  console.log(
    "Usage: npx tsx scripts/create-admin.ts <email> <password> [name]"
  );
  process.exit(1);
}

async function main() {
  const existing = await prisma.admin.findUnique({
    where: { email },
  });

  if (existing) {
    console.log("❌ Admin already exists.");
    return;
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.admin.create({
    data: {
      email,
      password: hashedPassword,
      name,
      role: "admin",
    },
  });

  console.log("✅ Admin created successfully!");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
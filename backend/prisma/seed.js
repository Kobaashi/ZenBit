import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

console.log("DB_URL:", process.env.DB_URL);

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");
  // console.log("Deleting old data...");
  // await prisma.user.deleteMany();
  // await prisma.deal.deleteMany();
  // console.log("Deleted all users and products.");

  try {
    const createdUsers = await prisma.user.createMany({
      data: [
        {
          user_name: "John",
          user_email: "JohnWick@gmail.com",
          user_password: "JohnWickTheBest333",
        }
      ],
      skipDuplicates: true,
    });
    console.log(`Inserted ${createdUsers.count} users.`);
  } catch (err) {
    console.error("Error inserting users:", err);
  }

  try {
    const createdProducts = await prisma.deal.createMany({
      data: [
        {
          deal_imagesrc: "../assets/marinaTorch.png",
          deal_title: "The Marina Torch",
          deal_dhs: 6500000,
          deal_tiket: 60000,
          deal_yield: 9.25,
          deal_sold: 75,
          deal_daysleft: 150,
        },
        {
          deal_imagesrc: "../assets/hrTower.png",
          deal_title: "HHHR Tower",
          deal_dhs: 6500000,
          deal_tiket: 60000,
          deal_yield: 9.25,
          deal_sold: 75,
          deal_daysleft: 150,
        },
        {
          deal_imagesrc: "../assets/oceansPeaks.png",
          deal_title: "Ocean peaks",
          deal_dhs: 6500000,
          deal_tiket: 60000,
          deal_yield: 9.25,
          deal_sold: 75,
          deal_daysleft: 150,
        },
        {
          deal_imagesrc: "../assets/yaqoubTower.png",
          deal_title: "Al Yaqoub Tower",
          deal_dhs: 6500000,
          deal_tiket: 60000,
          deal_yield: 9.25,
          deal_sold: 75,
          deal_daysleft: 150,
        },
      ],
      skipDuplicates: true,
    });
    console.log(`Inserted ${createdProducts.count} products.`);
  } catch (err) {
    console.error("Error inserting products:", err);
  }

  const users = await prisma.user.findMany();
  console.log("Users in DB:", users);

  const deals = await prisma.deal.findMany();
  console.log("Products in DB:", deals);
}

main()
  .then(() => {
    console.log("Seed completed successfully");
  })
  .catch((e) => {
    console.error("Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

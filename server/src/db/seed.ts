import { seedUsers } from "./seeds/users";
import { seedAlphabet } from "./seeds/alphabet";
import { seedModules } from "./seeds/modules";
import { seedLessons } from "./seeds/lessons";

const main = async () => {
   console.log("Starting database seeding...");

   try {
      // console.log("Seeding users...");
      // await seedUsers();

      console.log("Seeding alphabet...");
      await seedAlphabet();

      // console.log("Seeding modules...");
      // await seedModules();
      //
      // console.log("Seeding modules...");
      // await seedLessons();

      console.log("Seeding completed");
   } catch (error) {
      console.error("Error during seeding:", error);
      process.exit(1);
   }
};

main();

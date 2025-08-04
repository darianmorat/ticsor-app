import { db } from "../index";
import { users } from "../schema";

// REMEMBER:
// THIS SEED IS JUST USED FOR INFORMATION LIKE PRODUCTS, DECORATORS, ETC. NEVER FOR
// USERS AR ANYTHING THAT CAN HURT THE SECURITY OF THE APLICATION, THIS IS JUST TESTING

export const seedUsers = async () => {
   const userData = [
      {
         name: "Admin User",
         username: "admin01",
         email: "admin@gmail.com",
         password: "$2b$10$o1l8r6d7Cut/cHC1h1XR0.8M8MlwYNdXhcUw7mAMA7sevLSPOIGoK",
         role: "admin",
      },
      {
         name: "User",
         username: "user01",
         email: "user@gmail.com",
         password: "$2b$10$PaD3KDJNSKXsaACSc24Jk.BYWAvTRMPwAFrDKh2Pqg55KbP0WWM9m",
      },
   ];

   try {
      await db.insert(users).values(userData);
      console.log("Users seeded successfully");
   } catch (error) {
      console.error("Error seeding users:", error);
      throw error;
   }
};

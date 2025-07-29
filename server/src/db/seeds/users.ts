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
         role: "admin",
         password: "admin123",
      },
      {
         name: "User",
         username: "user01",
         email: "user@gmail.com",
         password: "user123",
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

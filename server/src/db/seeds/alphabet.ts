import { db } from "../index";
import { alphabetLetters } from "../schemas/alphabet";

export const seedAlphabet = async () => {
   const data = [
      {
         letter: "a",
         videoUrl: "https://youtu.be/xOu6iG_uwC8",
      },
      {
         letter: "b",
         videoUrl: "https://youtu.be/xOu6iG_uwC8",
      },
      {
         letter: "c",
         videoUrl: "https://youtu.be/xOu6iG_uwC8",
      },
   ];

   try {
      await db.insert(alphabetLetters).values(data);
      console.log("Alphabet seeded successfully");
   } catch (error) {
      console.error("Error seeding Alphabet:", error);
      throw error;
   }
};

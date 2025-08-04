import { db } from "../index";
import { alphabet } from "../schema";

export const seedAlphabet = async () => {
   const data = [
      { letter: "a", videoUrl: "https://youtu.be/xOu6iG_uwC8" },
      { letter: "b", videoUrl: "https://youtu.be/xOu6iG_uwC8" },
      { letter: "c", videoUrl: "https://youtu.be/xOu6iG_uwC8" },
      { letter: "d", videoUrl: "https://youtu.be/xOu6iG_uwC8" },
      { letter: "e", videoUrl: "https://youtu.be/xOu6iG_uwC8" },
      { letter: "f", videoUrl: "https://youtu.be/xOu6iG_uwC8" },
      { letter: "g", videoUrl: "https://youtu.be/xOu6iG_uwC8" },
      { letter: "h", videoUrl: "https://youtu.be/xOu6iG_uwC8" },
      { letter: "i", videoUrl: "https://youtu.be/xOu6iG_uwC8" },
      { letter: "j", videoUrl: "https://youtu.be/xOu6iG_uwC8" },
      { letter: "k", videoUrl: "https://youtu.be/xOu6iG_uwC8" },
      { letter: "l", videoUrl: "https://youtu.be/xOu6iG_uwC8" },
      { letter: "m", videoUrl: "https://youtu.be/xOu6iG_uwC8" },
      { letter: "n", videoUrl: "https://youtu.be/xOu6iG_uwC8" },
      { letter: "o", videoUrl: "https://youtu.be/xOu6iG_uwC8" },
      { letter: "p", videoUrl: "https://youtu.be/xOu6iG_uwC8" },
      { letter: "q", videoUrl: "https://youtu.be/xOu6iG_uwC8" },
      { letter: "r", videoUrl: "https://youtu.be/xOu6iG_uwC8" },
      { letter: "s", videoUrl: "https://youtu.be/xOu6iG_uwC8" },
      { letter: "t", videoUrl: "https://youtu.be/xOu6iG_uwC8" },
      { letter: "u", videoUrl: "https://youtu.be/xOu6iG_uwC8" },
      { letter: "v", videoUrl: "https://youtu.be/xOu6iG_uwC8" },
      { letter: "w", videoUrl: "https://youtu.be/xOu6iG_uwC8" },
      { letter: "x", videoUrl: "https://youtu.be/xOu6iG_uwC8" },
      { letter: "y", videoUrl: "https://youtu.be/xOu6iG_uwC8" },
      { letter: "z", videoUrl: "https://youtu.be/xOu6iG_uwC8" },
   ];

   try {
      await db.insert(alphabet).values(data);
      console.log("Alphabet seeded successfully");
   } catch (error) {
      console.error("Error seeding Alphabet:", error);
      throw error;
   }
};

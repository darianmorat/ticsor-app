import { db } from "../index";
import { alphabet } from "../schema";

export const seedAlphabet = async () => {
   const data = [
      {
         order: 1,
         letter: "a",
         videoUrl:
            "https://res.cloudinary.com/dlnvhx1vm/video/upload/v1754937036/a_erqr5n.mp4",
         imageUrl:
            "https://www.dictionary.com/e/wp-content/uploads/2018/01/american_sign_language4.jpg",
      },
      {
         order: 2,
         letter: "b",
         videoUrl:
            "https://res.cloudinary.com/dlnvhx1vm/video/upload/v1754937036/b_gvjjta.mp4",
         imageUrl:
            "https://www.dictionary.com/e/wp-content/uploads/2018/01/american_sign_language4.jpg",
      },
      {
         order: 3,
         letter: "c",
         videoUrl:
            "https://res.cloudinary.com/dlnvhx1vm/video/upload/v1754937037/c_n8nnav.mp4",
         imageUrl:
            "https://www.dictionary.com/e/wp-content/uploads/2018/01/american_sign_language4.jpg",
      },
      {
         order: 4,
         letter: "d",
         videoUrl:
            "https://res.cloudinary.com/dlnvhx1vm/video/upload/v1754937037/c_n8nnav.mp4",
         imageUrl:
            "https://www.dictionary.com/e/wp-content/uploads/2018/01/american_sign_language4.jpg",
      },
      {
         order: 5,
         letter: "e",
         videoUrl:
            "https://res.cloudinary.com/dlnvhx1vm/video/upload/v1754937037/c_n8nnav.mp4",
         imageUrl:
            "https://www.dictionary.com/e/wp-content/uploads/2018/01/american_sign_language4.jpg",
      },
      {
         order: 6,
         letter: "f",
         videoUrl:
            "https://res.cloudinary.com/dlnvhx1vm/video/upload/v1754937037/c_n8nnav.mp4",
         imageUrl:
            "https://www.dictionary.com/e/wp-content/uploads/2018/01/american_sign_language4.jpg",
      },
      {
         order: 7,
         letter: "g",
         videoUrl:
            "https://res.cloudinary.com/dlnvhx1vm/video/upload/v1754937037/c_n8nnav.mp4",
         imageUrl:
            "https://www.dictionary.com/e/wp-content/uploads/2018/01/american_sign_language4.jpg",
      },
      {
         order: 8,
         letter: "h",
         videoUrl:
            "https://res.cloudinary.com/dlnvhx1vm/video/upload/v1754937037/c_n8nnav.mp4",
         imageUrl:
            "https://www.dictionary.com/e/wp-content/uploads/2018/01/american_sign_language4.jpg",
      },
      {
         order: 9,
         letter: "i",
         videoUrl:
            "https://res.cloudinary.com/dlnvhx1vm/video/upload/v1754937037/c_n8nnav.mp4",
         imageUrl:
            "https://www.dictionary.com/e/wp-content/uploads/2018/01/american_sign_language4.jpg",
      },
      {
         order: 10,
         letter: "j",
         videoUrl:
            "https://res.cloudinary.com/dlnvhx1vm/video/upload/v1754937037/c_n8nnav.mp4",
         imageUrl:
            "https://www.dictionary.com/e/wp-content/uploads/2018/01/american_sign_language4.jpg",
      },
      {
         order: 11,
         letter: "k",
         videoUrl:
            "https://res.cloudinary.com/dlnvhx1vm/video/upload/v1754937037/c_n8nnav.mp4",
         imageUrl:
            "https://www.dictionary.com/e/wp-content/uploads/2018/01/american_sign_language4.jpg",
      },
      {
         order: 12,
         letter: "l",
         videoUrl:
            "https://res.cloudinary.com/dlnvhx1vm/video/upload/v1754937037/c_n8nnav.mp4",
         imageUrl:
            "https://www.dictionary.com/e/wp-content/uploads/2018/01/american_sign_language4.jpg",
      },
      {
         order: 13,
         letter: "m",
         videoUrl:
            "https://res.cloudinary.com/dlnvhx1vm/video/upload/v1754937037/c_n8nnav.mp4",
         imageUrl:
            "https://www.dictionary.com/e/wp-content/uploads/2018/01/american_sign_language4.jpg",
      },
      {
         order: 14,
         letter: "n",
         videoUrl:
            "https://res.cloudinary.com/dlnvhx1vm/video/upload/v1754937037/c_n8nnav.mp4",
         imageUrl:
            "https://www.dictionary.com/e/wp-content/uploads/2018/01/american_sign_language4.jpg",
      },
      {
         order: 15,
         letter: "ñ",
         videoUrl:
            "https://res.cloudinary.com/dlnvhx1vm/video/upload/v1754937037/c_n8nnav.mp4",
         imageUrl:
            "https://www.dictionary.com/e/wp-content/uploads/2018/01/american_sign_language4.jpg",
      },
      {
         order: 16,
         letter: "o",
         videoUrl:
            "https://res.cloudinary.com/dlnvhx1vm/video/upload/v1754937037/c_n8nnav.mp4",
         imageUrl:
            "https://www.dictionary.com/e/wp-content/uploads/2018/01/american_sign_language4.jpg",
      },
      {
         order: 17,
         letter: "p",
         videoUrl:
            "https://res.cloudinary.com/dlnvhx1vm/video/upload/v1754937037/c_n8nnav.mp4",
         imageUrl:
            "https://www.dictionary.com/e/wp-content/uploads/2018/01/american_sign_language4.jpg",
      },
      {
         order: 18,
         letter: "q",
         videoUrl:
            "https://res.cloudinary.com/dlnvhx1vm/video/upload/v1754937037/c_n8nnav.mp4",
         imageUrl:
            "https://www.dictionary.com/e/wp-content/uploads/2018/01/american_sign_language4.jpg",
      },
      {
         order: 19,
         letter: "r",
         videoUrl:
            "https://res.cloudinary.com/dlnvhx1vm/video/upload/v1754937037/c_n8nnav.mp4",
         imageUrl:
            "https://www.dictionary.com/e/wp-content/uploads/2018/01/american_sign_language4.jpg",
      },
      {
         order: 20,
         letter: "s",
         videoUrl:
            "https://res.cloudinary.com/dlnvhx1vm/video/upload/v1754937037/c_n8nnav.mp4",
         imageUrl:
            "https://www.dictionary.com/e/wp-content/uploads/2018/01/american_sign_language4.jpg",
      },
      {
         order: 21,
         letter: "t",
         videoUrl:
            "https://res.cloudinary.com/dlnvhx1vm/video/upload/v1754937037/c_n8nnav.mp4",
         imageUrl:
            "https://www.dictionary.com/e/wp-content/uploads/2018/01/american_sign_language4.jpg",
      },
      {
         order: 22,
         letter: "u",
         videoUrl:
            "https://res.cloudinary.com/dlnvhx1vm/video/upload/v1754937037/c_n8nnav.mp4",
         imageUrl:
            "https://www.dictionary.com/e/wp-content/uploads/2018/01/american_sign_language4.jpg",
      },
      {
         order: 23,
         letter: "v",
         videoUrl:
            "https://res.cloudinary.com/dlnvhx1vm/video/upload/v1754937037/c_n8nnav.mp4",
         imageUrl:
            "https://www.dictionary.com/e/wp-content/uploads/2018/01/american_sign_language4.jpg",
      },
      {
         order: 24,
         letter: "w",
         videoUrl:
            "https://res.cloudinary.com/dlnvhx1vm/video/upload/v1754937037/c_n8nnav.mp4",
         imageUrl:
            "https://www.dictionary.com/e/wp-content/uploads/2018/01/american_sign_language4.jpg",
      },
      {
         order: 25,
         letter: "x",
         videoUrl:
            "https://res.cloudinary.com/dlnvhx1vm/video/upload/v1754937037/c_n8nnav.mp4",
         imageUrl:
            "https://www.dictionary.com/e/wp-content/uploads/2018/01/american_sign_language4.jpg",
      },
      {
         order: 26,
         letter: "y",
         videoUrl:
            "https://res.cloudinary.com/dlnvhx1vm/video/upload/v1754937037/c_n8nnav.mp4",
         imageUrl:
            "https://www.dictionary.com/e/wp-content/uploads/2018/01/american_sign_language4.jpg",
      },
      {
         order: 27,
         letter: "z",
         videoUrl:
            "https://res.cloudinary.com/dlnvhx1vm/video/upload/v1754937037/c_n8nnav.mp4",
         imageUrl:
            "https://www.dictionary.com/e/wp-content/uploads/2018/01/american_sign_language4.jpg",
      },
   ];

   try {
      await db.insert(alphabet).values(data);
      console.log("Alphabet seeded successfully");
   } catch (error) {
      console.error("Error seeding Alphabet:", error);
      throw error;
   }
};

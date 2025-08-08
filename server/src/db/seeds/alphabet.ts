import { db } from "../index";
import { alphabet } from "../schema";

export const seedAlphabet = async () => {
   const data = [
      {
         order: 1,
         letter: "a",
         videoUrl:
            "https://res.cloudinary.com/dlnvhx1vm/video/upload/v1754662353/amv_Zero_Two_720P_HD__1_k4rwrm.mp4",
      },
      {
         order: 2,
         letter: "b",
         videoUrl:
            "https://res.cloudinary.com/dlnvhx1vm/video/upload/v1754662353/amv_Zero_Two_720P_HD__1_k4rwrm.mp4",
      },
      {
         order: 3,
         letter: "c",
         videoUrl:
            "https://res.cloudinary.com/dlnvhx1vm/video/upload/v1754662353/amv_Zero_Two_720P_HD__1_k4rwrm.mp4",
      },
      {
         order: 4,
         letter: "d",
         videoUrl:
            "https://res.cloudinary.com/dlnvhx1vm/video/upload/v1754662353/amv_Zero_Two_720P_HD__1_k4rwrm.mp4",
      },
      {
         order: 5,
         letter: "e",
         videoUrl:
            "https://res.cloudinary.com/dlnvhx1vm/video/upload/v1754662353/amv_Zero_Two_720P_HD__1_k4rwrm.mp4",
      },
      {
         order: 6,
         letter: "f",
         videoUrl:
            "https://res.cloudinary.com/dlnvhx1vm/video/upload/v1754662353/amv_Zero_Two_720P_HD__1_k4rwrm.mp4",
      },
      {
         order: 7,
         letter: "g",
         videoUrl:
            "https://res.cloudinary.com/dlnvhx1vm/video/upload/v1754662353/amv_Zero_Two_720P_HD__1_k4rwrm.mp4",
      },
      {
         order: 8,
         letter: "h",
         videoUrl:
            "https://res.cloudinary.com/dlnvhx1vm/video/upload/v1754662353/amv_Zero_Two_720P_HD__1_k4rwrm.mp4",
      },
      {
         order: 9,
         letter: "i",
         videoUrl:
            "https://res.cloudinary.com/dlnvhx1vm/video/upload/v1754662353/amv_Zero_Two_720P_HD__1_k4rwrm.mp4",
      },
      {
         order: 10,
         letter: "j",
         videoUrl:
            "https://res.cloudinary.com/dlnvhx1vm/video/upload/v1754662353/amv_Zero_Two_720P_HD__1_k4rwrm.mp4",
      },
      {
         order: 11,
         letter: "k",
         videoUrl:
            "https://res.cloudinary.com/dlnvhx1vm/video/upload/v1754662353/amv_Zero_Two_720P_HD__1_k4rwrm.mp4",
      },
      {
         order: 12,
         letter: "l",
         videoUrl:
            "https://res.cloudinary.com/dlnvhx1vm/video/upload/v1754662353/amv_Zero_Two_720P_HD__1_k4rwrm.mp4",
      },
      {
         order: 13,
         letter: "m",
         videoUrl:
            "https://res.cloudinary.com/dlnvhx1vm/video/upload/v1754662353/amv_Zero_Two_720P_HD__1_k4rwrm.mp4",
      },
      {
         order: 14,
         letter: "n",
         videoUrl:
            "https://res.cloudinary.com/dlnvhx1vm/video/upload/v1754662353/amv_Zero_Two_720P_HD__1_k4rwrm.mp4",
      },
      {
         order: 15,
         letter: "ñ",
         videoUrl:
            "https://res.cloudinary.com/dlnvhx1vm/video/upload/v1754662353/amv_Zero_Two_720P_HD__1_k4rwrm.mp4",
      },
      {
         order: 16,
         letter: "o",
         videoUrl:
            "https://res.cloudinary.com/dlnvhx1vm/video/upload/v1754662353/amv_Zero_Two_720P_HD__1_k4rwrm.mp4",
      },
      {
         order: 17,
         letter: "p",
         videoUrl:
            "https://res.cloudinary.com/dlnvhx1vm/video/upload/v1754662353/amv_Zero_Two_720P_HD__1_k4rwrm.mp4",
      },
      {
         order: 18,
         letter: "q",
         videoUrl:
            "https://res.cloudinary.com/dlnvhx1vm/video/upload/v1754662353/amv_Zero_Two_720P_HD__1_k4rwrm.mp4",
      },
      {
         order: 19,
         letter: "r",
         videoUrl:
            "https://res.cloudinary.com/dlnvhx1vm/video/upload/v1754662353/amv_Zero_Two_720P_HD__1_k4rwrm.mp4",
      },
      {
         order: 20,
         letter: "s",
         videoUrl:
            "https://res.cloudinary.com/dlnvhx1vm/video/upload/v1754662353/amv_Zero_Two_720P_HD__1_k4rwrm.mp4",
      },
      {
         order: 21,
         letter: "t",
         videoUrl:
            "https://res.cloudinary.com/dlnvhx1vm/video/upload/v1754662353/amv_Zero_Two_720P_HD__1_k4rwrm.mp4",
      },
      {
         order: 22,
         letter: "u",
         videoUrl:
            "https://res.cloudinary.com/dlnvhx1vm/video/upload/v1754662353/amv_Zero_Two_720P_HD__1_k4rwrm.mp4",
      },
      {
         order: 23,
         letter: "v",
         videoUrl:
            "https://res.cloudinary.com/dlnvhx1vm/video/upload/v1754662353/amv_Zero_Two_720P_HD__1_k4rwrm.mp4",
      },
      {
         order: 24,
         letter: "w",
         videoUrl:
            "https://res.cloudinary.com/dlnvhx1vm/video/upload/v1754662353/amv_Zero_Two_720P_HD__1_k4rwrm.mp4",
      },
      {
         order: 25,
         letter: "x",
         videoUrl:
            "https://res.cloudinary.com/dlnvhx1vm/video/upload/v1754662353/amv_Zero_Two_720P_HD__1_k4rwrm.mp4",
      },
      {
         order: 26,
         letter: "y",
         videoUrl:
            "https://res.cloudinary.com/dlnvhx1vm/video/upload/v1754662353/amv_Zero_Two_720P_HD__1_k4rwrm.mp4",
      },
      {
         order: 27,
         letter: "z",
         videoUrl:
            "https://res.cloudinary.com/dlnvhx1vm/video/upload/v1754662353/amv_Zero_Two_720P_HD__1_k4rwrm.mp4",
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

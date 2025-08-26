import { db } from "../index";
import { alphabet } from "../schema";

export const seedAlphabet = async () => {
   const data = [
      {
         order: 1,
         letter: "a",
         videoUrl:
            "https://res.cloudinary.com/dijm4ylwb/video/upload/v1756226371/1-A_jwhw03.mp4",
         imageUrl:
            "https://res.cloudinary.com/dijm4ylwb/image/upload/v1756227590/a_xsunwv.jpg",
      },
      {
         order: 2,
         letter: "b",
         videoUrl:
            "https://res.cloudinary.com/dijm4ylwb/video/upload/v1756226675/2-B_q8cnhs.mp4",
         imageUrl:
            "https://res.cloudinary.com/dijm4ylwb/image/upload/v1756227590/a_xsunwv.jpg",
      },
      {
         order: 3,
         letter: "c",
         videoUrl:
            "https://res.cloudinary.com/dijm4ylwb/video/upload/v1756226677/3-C_xer8k9.mp4",
         imageUrl:
            "https://res.cloudinary.com/dijm4ylwb/image/upload/v1756227590/a_xsunwv.jpg",
      },
      {
         order: 4,
         letter: "d",
         videoUrl:
            "https://res.cloudinary.com/dijm4ylwb/video/upload/v1756226691/4-D_bphldb.mp4",
         imageUrl:
            "https://res.cloudinary.com/dijm4ylwb/image/upload/v1756227590/a_xsunwv.jpg",
      },
      {
         order: 5,
         letter: "e",
         videoUrl:
            "https://res.cloudinary.com/dijm4ylwb/video/upload/v1756226849/5-E_pb8umz.mp4",
         imageUrl:
            "https://res.cloudinary.com/dijm4ylwb/image/upload/v1756227590/a_xsunwv.jpg",
      },
      {
         order: 6,
         letter: "f",
         videoUrl:
            "https://res.cloudinary.com/dijm4ylwb/video/upload/v1756226865/6-F_yfemyx.mp4",
         imageUrl:
            "https://res.cloudinary.com/dijm4ylwb/image/upload/v1756227590/a_xsunwv.jpg",
      },
      {
         order: 7,
         letter: "g",
         videoUrl:
            "https://res.cloudinary.com/dijm4ylwb/video/upload/v1756226867/7-G_vxlzal.mp4",
         imageUrl:
            "https://res.cloudinary.com/dijm4ylwb/image/upload/v1756227590/a_xsunwv.jpg",
      },
      {
         order: 8,
         letter: "h",
         videoUrl:
            "https://res.cloudinary.com/dijm4ylwb/video/upload/v1756226868/8-H_x1eady.mp4",
         imageUrl:
            "https://res.cloudinary.com/dijm4ylwb/image/upload/v1756227590/a_xsunwv.jpg",
      },
      {
         order: 9,
         letter: "i",
         videoUrl:
            "https://res.cloudinary.com/dijm4ylwb/video/upload/v1756226869/9-I_hughw6.mp4",
         imageUrl:
            "https://res.cloudinary.com/dijm4ylwb/image/upload/v1756227590/a_xsunwv.jpg",
      },
      {
         order: 10,
         letter: "j",
         videoUrl:
            "https://res.cloudinary.com/dijm4ylwb/video/upload/v1756226870/10-J_wc6vdy.mp4",
         imageUrl:
            "https://res.cloudinary.com/dijm4ylwb/image/upload/v1756227590/a_xsunwv.jpg",
      },
      {
         order: 11,
         letter: "k",
         videoUrl:
            "https://res.cloudinary.com/dijm4ylwb/video/upload/v1756226872/11-K_jecow2.mp4",
         imageUrl:
            "https://res.cloudinary.com/dijm4ylwb/image/upload/v1756227590/a_xsunwv.jpg",
      },
      {
         order: 12,
         letter: "l",
         videoUrl:
            "https://res.cloudinary.com/dijm4ylwb/video/upload/v1756226955/12-L_olhxyl.mp4",
         imageUrl:
            "https://res.cloudinary.com/dijm4ylwb/image/upload/v1756227590/a_xsunwv.jpg",
      },
      {
         order: 13,
         letter: "m",
         videoUrl:
            "https://res.cloudinary.com/dijm4ylwb/video/upload/v1756226956/13-M_xvp3qy.mp4",
         imageUrl:
            "https://res.cloudinary.com/dijm4ylwb/image/upload/v1756227590/a_xsunwv.jpg",
      },
      {
         order: 14,
         letter: "n",
         videoUrl:
            "https://res.cloudinary.com/dijm4ylwb/video/upload/v1756226957/14-N_smnf2t.mp4",
         imageUrl:
            "https://res.cloudinary.com/dijm4ylwb/image/upload/v1756227590/a_xsunwv.jpg",
      },
      {
         order: 15,
         letter: "ñ",
         videoUrl:
            "https://res.cloudinary.com/dijm4ylwb/video/upload/v1756226959/15-%C3%91_mr9rrg.mp4",
         imageUrl:
            "https://res.cloudinary.com/dijm4ylwb/image/upload/v1756227590/a_xsunwv.jpg",
      },
      {
         order: 16,
         letter: "o",
         videoUrl:
            "https://res.cloudinary.com/dijm4ylwb/video/upload/v1756226960/16-O_xdhgsg.mp4",
         imageUrl:
            "https://res.cloudinary.com/dijm4ylwb/image/upload/v1756227590/a_xsunwv.jpg",
      },
      {
         order: 17,
         letter: "p",
         videoUrl:
            "https://res.cloudinary.com/dijm4ylwb/video/upload/v1756226961/17-P_xqzvvm.mp4",
         imageUrl:
            "https://res.cloudinary.com/dijm4ylwb/image/upload/v1756227590/a_xsunwv.jpg",
      },
      {
         order: 18,
         letter: "q",
         videoUrl:
            "https://res.cloudinary.com/dijm4ylwb/video/upload/v1756226963/18-Q_hkuuku.mp4",
         imageUrl:
            "https://res.cloudinary.com/dijm4ylwb/image/upload/v1756227590/a_xsunwv.jpg",
      },
      {
         order: 19,
         letter: "r",
         videoUrl:
            "https://res.cloudinary.com/dijm4ylwb/video/upload/v1756226964/19-R_aoomqu.mp4",
         imageUrl:
            "https://res.cloudinary.com/dijm4ylwb/image/upload/v1756227590/a_xsunwv.jpg",
      },
      {
         order: 20,
         letter: "s",
         videoUrl:
            "https://res.cloudinary.com/dijm4ylwb/video/upload/v1756226966/20-S_yfizo5.mp4",
         imageUrl:
            "https://res.cloudinary.com/dijm4ylwb/image/upload/v1756227590/a_xsunwv.jpg",
      },
      {
         order: 21,
         letter: "t",
         videoUrl:
            "https://res.cloudinary.com/dijm4ylwb/video/upload/v1756226967/21-T_iutvy7.mp4",
         imageUrl:
            "https://res.cloudinary.com/dijm4ylwb/image/upload/v1756227590/a_xsunwv.jpg",
      },
      {
         order: 22,
         letter: "u",
         videoUrl:
            "https://res.cloudinary.com/dijm4ylwb/video/upload/v1756226969/22-U_wwjgpp.mp4",
         imageUrl:
            "https://res.cloudinary.com/dijm4ylwb/image/upload/v1756227590/a_xsunwv.jpg",
      },
      {
         order: 23,
         letter: "v",
         videoUrl:
            "https://res.cloudinary.com/dijm4ylwb/video/upload/v1756226971/23-V_hkppnf.mp4",
         imageUrl:
            "https://res.cloudinary.com/dijm4ylwb/image/upload/v1756227590/a_xsunwv.jpg",
      },
      {
         order: 24,
         letter: "w",
         videoUrl:
            "https://res.cloudinary.com/dijm4ylwb/video/upload/v1756226973/24-W_kxxt7o.mp4",
         imageUrl:
            "https://res.cloudinary.com/dijm4ylwb/image/upload/v1756227590/a_xsunwv.jpg",
      },
      {
         order: 25,
         letter: "x",
         videoUrl:
            "https://res.cloudinary.com/dijm4ylwb/video/upload/v1756226974/25-X_mp8qct.mp4",
         imageUrl:
            "https://res.cloudinary.com/dijm4ylwb/image/upload/v1756227590/a_xsunwv.jpg",
      },
      {
         order: 26,
         letter: "y",
         videoUrl:
            "https://res.cloudinary.com/dijm4ylwb/video/upload/v1756226976/26-Y_xovxia.mp4",
         imageUrl:
            "https://res.cloudinary.com/dijm4ylwb/image/upload/v1756227590/a_xsunwv.jpg",
      },
      {
         order: 27,
         letter: "z",
         videoUrl:
            "https://res.cloudinary.com/dijm4ylwb/video/upload/v1756226977/27-Z_oyhtbu.mp4",
         imageUrl:
            "https://res.cloudinary.com/dijm4ylwb/image/upload/v1756227590/a_xsunwv.jpg",
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

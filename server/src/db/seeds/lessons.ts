import { db } from "../index";
import { lessons, modules } from "../schema";

export const seedLessons = async () => {
   const moduleTable = await db.select().from(modules);

   const module = (i: number) => {
      return moduleTable.find((m) => m.order === i)?.id;
   };

   const data = [
      // MODULE #1
      {
         moduleId: module(1),
         order: 1,
         title: "Deletrea tu nombre",
         type: "activity",
         steps: [
            {
               step: 1,
               type: "intro",
               intro: {
                  text: "Description of the objective of the activity here",
               },
            },
            {
               step: 2,
               type: "minigame",
            },
         ],
      },
      {
         moduleId: module(1),
         order: 2,
         title: "Que letra es?",
         type: "activity",
         steps: [],
      },

      // MODULE #2
      {
         moduleId: module(2),
         order: 1,
         title: "La liebre y la tortuga",
         type: "quiz",
         steps: [
            {
               step: 1,
               type: "intro",
               intro: {
                  text: "Érase una vez una liebre muy veloz que presumía de ello ante todos los animales del bosque. Un día, se encontró con una tortuga.",
                  videoUrl:
                     "https://res.cloudinary.com/dlnvhx1vm/video/upload/v1754621676/Uma_Musume_Beginning_of_a_New_Era_-_T.M._Opera_O_EDIT_d2gix9.mp4",
               },
            },
            {
               step: 2,
               type: "quiz",
               questions: [
                  {
                     id: 1,
                     question: "¿Por qué se burló la liebre de la tortuga?",
                     options: [
                        "Porque la tortuga sabía nadar",
                        "Porque era más grande que ella",
                        "Porque caminaba muy despacio",
                        "Porque dormía mucho",
                     ],
                     answer: 2,
                  },
                  {
                     id: 2,
                     question: "Testing",
                     options: ["Testing a", "Testing b", "Testing c", "Testing d"],
                     answer: 3,
                  },
               ],
            },
         ],
      },
      {
         moduleId: module(2),
         order: 2,
         title: "Empty section",
         type: "Empty section",
         steps: [],
      },

      // MODULE #3
      {
         moduleId: module(3),
         order: 1,
         title: "Empty section",
         type: "Empty section",
         steps: [],
      },
      {
         moduleId: module(3),
         order: 2,
         title: "Empty section",
         type: "Empty section",
         steps: [],
      },

      // MODULE #4
      {
         moduleId: module(4),
         order: 1,
         title: "Empty section",
         type: "Empty section",
         steps: [],
      },
      {
         moduleId: module(4),
         order: 2,
         title: "Empty section",
         type: "Empty section",
         steps: [],
      },
   ];

   try {
      await db.insert(lessons).values(data);
      console.log("Lessons seeded successfully");
   } catch (error) {
      console.error("Error seeding Lessons:", error);
      throw error;
   }
};

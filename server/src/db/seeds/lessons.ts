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
         order: 1,
         title: "La liebre y la tortuga",
         type: "quiz",
         steps: [
            {
               step: 1,
               type: "intro",
               intro: {
                  text: "Érase una vez una liebre muy veloz que presumía de ello ante todos los animales del bosque. Un día, se encontró con una tortuga que caminaba muy despacio. La liebre se burló de su lentitud. Hagamos una carrera y veamos quién gana —propuso la tortuga. Al empezar la carrera, la liebre salió disparada, mientras que la tortuga avanzó lentamente. Al ver que sacaba una gran ventaja a la tortuga, la liebre se paró en un árbol a descansar. La tortuga siguió avanzando, poco a poco y sin detenerse. Cuando la liebre despertó, vio angustiada que la tortuga estaba a punto de llegar a la meta. La liebre corrió y corrió, pero fue demasiado tarde. La tortuga cruzó la meta, agotada pero feliz.",
                  takeaway:
                     "De poco vale el talento sin esfuerzo. Esta fábula de Esopo nos enseña que, con perseverancia y con esfuerzo, podemos lograr nuestras metas.",
                  videoUrl:
                     "https://res.cloudinary.com/dlnvhx1vm/video/upload/v1755619652/Media1_qwu2a5.mp4",
               },
            },
            {
               step: 2,
               type: "quiz",
               question: {
                  question: "¿Por qué se burló la liebre de la tortuga?",
                  options: [
                     "Porque la tortuga sabía nadar",
                     "Porque era más grande que ella",
                     "Porque caminaba muy despacio",
                     "Porque dormía mucho",
                  ],
                  answer: 2,
               },
            },
            {
               step: 3,
               type: "quiz",
               question: {
                  question: "¿Qué hizo la liebre cuando vio que tenía ventaja?",
                  options: [
                     "Corrió más rápido",
                     "Se detuvo a descansar bajo un árbol",
                     "Se escondió",
                     "Se fue a casa",
                  ],
                  answer: 1,
               },
            },
            {
               step: 4,
               type: "quiz",
               question: {
                  question: "¿Qué hizo la tortuga durante la carrera?",
                  options: [
                     "Corrió muy rápido",
                     "Se dio por vencida",
                     "Caminó lentamente pero sin parar",
                     "Se detuvo a dormir",
                  ],
                  answer: 2,
               },
            },
            {
               step: 5,
               type: "quiz",
               question: {
                  question:
                     "¿Qué sentimiento tuvo la liebre al ver que la tortuga iba a ganar?",
                  options: ["Tristeza", "Alegría", "Sorpresa", "Angustia"],
                  answer: 3,
               },
            },
            {
               step: 6,
               type: "quiz",
               question: {
                  question: "¿Cuál es la moraleja de la fábula?",
                  options: [
                     "Siempre gana quien llega primero",
                     "El que ríe al último, ríe mejor",
                     "Con esfuerzo y constancia se pueden alcanzar las metas",
                     "La velocidad es más importante que la inteligencia",
                  ],
                  answer: 2,
               },
            },
         ],
      },
      {
         order: 2,
         title: "El león y el ratón",
         type: "quiz",
         steps: [
            {
               step: 1,
               type: "intro",
               intro: {
                  text: "Érase una vez un ratón que caminaba, sin saberlo, sobre el lomo de un león. De pronto, una garra atrapó al ratón, con la intención de comérselo. —No me coma, por favor. Le prometo que si alguna vez está en apuros, yo lo ayudaré. —¡Ja, ja, ja! ¿Cómo podrá ayudarme alguien tan pequeño? Pero el león lo dejó marchar por esta vez. Días más tarde, el ratón escuchó unos rugidos cerca de su madriguera. Era el león, que había quedado atrapado en una gran red. Entonces el ratón comenzó a roer la red, hasta hacer un agujero del tamaño del león. Y desde entonces, el pequeño ratón y el enorme león fueron amigos inseparables.",
                  takeaway:
                     "Hasta los más grandes necesitan de los pequeños. Esta fábula de Esopo nos enseña a valorar a todos, sin importar su aspecto o las apariencias.",
                  videoUrl:
                     "https://res.cloudinary.com/dlnvhx1vm/video/upload/v1755622111/Media2_emlm7f.mp4",
               },
            },
            {
               step: 2,
               type: "quiz",
               question: {
                  question: "¿Qué hizo el león cuando atrapó al ratón?",
                  options: [
                     "Lo devoró de inmediato",
                     "Lo dejó escapar después de escuchar su súplica",
                     "Lo llevó a su madriguera",
                     "Lo lanzó al río",
                  ],
                  answer: 1,
               },
            },
            {
               step: 3,
               type: "quiz",
               question: {
                  question: "¿Qué le prometió el ratón al león?",
                  options: [
                     "Que lo cuidaría mientras dormía",
                     "Que le traería comida",
                     "Que si algún día estaba en apuros, lo ayudaría",
                     "Que lo limpiaría de pulgas",
                  ],
                  answer: 2,
               },
            },
            {
               step: 4,
               type: "quiz",
               question: {
                  question: "¿Qué sucedió días después con el león?",
                  options: [
                     "Se enfermó",
                     "Cayó en una trampa y quedó atrapado en una red",
                     "Se fue del bosque",
                     "Se durmió cerca del río",
                  ],
                  answer: 1,
               },
            },
            {
               step: 5,
               type: "quiz",
               question: {
                  question: "¿Cómo ayudó el ratón al león?",
                  options: [
                     "Llamó a otros animales",
                     "Cortó la red con una piedra",
                     "Rugió muy fuerte",
                     "Roió la red hasta liberarlo",
                  ],
                  answer: 3,
               },
            },
            {
               step: 6,
               type: "quiz",
               question: {
                  question: "¿Cuál es la moraleja de la fábula?",
                  options: [
                     "El más fuerte siempre gana",
                     "La astucia vale más que la fuerza",
                     "Hasta los más grandes necesitan de los pequeños",
                     "No debemos confiar en los extraños",
                  ],
                  answer: 2,
               },
            },
         ],
      },
      {
         order: 3,
         title: "El planeta del vanidoso",
         type: "quiz",
         steps: [
            {
               step: 1,
               type: "intro",
               intro: {
                  text: "El segundo planeta estaba habitado por un vanidoso. —¡Ah! ¡Ah! ¡Un admirador viene a visitarme! —gritó el vanidoso al divisar al principito. Para los vanidosos todos los demás hombres son admiradores. —¡Buenos días! —dijo el principito—. ¡Qué sombrero tan raro tiene! —Es para saludar a los que me aclaman —respondió el vanidoso. Desgraciadamente nunca pasa nadie por aquí. —¿Ah, sí? —preguntó sin comprender el principito. —Golpea tus manos una contra otra —le aconsejó el vanidoso. El principito aplaudió y el vanidoso le saludó modestamente levantando el sombrero. 'Esto parece más divertido que la visita al rey', pensó el principito, que continuó aplaudiendo mientras el vanidoso volvía a saludarle quitándose el sombrero. A los cinco minutos el principito se cansó con la monotonía de aquel juego. —¿Qué hay que hacer para que el sombrero se caiga? —preguntó el principito. Pero el vanidoso no le oyó. Los vanidosos sólo oyen las alabanzas. —Tú me admiras mucho, ¿verdad? —preguntó el vanidoso al principito. —¿Qué significa admirar? —Admirar significa reconocer que yo soy el hombre más bello, el mejor vestido, el más rico y el más inteligente del planeta. —¡Si tú estás solo en tu planeta! —¡Hazme ese favor, admírame de todas maneras! —¡Bueno! Te admiro —dijo el principito encogiéndose de hombros—, pero ¿para qué te sirve? Y el principito se marchó. 'Decididamente, las personas mayores son muy extrañas', se decía para sí el principito durante su viaje.",
                  takeaway:
                     "La vanidad solo busca admiración, pero no tiene verdadero valor.",
                  videoUrl:
                     "https://res.cloudinary.com/dlnvhx1vm/video/upload/v1755622364/Media3_vjgsve.mp4",
               },
            },
            {
               step: 2,
               type: "quiz",
               question: {
                  question: "¿Qué hacía el vanidoso cuando alguien aplaudía?",
                  options: [
                     "Gritaba muy fuerte",
                     "Se escondía",
                     "Saludaba levantando el sombrero",
                     "Lloraba de emoción",
                  ],
                  answer: 2,
               },
            },
            {
               step: 3,
               type: "quiz",
               question: {
                  question: "¿Por qué usaba sombrero el vanidoso?",
                  options: [
                     "Porque hacía mucho sol",
                     "Para verse elegante",
                     "Para saludar a los que lo aclamaban",
                     "Porque era parte de su uniforme",
                  ],
                  answer: 2,
               },
            },
            {
               step: 4,
               type: "quiz",
               question: {
                  question:
                     "¿Qué descubrió el principito sobre el vanidoso después de un rato?",
                  options: [
                     "Que estaba muy enfermo",
                     "Que no era un rey",
                     "Que solo quería ser admirado y el juego era aburrido",
                     "Que tenía poderes mágicos",
                  ],
                  answer: 2,
               },
            },
            {
               step: 5,
               type: "quiz",
               question: {
                  question: "¿Qué significa ‘admirar’ para el vanidoso?",
                  options: [
                     "Escuchar con atención",
                     "Hacer preguntas inteligentes",
                     "Reconocer que él es el más bello, rico e inteligente",
                     "Compartir con otros",
                  ],
                  answer: 2,
               },
            },
            {
               step: 6,
               type: "quiz",
               question: {
                  question: "¿Qué pensó el principito al irse del planeta del vanidoso?",
                  options: [
                     "Que quería regresar más tarde",
                     "Que los adultos eran muy extraños",
                     "Que el vanidoso era muy sabio",
                     "Que quería quedarse a vivir allí",
                  ],
                  answer: 1,
               },
            },
         ],
      },

      // {
      //    moduleId: module(1),
      //    order: 1,
      //    title: "Deletrea tu nombre",
      //    type: "activity",
      //    steps: [
      //       {
      //          step: 1,
      //          type: "intro",
      //          intro: {
      //             text: "Description of the objective of the activity here",
      //          },
      //       },
      //       {
      //          step: 2,
      //          type: "minigame",
      //       },
      //    ],
      // },
      // {
      //    moduleId: module(1),
      //    order: 2,
      //    title: "Que letra es?",
      //    type: "activity",
      //    steps: [
      //       {
      //          step: 1,
      //          type: "intro",
      //          intro: {
      //             text: "Description of the objective of the activity here",
      //          },
      //       },
      //       {
      //          step: 2,
      //          type: "minigame",
      //       },
      //    ],
      // },

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
                  text: "Érase una vez una liebre muy veloz que presumía de ello ante todos los animales del bosque. Un día, se encontró con una tortuga que caminaba muy despacio. La liebre se burló de su lentitud. Hagamos una carrera y veamos quién gana —propuso la tortuga. Al empezar la carrera, la liebre salió disparada, mientras que la tortuga avanzó lentamente. Al ver que sacaba una gran ventaja a la tortuga, la liebre se paró en un árbol a descansar. La tortuga siguió avanzando, poco a poco y sin detenerse. Cuando la liebre despertó, vio angustiada que la tortuga estaba a punto de llegar a la meta. La liebre corrió y corrió, pero fue demasiado tarde. La tortuga cruzó la meta, agotada pero feliz.",
                  takeaway:
                     "De poco vale el talento sin esfuerzo. Esta fábula de Esopo nos enseña que, con perseverancia y con esfuerzo, podemos lograr nuestras metas.",
                  videoUrl:
                     "https://res.cloudinary.com/dlnvhx1vm/video/upload/v1755619652/Media1_qwu2a5.mp4",
               },
            },
            {
               step: 2,
               type: "quiz",
               question: {
                  question: "¿Por qué se burló la liebre de la tortuga?",
                  options: [
                     "Porque la tortuga sabía nadar",
                     "Porque era más grande que ella",
                     "Porque caminaba muy despacio",
                     "Porque dormía mucho",
                  ],
                  answer: 2,
               },
            },
            {
               step: 3,
               type: "quiz",
               question: {
                  question: "¿Pregunta?",
                  options: ["Respuesta a", "Respuesta b", "Respuesta c", "Respuesta d"],
                  answer: 3,
               },
            },
            {
               step: 4,
               type: "quiz",
               question: {
                  question: "¿Pregunta?",
                  options: ["Respuesta a", "Respuesta b", "Respuesta c", "Respuesta d"],
                  answer: 1,
               },
            },
         ],
      },

      // MODULE #3
      {
         moduleId: module(3),
         order: 1,
         title: "La liebre y la tortuga",
         type: "quiz",
         steps: [
            {
               step: 1,
               type: "intro",
               intro: {
                  text: "Érase una vez una liebre muy veloz que presumía de ello ante todos los animales del bosque. Un día, se encontró con una tortuga que caminaba muy despacio. La liebre se burló de su lentitud. Hagamos una carrera y veamos quién gana —propuso la tortuga. Al empezar la carrera, la liebre salió disparada, mientras que la tortuga avanzó lentamente. Al ver que sacaba una gran ventaja a la tortuga, la liebre se paró en un árbol a descansar. La tortuga siguió avanzando, poco a poco y sin detenerse. Cuando la liebre despertó, vio angustiada que la tortuga estaba a punto de llegar a la meta. La liebre corrió y corrió, pero fue demasiado tarde. La tortuga cruzó la meta, agotada pero feliz.",
                  takeaway:
                     "De poco vale el talento sin esfuerzo. Esta fábula de Esopo nos enseña que, con perseverancia y con esfuerzo, podemos lograr nuestras metas.",
                  videoUrl:
                     "https://res.cloudinary.com/dlnvhx1vm/video/upload/v1755619652/Media1_qwu2a5.mp4",
               },
            },
            {
               step: 2,
               type: "quiz",
               question: {
                  question: "¿Por qué se burló la liebre de la tortuga?",
                  options: [
                     "Porque la tortuga sabía nadar",
                     "Porque era más grande que ella",
                     "Porque caminaba muy despacio",
                     "Porque dormía mucho",
                  ],
                  answer: 2,
               },
            },
            {
               step: 3,
               type: "quiz",
               question: {
                  question: "¿Pregunta?",
                  options: ["Respuesta a", "Respuesta b", "Respuesta c", "Respuesta d"],
                  answer: 3,
               },
            },
            {
               step: 4,
               type: "quiz",
               question: {
                  question: "¿Pregunta?",
                  options: ["Respuesta a", "Respuesta b", "Respuesta c", "Respuesta d"],
                  answer: 1,
               },
            },
         ],
      },

      // MODULE #4
      {
         moduleId: module(4),
         order: 1,
         title: "La liebre y la tortuga",
         type: "quiz",
         steps: [
            {
               step: 1,
               type: "intro",
               intro: {
                  text: "Érase una vez una liebre muy veloz que presumía de ello ante todos los animales del bosque. Un día, se encontró con una tortuga que caminaba muy despacio. La liebre se burló de su lentitud. Hagamos una carrera y veamos quién gana —propuso la tortuga. Al empezar la carrera, la liebre salió disparada, mientras que la tortuga avanzó lentamente. Al ver que sacaba una gran ventaja a la tortuga, la liebre se paró en un árbol a descansar. La tortuga siguió avanzando, poco a poco y sin detenerse. Cuando la liebre despertó, vio angustiada que la tortuga estaba a punto de llegar a la meta. La liebre corrió y corrió, pero fue demasiado tarde. La tortuga cruzó la meta, agotada pero feliz.",
                  takeaway:
                     "De poco vale el talento sin esfuerzo. Esta fábula de Esopo nos enseña que, con perseverancia y con esfuerzo, podemos lograr nuestras metas.",
                  videoUrl:
                     "https://res.cloudinary.com/dlnvhx1vm/video/upload/v1755619652/Media1_qwu2a5.mp4",
               },
            },
            {
               step: 2,
               type: "quiz",
               question: {
                  question: "¿Por qué se burló la liebre de la tortuga?",
                  options: [
                     "Porque la tortuga sabía nadar",
                     "Porque era más grande que ella",
                     "Porque caminaba muy despacio",
                     "Porque dormía mucho",
                  ],
                  answer: 2,
               },
            },
            {
               step: 3,
               type: "quiz",
               question: {
                  question: "¿Pregunta?",
                  options: ["Respuesta a", "Respuesta b", "Respuesta c", "Respuesta d"],
                  answer: 3,
               },
            },
            {
               step: 4,
               type: "quiz",
               question: {
                  question: "¿Pregunta?",
                  options: ["Respuesta a", "Respuesta b", "Respuesta c", "Respuesta d"],
                  answer: 1,
               },
            },
         ],
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

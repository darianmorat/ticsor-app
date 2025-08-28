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
         title: "Asociación de letras",
         type: "minigame",
         steps: [
            {
               step: 1,
               type: "intro",
               intro: {
                  text: "Aprende a comunicar tu identidad en lengua de señas. Escribe tu nombre, letra por letra, y descubre cómo cada una se representa con sus propios gestos. Así podrás visualizar cómo tu nombre cobra vida en este lenguaje visual.",
               },
            },
            {
               step: 2,
               type: "minigame",
               minigame: "spell_name",
            },
         ],
      },
      {
         moduleId: module(1),
         order: 2,
         title: "Asociación de letras",
         type: "quiz",
         steps: [
            {
               step: 1,
               type: "intro",
               intro: {
                  text: "Pon a prueba tu memoria y observación. Verás imágenes que representan palabras y deberás elegir la secuencia correcta de letras que las forman. Este ejercicio te ayudará a relacionar las señas con el alfabeto y reforzar tu aprendizaje.",
               },
            },
            {
               step: 2,
               type: "quiz_img",
               question: {
                  question:
                     "https://res.cloudinary.com/dijm4ylwb/image/upload/v1756261858/ChatGPT_Image_Aug_26_2025_09_30_28_PM_xzhgo7.png",
                  options: ["guysjde", "manzana", "mangoes", "melones"],
                  answer: 1,
               },
            },
            {
               step: 3,
               type: "quiz_img",
               question: {
                  question:
                     "https://res.cloudinary.com/dijm4ylwb/image/upload/v1756263964/maria_nlixir.jpg",
                  options: ["marta", "ramon", "maria", "melon"],
                  answer: 2,
               },
            },
         ],
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
                  text: "Érase una vez una liebre muy veloz que presumía de ello ante todos los animales del bosque. Un día, se encontró con una tortuga que caminaba muy despacio. La liebre se burló de su lentitud. Hagamos una carrera y veamos quién gana —propuso la tortuga. Al empezar la carrera, la liebre salió disparada, mientras que la tortuga avanzó lentamente. Al ver que sacaba una gran ventaja a la tortuga, la liebre se paró en un árbol a descansar. La tortuga siguió avanzando, poco a poco y sin detenerse. Cuando la liebre despertó, vio angustiada que la tortuga estaba a punto de llegar a la meta. La liebre corrió y corrió, pero fue demasiado tarde. La tortuga cruzó la meta, agotada pero feliz.",
                  takeaway:
                     "De poco vale el talento sin esfuerzo. Esta fábula de Esopo nos enseña que, con perseverancia y con esfuerzo, podemos lograr nuestras metas.",
                  videoUrl:
                     "https://res.cloudinary.com/dijm4ylwb/video/upload/v1756314325/Media_-_liebre_zfgidw.mp4",
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
         moduleId: module(2),
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
                     "https://res.cloudinary.com/dijm4ylwb/video/upload/v1756314242/Media_-_leon_uuqhyi.mp4",
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
         moduleId: module(2),
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
                     "https://res.cloudinary.com/dijm4ylwb/video/upload/v1756314329/Media_-_vanidoso_hjznjd.mp4",
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
      {
         moduleId: module(2),
         order: 4,
         title: "El lagarto está llorando",
         type: "quiz",
         steps: [
            {
               step: 1,
               type: "intro",
               intro: {
                  text: "El lagarto está llorando. La lagarta está llorando. El lagarto y la lagarta con delantaritos blancos han perdido sin querer su anillo de desposados. ¡Ay, su anillito de plomo, ay, su anillito plomado! Un cielo grande y sin gente monta en su globo a los pájaros. El sol, capitán redondo, lleva un chaleco de raso. ¡Miradlos qué viejos son! ¡Qué viejos son los lagartos! ¡Ay cómo lloran y lloran! ¡Ay, cómo están llorando! (Federico García Lorca)",
                  takeaway:
                     "El poema transmite tristeza por la pérdida de un objeto valioso (el anillo de desposados).",
                  videoUrl:
                     "https://res.cloudinary.com/dijm4ylwb/video/upload/v1756314211/Media_-_lagarto_ywtko0.mp4",
               },
            },
            {
               step: 2,
               type: "quiz",
               question: {
                  question: "¿Por qué están llorando el lagarto y la lagarta?",
                  options: [
                     "Porque se sienten solos",
                     "Porque no encuentran su comida",
                     "Porque han perdido su anillo de desposados",
                     "Porque está lloviendo",
                  ],
                  answer: 2,
               },
            },
            {
               step: 3,
               type: "quiz",
               question: {
                  question: "¿Cómo describe el poema a los lagartos?",
                  options: [
                     "Jóvenes y felices",
                     "Viejos y llorosos",
                     "Fuertes y valientes",
                     "Enfadados y grises",
                  ],
                  answer: 1,
               },
            },
            {
               step: 4,
               type: "quiz",
               question: {
                  question: "¿Qué lleva el sol, según el poema?",
                  options: [
                     "Un sombrero de flores",
                     "Un chaleco de raso",
                     "Un abrigo de lana",
                     "Una capa dorada",
                  ],
                  answer: 1,
               },
            },
            {
               step: 5,
               type: "quiz",
               question: {
                  question: "¿Cómo se llama el objeto perdido por los lagartos?",
                  options: [
                     "Collar de oro",
                     "Corona de flores",
                     "Anillo de plomo",
                     "Botón de cristal",
                  ],
                  answer: 2,
               },
            },
            {
               step: 6,
               type: "quiz",
               question: {
                  question: "¿Qué transmite el poema principalmente?",
                  options: [
                     "Alegría por una boda",
                     "Humor por el llanto de animales",
                     "Tristeza por la pérdida de algo valioso",
                     "Rabia por una discusión",
                  ],
                  answer: 2,
               },
            },
         ],
      },
      {
         moduleId: module(2),
         order: 5,
         title: "La cigarra y la hormiga",
         type: "quiz",
         steps: [
            {
               step: 1,
               type: "intro",
               intro: {
                  text: "Durante todo un verano, una cigarra se dedicó a cantar y a jugar sin preocuparse por nada. Un día, vio pasar a una hormiga con un enorme grano de trigo para almacenarlo en su hormiguero. La cigarra, no contenta con cantar y jugar, decidió burlarse de la hormiga y le dijo: —¡Qué aburrida eres!, deja de trabajar y dedícate a disfrutar. La hormiga, que siempre veía a la cigarra descansando, respondió: —Estoy guardando provisiones para cuando llegue el invierno, te aconsejo que hagas lo mismo. —Pues yo no voy a preocuparme por nada —dijo la cigarra—, por ahora tengo todo lo que necesito. Y continuó cantando y jugando. El invierno no tardó en llegar y la cigarra no encontraba comida por ningún lado. Desesperada, fue a tocar la puerta de la hormiga y le pidió algo de comer: —¿Qué hiciste tú en el verano mientras yo trabajaba? —preguntó la hormiga. —Andaba cantando y jugando —contestó la cigarra. —Pues si cantabas y jugabas en verano —repuso la hormiga—, sigue cantando y jugando en el invierno. Dicho esto, cerró la puerta. La cigarra aprendió a no burlarse de los demás y a trabajar con disciplina. Moraleja: Para disfrutar, primero tienes que trabajar.",
                  takeaway:
                     "La fábula enseña que el trabajo y la previsión son necesarios para disfrutar en el futuro.",
                  videoUrl:
                     "https://res.cloudinary.com/dijm4ylwb/video/upload/v1756314212/Media_-_cigarra_ow0ius.mp4",
               },
            },
            {
               step: 2,
               type: "quiz",
               question: {
                  question: "¿Qué hacía la cigarra durante el verano?",
                  options: [
                     "Almacenaba comida como la hormiga",
                     "Ayudaba a la hormiga a trabajar",
                     "Cantaba y jugaba sin preocuparse",
                     "Dormía todo el tiempo",
                  ],
                  answer: 2,
               },
            },
            {
               step: 3,
               type: "quiz",
               question: {
                  question: "¿Por qué la hormiga trabajaba durante el verano?",
                  options: [
                     "Porque no le gustaba cantar",
                     "Porque le encantaba cargar cosas pesadas",
                     "Porque quería ser la jefa del bosque",
                     "Porque guardaba provisiones para el invierno",
                  ],
                  answer: 3,
               },
            },
            {
               step: 4,
               type: "quiz",
               question: {
                  question: "¿Qué hizo la cigarra cuando llegó el invierno?",
                  options: [
                     "Siguió jugando en la nieve",
                     "Fue a pedir comida a la hormiga",
                     "Se escondió debajo de la tierra",
                     "Encontró comida en el bosque",
                  ],
                  answer: 1,
               },
            },
            {
               step: 5,
               type: "quiz",
               question: {
                  question: "¿Cómo reaccionó la hormiga cuando la cigarra pidió ayuda?",
                  options: [
                     "Le dio mucha comida",
                     "La regañó y luego la ayudó",
                     "Le cerró la puerta después de darle un consejo",
                     "La invitó a cantar",
                  ],
                  answer: 2,
               },
            },
            {
               step: 6,
               type: "quiz",
               question: {
                  question: "¿Cuál es la moraleja de la fábula?",
                  options: [
                     "Es mejor cantar que trabajar",
                     "Solo los más fuertes sobreviven",
                     "Para disfrutar, primero tienes que trabajar",
                     "Nunca confíes en las cigarras",
                  ],
                  answer: 2,
               },
            },
         ],
      },

      // MODULE #3
      {
         moduleId: module(3),
         order: 1,
         title: "La mosca que soñaba que era un águila",
         type: "quiz",
         steps: [
            {
               step: 1,
               type: "intro",
               intro: {
                  text: "Había una vez una mosca que todas las noches soñaba que era un Águila y que se encontraba volando por los Alpes y por los Andes. En los primeros momentos esto la volvía loca de felicidad; pero pasado un tiempo le causaba una sensación de angustia, pues hallaba las alas demasiado grandes, el cuerpo demasiado pesado, el pico demasiado duro y las garras demasiado fuertes; bueno que todo ese gran aparato le impedía posarse a gusto sobre los ricos pasteles o sobre las inmundicias humanas, así como surgir a conciencia dándose topes contra los vidrios de su cuarto. En realidad no quería andar en las grandes alturas, o en los espacios libres, ni mucho menos. Pero cuando volvía en sí lamentaba con toda el alma no ser un Águila para remontar montañas, y se sentía tristísima de ser una Mosca, y por eso volaba tanto, y estaba tan inquieta, y daba tantas vueltas, hasta que lentamente, por la noche, volvía a poner las sienes en la almohada.",
                  videoUrl:
                     "https://res.cloudinary.com/dijm4ylwb/video/upload/v1756316933/Media_-_mosca_hiq9kv.mp4",
               },
            },
            {
               step: 2,
               type: "quiz",
               question: {
                  question: "¿Qué soñaba la mosca cada noche?",
                  options: [
                     "Que comía pasteles en un jardín",
                     "Que se convertía en una abeja",
                     "Que volaba como un águila por los Alpes y los Andes",
                     "Que dormía tranquila en su cuarto",
                  ],
                  answer: 2,
               },
            },
            {
               step: 3,
               type: "quiz",
               question: {
                  question:
                     "¿Por qué comenzó a sentirse angustiada la mosca en sus sueños?",
                  options: [
                     "Porque no encontraba comida",
                     "Porque se perdía entre las montañas",
                     "Porque el cuerpo del águila era incómodo para ella",
                     "Porque la perseguían los humanos",
                  ],
                  answer: 2,
               },
            },
            {
               step: 4,
               type: "quiz",
               question: {
                  question:
                     "¿Qué actividades extrañaba la mosca mientras soñaba que era un águila?",
                  options: [
                     "Cazar ratones",
                     "Volar por encima del mar",
                     "Comer semillas con las palomas",
                     "Posarse sobre pasteles o inmundicias",
                  ],
                  answer: 3,
               },
            },
            {
               step: 5,
               type: "quiz",
               question: {
                  question: "¿Qué contradicción muestra el comportamiento de la mosca?",
                  options: [
                     "Quería ser un águila, pero no le gustaba volar",
                     "Soñaba con ser un águila, pero no quería dejar de ser mosca",
                     "Deseaba volar bajo, pero no podía",
                     "Detestaba dormir, pero soñaba cada noche",
                  ],
                  answer: 1,
               },
            },
            {
               step: 6,
               type: "quiz",
               question: {
                  question: "¿Qué mensaje o crítica se puede interpretar del texto?",
                  options: [
                     "Que debemos aprender a volar como las águilas",
                     "Que la inconformidad con lo que somos genera frustración",
                     "Que las moscas pueden tener sueños grandes",
                     "Que las águilas siempre son mejores que las moscas",
                  ],
                  answer: 1,
               },
            },
         ],
      },
      {
         moduleId: module(3),
         order: 2,
         title: "La historia de los dos que soñaron",
         type: "quiz",
         steps: [
            {
               step: 1,
               type: "intro",
               intro: {
                  text: "Cuentan que hubo en El Cairo un hombre poseedor de riquezas, pero tan generoso y liberal que todas las perdió, menos la casa de su padre, y que se vio forzado a trabajar para ganarse el pan. Trabajó tanto que el sueño lo rindió debajo de una higuera de su jardín y vio en el sueño a un desconocido que le dijo: -Tu fortuna está en Persia, en Ispahan; vete buscarla. A la madrugada siguiente se despertó y emprendió el largo viaje y afrontó los peligros de los desiertos, de los ríos, de las fieras y de los hombres. Llegó al fin a Ispahan, pero en el recinto de esa ciudad lo sorprendió la noche y se tendió a dormir en el patio de una mezquita. Había, junto a la mezquita, una casa, y una pandilla de ladrones atravesó la mezquita y se metió en la casa, y las personas que dormían se despertaron gritando y pidieron socorro. Los vecinos también gritaron, hasta que el capitán de la guardia de aquel distrito acudió con sus hombres y los bandidos huyeron por la azotea. El capitán hizo registrar la mezquita y en ella dieron con el hombre de El Cairo y lo llevaron a la cárcel. El juez le hizo comparecer y le dijo: -¿Quién eres y cuál es tu patria? El hombre declaró: -Soy de la ciudad famosa de El Cairo y mi nombre es Yacub El Magrebí. El juez le preguntó: -¿Qué te trajo a Persia? El hombre optó por la verdad y le dijo: -Un hombre me ordenó en un sueño que viniera a Ispahan porque ahí estaba mi fortuna. Ya estoy en Ispahan y veo que la fortuna que me prometió ha de ser esta cárcel. El juez echó a reír. -Hombre desatinado-le dijo-, tres veces he soñado con una casa en la ciudad de El Cairo, en cuyo fondo hay un jardín, y en el jardín un reloj de sol y después del reloj de sol una higuera, y bajo la higuera un tesoro. No he dado el menor crédito a esa mentira. Tú, sin embargo, has errado de ciudad en ciudad, bajo la sola fe de tu sueño. Que no vuelva a verte en Ispahan. Toma estas monedas y vete. El hombre las tomó y regresó a la patria. Debajo de la higuera de su casa (que era la del sueño del juez) desenterró el tesoro.",
                  videoUrl:
                     "https://res.cloudinary.com/dijm4ylwb/video/upload/v1756317155/Media_-_historia_gxtbhk.mp4",
               },
            },
            {
               step: 2,
               type: "quiz",
               question: {
                  question:
                     "¿Por qué el protagonista del relato se quedó solamente con la casa de su padre?",
                  options: [
                     "Porque la vendió para viajar a Persia",
                     "Porque la perdió en un juego de azar",
                     "Porque era tan generoso que perdió todo menos esa casa",
                     "Porque fue víctima de un robo",
                  ],
                  answer: 2,
               },
            },
            {
               step: 3,
               type: "quiz",
               question: {
                  question: "¿Qué lo impulsa a emprender el viaje a Ispahan?",
                  options: [
                     "Un deseo de conocer nuevas tierras",
                     "Una orden del juez",
                     "La búsqueda de trabajo",
                     "Un sueño en el que le revelan la ubicación de su fortuna",
                  ],
                  answer: 3,
               },
            },
            {
               step: 4,
               type: "quiz",
               question: {
                  question: "¿Cómo termina el protagonista en la cárcel en Ispahan?",
                  options: [
                     "Porque lo confunden con un ladrón cuando dormía en la mezquita",
                     "Porque no tenía papeles de identidad",
                     "Porque robó una casa",
                     "Porque insultó a un guardia",
                  ],
                  answer: 0,
               },
            },
            {
               step: 5,
               type: "quiz",
               question: {
                  question:
                     "¿Qué revela el juez al escuchar la historia del protagonista?",
                  options: [
                     "Que lo conocía desde El Cairo",
                     "Que él también tuvo un sueño con un tesoro, pero no le dio importancia",
                     "Que el sueño era una señal divina",
                     "Que los ladrones eran parte de un plan",
                  ],
                  answer: 1,
               },
            },
            {
               step: 6,
               type: "quiz",
               question: {
                  question: "¿Cuál es el desenlace del relato?",
                  options: [
                     "El hombre muere en la cárcel",
                     "El tesoro nunca fue encontrado",
                     "El protagonista regresa y encuentra el tesoro bajo la higuera de su jardín",
                     "El juez decide ir a buscar el tesoro en El Cairo",
                  ],
                  answer: 2,
               },
            },
         ],
      },
      {
         moduleId: module(3),
         order: 3,
         title: "La cima de una alta montaña",
         type: "quiz",
         steps: [
            {
               step: 1,
               type: "intro",
               intro: {
                  text: 'El principito escaló hasta la cima de una alta montaña. Las únicas montañas que él había conocido eran los tres volcanes que le llegaban a la rodilla. El volcán extinguido lo utilizaba como taburete. "Desde una montaña tan alta como ésta, se había dicho, podré ver todo el planeta y a todos los hombres..." Pero no alcanzó a ver más que algunas puntas de rocas. —¡Buenos días! —exclamó el principito al acaso. —¡Buenos días! ¡Buenos días! ¡Buenos días! —respondió el eco. —¿Quién eres tú? —preguntó el principito. —¿Quién eres tú?... ¿Quién eres tú?... ¿Quién eres tú?... —contestó el eco. —Sed mis amigos, estoy solo —dijo el principito. —Estoy solo... estoy solo... estoy solo... —repitió el eco. "¡Qué planeta más raro! —pensó entonces el principito—, es seco, puntiagudo y salado. Y los hombres carecen de imaginación; no hacen más que repetir lo que se les dice... En mi tierra tenía una flor; hablaba siempre la primera..."',
                  videoUrl:
                     "https://res.cloudinary.com/dijm4ylwb/video/upload/v1756317306/Media_-_lacima_mt8jwd.mp4",
               },
            },
            {
               step: 2,
               type: "quiz",
               question: {
                  question:
                     "¿Qué esperaba ver el Principito desde la cima de la montaña?",
                  options: [
                     "Una flor que hablaba",
                     "A todos los hombres y todo el planeta",
                     "A sus volcanes",
                     "Al eco de su voz",
                  ],
                  answer: 1,
               },
            },
            {
               step: 3,
               type: "quiz",
               question: {
                  question:
                     "¿Cómo eran las montañas que el Principito conocía en su planeta?",
                  options: [
                     "Más altas que las del planeta Tierra",
                     "Cubiertas de nieve",
                     "Tres volcanes que le llegaban a la rodilla",
                     "Solo una montaña muy grande",
                  ],
                  answer: 2,
               },
            },
            {
               step: 4,
               type: "quiz",
               question: {
                  question:
                     "¿Qué fue lo único que escuchó el Principito al hablar desde la cima?",
                  options: [
                     "A una flor respondiendo",
                     "Un animal salvaje",
                     "Una voz extraña desde lo lejos",
                     "El eco de sus propias palabras",
                  ],
                  answer: 3,
               },
            },
            {
               step: 5,
               type: "quiz",
               question: {
                  question:
                     "¿Cómo describió el Principito al planeta donde se encontraba?",
                  options: [
                     "Hermoso y verde",
                     "Cálido y húmedo",
                     "Raro, seco, puntiagudo y salado",
                     "Igual a su planeta",
                  ],
                  answer: 2,
               },
            },
            {
               step: 6,
               type: "quiz",
               question: {
                  question:
                     "¿Qué pensó el Principito sobre los hombres tras hablar con el eco?",
                  options: [
                     "Que eran sabios",
                     "Que eran silenciosos",
                     "Que no sabían escuchar",
                     "Que carecían de imaginación y repetían lo que se les decía",
                  ],
                  answer: 3,
               },
            },
         ],
      },
      {
         moduleId: module(3),
         order: 4,
         title: "El otro yo",
         type: "quiz",
         steps: [
            {
               step: 1,
               type: "intro",
               intro: {
                  text: "Se trataba de un muchacho corriente: en los pantalones se le formaban rodilleras, leia historietas, hacia ruido cuando comía, se metía los dedos a la nariz, roncaba en la siesta, se llamaba Armando Corriente en todo menos en una cosa: tenía Otro Yo. El Otro Yo usaba cierta poesía en la mirada, se enamoraba de las actrices, mentía cautelosamente, se emocionaba en los atardeceres. Al muchacho le preocupaba mucho su Otro Yo y le hacía sentirse incómodo frente a sus amigos. Por otra parte el Otro Yo era melancólico, y debido a ello, Armando no podía ser tan vulgar como era su deseo. Una tarde Armando llegó cansado del trabajo, se quitó los zapatos, movió lentamente los dedos de los pies y encendió la radio. En la radio estaba Mozart, pero el muchacho se durmió. Cuando despertó el Otro Yo lloraba con desconsuelo. En el primer momento, el muchacho no supo que hacer, pero después se rehízo e insultó concienzudamente al Otro Yo. Este no dijo nada, pero a la mañana siguiente se había suicidado. Al principio la muerte del Otro Yo fue un rudo golpe para el pobre Armando, pero enseguida pensó que ahora sí podría ser enteramente vulgar. Ese pensamiento lo reconfortó. Sólo llevaba cinco días de luto, cuando salió la calle con el propósito de lucir su nueva y completa vulgaridad. Desde lejos vio que se acercaban sus amigos. Eso le lleno de felicidad e inmediatamente estalló en risotadas. Sin embargo, cuando pasaron junto a él, ellos no notaron su presencia. Para peor de males, el muchacho alcanzó a escuchar que comentaban: «Pobre Armando. Y pensar que parecía tan fuerte y saludable». El muchacho no tuvo más remedio que dejar de reír y, al mismo tiempo, sintió a la altura del esternón un ahogo que se parecía bastante a la nostalgia. Pero no pudo sentir auténtica melancolía, porque toda la melancolía se la había llevado el Otro Yo.",
                  videoUrl:
                     "https://res.cloudinary.com/dijm4ylwb/video/upload/v1756317694/Media_-_otro_wlwblu.mp4",
               },
            },
            {
               step: 2,
               type: "quiz",
               question: {
                  question: "¿Qué hacía diferente a Armando Corriente de los demás?",
                  options: [
                     "Su afición por la música clásica",
                     "Su gran inteligencia",
                     'Tenía un "Otro Yo" con sensibilidad y melancolía',
                     "Era invisible para los demás",
                  ],
                  answer: 2,
               },
            },
            {
               step: 3,
               type: "quiz",
               question: {
                  question: "¿Por qué Armando se sentía incómodo con su Otro Yo?",
                  options: [
                     "Porque era violento",
                     "Porque lo hacía llorar sin razón",
                     "Porque no lo dejaba dormir",
                     "Porque era melancólico y no le permitía ser vulgar",
                  ],
                  answer: 3,
               },
            },
            {
               step: 4,
               type: "quiz",
               question: {
                  question:
                     "¿Cómo reaccionó Armando cuando encontró al Otro Yo llorando?",
                  options: [
                     "Lo consoló",
                     "Encendió la radio para calmarlo",
                     "Lo insultó de manera concienzuda",
                     "Salió corriendo de la casa",
                  ],
                  answer: 2,
               },
            },
            {
               step: 5,
               type: "quiz",
               question: {
                  question: "¿Qué hizo el Otro Yo tras ser insultado por Armando?",
                  options: [
                     "Se fue de casa",
                     "Escribió un poema",
                     "Se suicidó",
                     "Lloró hasta quedarse dormido",
                  ],
                  answer: 2,
               },
            },
            {
               step: 6,
               type: "quiz",
               question: {
                  question: "¿Qué efecto tuvo en Armando la muerte del Otro Yo?",
                  options: [
                     "Sintió alivio al principio, pero terminó sintiéndose vacío",
                     "Se convirtió en poeta",
                     "Fue internado en un hospital",
                     "Se volvió más melancólico que nunca",
                  ],
                  answer: 0,
               },
            },
         ],
      },
      {
         moduleId: module(3),
         order: 5,
         title: "El río (fragmento)",
         type: "quiz",
         steps: [
            {
               step: 1,
               type: "intro",
               intro: {
                  text: "Un hombre reflexiona en silencio mientras observa a su pareja dormida. Se siente agotado por las constantes peleas, amenazas y reclamos que ella le hace, los cuales ya no le conmueven. Aparentemente indiferente, se queda dormido mientras ella discute. Al despertar, ve a la mujer junto a él, durmiendo con signos de tensión. La toca, busca reconciliarse o quizá aferrarse a lo que queda entre ellos. La descripción de su contacto físico se vuelve intensa, simbólica y hasta violenta, en medio de una lucha entre deseo, rechazo y dolor compartido. Pero al final, de forma impactante, el narrador revela que la mujer está muerta: su cuerpo ha sido sacado del río, desnudo, con el pelo mojado y los ojos abiertos. Entonces, todo lo anterior —los recuerdos, el contacto, las palabras— se confunden con el sueño, la culpa o la imaginación.",
                  videoUrl:
                     "https://res.cloudinary.com/dijm4ylwb/video/upload/v1756318796/Media_-_rio_wxby8a.mp4",
               },
            },
            {
               step: 2,
               type: "quiz",
               question: {
                  question:
                     "¿Cuál es el estado emocional del hombre al inicio del texto?",
                  options: [
                     "Alegre y satisfecho con su relación",
                     "Profundamente enamorado",
                     "Agotado y emocionalmente insensible ante los conflictos",
                     "Temeroso de que su pareja lo abandone",
                  ],
                  answer: 2,
               },
            },
            {
               step: 3,
               type: "quiz",
               question: {
                  question: "¿Qué hace el hombre mientras su pareja discute?",
                  options: [
                     "Le grita y la enfrenta",
                     "Se va de la casa",
                     "Se queda dormido aparentemente indiferente",
                     "Llama a un amigo para desahogarse",
                  ],
                  answer: 2,
               },
            },
            {
               step: 4,
               type: "quiz",
               question: {
                  question:
                     "¿Cómo es descrito el contacto físico entre el hombre y la mujer mientras ella duerme?",
                  options: [
                     "Dulce y cuidadoso",
                     "Violento, simbólico y cargado de deseo y rechazo",
                     "Totalmente indiferente",
                     "Protector y afectuoso",
                  ],
                  answer: 1,
               },
            },
            {
               step: 5,
               type: "quiz",
               question: {
                  question: "¿Qué giro final se presenta en la historia?",
                  options: [
                     "La pareja se reconcilia y hacen las paces",
                     "La mujer se va de la casa en silencio",
                     "Se descubre que la mujer está muerta, sacada del río",
                     "El hombre muere mientras duerme",
                  ],
                  answer: 2,
               },
            },
            {
               step: 6,
               type: "quiz",
               question: {
                  question:
                     "¿Qué efecto provoca el desenlace en la interpretación del relato?",
                  options: [
                     "Confirma que era todo una fantasía feliz",
                     "Reafirma que el hombre la dejó",
                     "Hace que se reinterprete todo como un sueño, culpa o delirio",
                     "Deja en claro que fue un crimen pasional con testigos",
                  ],
                  answer: 2,
               },
            },
         ],
      },

      // MODULE #4
      {
         moduleId: module(4),
         order: 1,
         title: "El cambio climático y sus causas",
         type: "quiz",
         steps: [
            {
               step: 1,
               type: "intro",
               intro: {
                  text: "El cambio climático se refiere a los cambios a largo plazo de las temperaturas y los patrones climáticos. Estos cambios pueden ser naturales, debido a variaciones en la actividad solar o erupciones volcánicas grandes. Pero desde el siglo XIX, las actividades humanas han sido el principal motor del cambio climático, debido principalmente a la quema de combustibles fósiles como el carbón, el petróleo y el gas. La quema de combustibles fósiles genera emisiones de gases de efecto invernadero que actúan como una manta que envuelve a la Tierra, atrapando el calor del sol y elevando las temperaturas. Las emisiones principales de gases de efecto invernadero que provocan el cambio climático son el dióxido de carbono y el metano. Estos proceden del uso de la gasolina para conducir un coche o del carbón para calentar un edificio, por ejemplo. El desmonte de tierras y bosques también puede liberar dióxido de carbono. La agricultura y las actividades relacionadas con el petróleo y el gas son fuentes importantes de emisiones de metano. La energía, la industria, el transporte, los edificios, la agricultura y el uso del suelo se encuentran entre los principales emisores.",
                  videoUrl:
                     "https://res.cloudinary.com/dijm4ylwb/video/upload/v1756332251/Media_-_climatico_anbrff.mp4",
               },
            },
            {
               step: 2,
               type: "quiz",
               question: {
                  question: "¿A qué se refiere el cambio climático?",
                  options: [
                     "A los cambios de estaciones cada año",
                     "A las variaciones de temperatura durante el día",
                     "A cambios a largo plazo de temperaturas y patrones climáticos",
                     "A los desastres naturales causados por la lluvia",
                  ],
                  answer: 2,
               },
            },
            {
               step: 3,
               type: "quiz",
               question: {
                  question:
                     "¿Cuál ha sido el principal motor del cambio climático desde el siglo XIX?",
                  options: [
                     "Las tormentas solares",
                     "Las erupciones volcánicas",
                     "Las migraciones humanas",
                     "Las actividades humanas como la quema de combustibles fósiles",
                  ],
                  answer: 3,
               },
            },
            {
               step: 4,
               type: "quiz",
               question: {
                  question: "¿Qué hacen los gases de efecto invernadero en la atmósfera?",
                  options: [
                     "Disminuyen la temperatura de la Tierra",
                     "Generan más lluvia y nieve",
                     "Atrapan el calor del sol y elevan la temperatura",
                     "Permiten que los rayos solares salgan rápidamente",
                  ],
                  answer: 2,
               },
            },
            {
               step: 5,
               type: "quiz",
               question: {
                  question:
                     "¿Cuáles son los principales gases que provocan el cambio climático?",
                  options: [
                     "Oxígeno y helio",
                     "Nitrógeno y vapor de agua",
                     "Dióxido de carbono y metano",
                     "Cloro y carbono",
                  ],
                  answer: 2,
               },
            },
            {
               step: 6,
               type: "quiz",
               question: {
                  question: "¿Qué sectores emiten más gases de efecto invernadero?",
                  options: [
                     "Educación y salud",
                     "Transporte, agricultura, industria y energía",
                     "Turismo y entretenimiento",
                     "Comunicación y comercio",
                  ],
                  answer: 1,
               },
            },
         ],
      },
      {
         moduleId: module(4),
         order: 2,
         title: "Las redes sociales en la era digital",
         type: "quiz",
         steps: [
            {
               step: 1,
               type: "intro",
               intro: {
                  text: "En la era digital, las redes sociales se han convertido en un componente omnipresente en la vida cotidiana, ofreciendo a niños y adolescentes una ventana al mundo de la comunicación, el entretenimiento y la información. Sin embargo, su uso inadecuado o desmedido puede acarrear serios riesgos. Las redes sociales son plataformas digitales que permiten la creación y el intercambio de contenidos entre usuarios, facilitando la interacción a través de mensajes, imágenes, vídeos y otros formatos multimedia. Estas plataformas han evolucionado rápidamente desde simples foros y blogs hasta complejas comunidades virtuales, en las que se pueden formar grupos de intereses, seguir a personajes públicos y participar en conversaciones globales. Para niños y adolescentes, las redes sociales representan no solo un espacio de comunicación, sino también un medio para explorar su identidad, compartir sus intereses y mantenerse en contacto con amigos y familiares. La tecnología ha venido a cambiar nuestras vidas y en muchas ocasiones todavía no sabemos cómo actuar ante ella.",
                  videoUrl:
                     "https://res.cloudinary.com/dijm4ylwb/video/upload/v1756332381/Media_-_redes_zzrwcw.mp4",
               },
            },
            {
               step: 2,
               type: "quiz",
               question: {
                  question: "¿Qué son las redes sociales según el texto?",
                  options: [
                     "Plataformas para comprar productos en línea",
                     "Plataformas digitales para creación e intercambio de contenidos entre usuarios",
                     "Herramientas exclusivas para empresas",
                     "Programas de mensajería privada sin multimedia",
                  ],
                  answer: 1,
               },
            },
            {
               step: 3,
               type: "quiz",
               question: {
                  question:
                     "¿Cuál de estas actividades NO menciona el texto como posible en las redes sociales?",
                  options: [
                     "Seguir a personajes públicos",
                     "Formar grupos de interés",
                     "Realizar operaciones bancarias",
                     "Compartir imágenes y vídeos",
                  ],
                  answer: 2,
               },
            },
            {
               step: 4,
               type: "quiz",
               question: {
                  question:
                     "¿Por qué pueden acarrear riesgos las redes sociales en niños y adolescentes?",
                  options: [
                     "Por su uso inadecuado o desmedido",
                     "Porque son de pago",
                     "Porque solo muestran noticias viejas",
                     "Porque no permiten la interacción",
                  ],
                  answer: 0,
               },
            },
            {
               step: 5,
               type: "quiz",
               question: {
                  question:
                     "Según el texto, las redes sociales han evolucionado desde...",
                  options: [
                     "Videollamadas hasta plataformas de streaming",
                     "Simples foros y blogs hasta comunidades virtuales complejas",
                     "Mensajería SMS hasta aplicaciones móviles",
                     "Revistas impresas hasta portales web de noticias",
                  ],
                  answer: 1,
               },
            },
            {
               step: 6,
               type: "quiz",
               question: {
                  question:
                     "Para niños y adolescentes, ¿qué función tienen las redes sociales?",
                  options: [
                     "Únicamente un espacio para hacer tareas escolares",
                     "Un medio para explorar su identidad, compartir intereses y mantenerse en contacto",
                     "Solo una fuente de noticias",
                     "Un portal exclusivo de entretenimiento sin interacción",
                  ],
                  answer: 1,
               },
            },
         ],
      },
      {
         moduleId: module(4),
         order: 3,
         title: "¿Qué es un conflicto escolar? y sus Características",
         type: "quiz",
         steps: [
            {
               step: 1,
               type: "intro",
               intro: {
                  text: "Un conflicto escolar es una situación de desacuerdo, confrontación o disputa que ocurre dentro del contexto educativo. Este afecta a estudiantes, docentes, personal administrativo y, a veces, también a los padres o tutores. Estos conflictos pueden producirse por distintas razones y manifestarse de diferentes formas, causando un impacto significativo en el ambiente escolar, así como en las relaciones interpersonales dentro de la comunidad educativa. Las características de los conflictos escolares incluyen: variedad de causas (diferencias en opiniones, valores, intereses, malentendidos, falta de comunicación efectiva o competencia de recursos limitados), diversidad de actores (involucran a múltiples partes como estudiantes, profesores, familias y personal administrativo), manifestaciones variadas (pueden presentarse como conflictos de comunicación, violencia física y verbal, actitudes disruptivas, conductas antisociales o exclusión social), impacto en el ambiente escolar (generan un ambiente tenso poco apropiado para el aprendizaje, afectando el rendimiento académico y la salud emocional), y necesidad de intervención (requieren estrategias efectivas de mediación escolar y políticas de convivencia para prevenir su escalada y promover un ambiente educativo seguro y saludable).",
                  videoUrl:
                     "https://res.cloudinary.com/dijm4ylwb/video/upload/v1756332592/Media_-_conflicto_z8ntnd.mp4",
               },
            },
            {
               step: 2,
               type: "quiz",
               question: {
                  question: "¿Qué es un conflicto escolar?",
                  options: [
                     "Un examen que genera estrés entre los estudiantes",
                     "Una situación de desacuerdo o disputa dentro del contexto educativo",
                     "Un cambio de horario imprevisto en clases",
                     "Un castigo aplicado por los docentes",
                  ],
                  answer: 1,
               },
            },
            {
               step: 3,
               type: "quiz",
               question: {
                  question:
                     "¿Cuál de las siguientes es una causa común de los conflictos escolares?",
                  options: [
                     "La falta de tareas",
                     "El exceso de recreos",
                     "La competencia por recursos limitados",
                     "La repetición de materias",
                  ],
                  answer: 2,
               },
            },
            {
               step: 4,
               type: "quiz",
               question: {
                  question:
                     "¿Qué actores pueden estar involucrados en un conflicto escolar?",
                  options: [
                     "Solo estudiantes y docentes",
                     "Únicamente el personal administrativo",
                     "Estudiantes, profesores, familias y personal administrativo",
                     "Solo los padres de familia",
                  ],
                  answer: 2,
               },
            },
            {
               step: 5,
               type: "quiz",
               question: {
                  question:
                     "¿Cuál es una de las formas en que se manifiestan los conflictos escolares?",
                  options: [
                     "Aumento de la puntualidad",
                     "Mejor comunicación entre compañeros",
                     "Actitudes disruptivas y exclusión social",
                     "Más participación en clase",
                  ],
                  answer: 2,
               },
            },
            {
               step: 6,
               type: "quiz",
               question: {
                  question:
                     "¿Por qué es importante intervenir en los conflictos escolares?",
                  options: [
                     "Para incrementar el número de reglas escolares",
                     "Para generar un ambiente competitivo",
                     "Para prevenir su escalada y promover un ambiente seguro y saludable",
                     "Para reducir el número de profesores",
                  ],
                  answer: 2,
               },
            },
         ],
      },
      {
         moduleId: module(4),
         order: 4,
         title: "Drogadicción (Trastorno de Consumo de Sustancias)",
         type: "quiz",
         steps: [
            {
               step: 1,
               type: "intro",
               intro: {
                  text: "La adicción a las sustancias adictivas, (trastorno por el consumo de sustancias) es una enfermedad que afecta el cerebro y el comportamiento de una persona, y da lugar a una incapacidad para controlar el consumo de medicamentos o drogas ilícitas. El alcohol, la marihuana y la nicotina también se consideran sustancias adictivas. Cuando eres adicto, es posible que sigas consumiendo la sustancia adictiva a pesar del daño que provoca. La adicción a las sustancias adictivas puede comenzar con el uso recreativo de la sustancia en situaciones sociales y, en algunas personas, el consumo se hace más frecuente. En otras personas, especialmente con el consumo de opioides, la adicción a la sustancia adictiva comienza cuando toman medicamentos de venta con receta médica o los reciben de otras personas que tienen receta médica. El riesgo de adicción y la rapidez con que la persona se vuelve dependiente varían según la sustancia adictiva. Algunas sustancias adictivas, como los analgésicos opioides, presentan un riesgo mayor y causan adicción con mayor rapidez. Con el paso del tiempo, es posible que necesites dosis mayores de la sustancia adictiva para sentir los efectos. En poco tiempo, es posible que la necesites solo para sentirte bien. A medida que aumenta tu consumo de la sustancia adictiva, te darás cuenta de que es cada vez más difícil vivir sin ella. Los intentos por dejar el consumo de la sustancia adictiva pueden causar deseos intensos de consumirla y hacerte sentir físicamente enfermo (síntomas de abstinencia). La ayuda de tu proveedor de atención médica, tus familiares, amigos, grupos de apoyo y un programa de tratamiento organizado pueden ayudarte a superar la adicción a las sustancias adictivas y a evitar el consumo.",
                  videoUrl:
                     "https://res.cloudinary.com/dijm4ylwb/video/upload/v1756332763/Media_-_droga_heqhd8.mp4",
               },
            },
            {
               step: 2,
               type: "quiz",
               question: {
                  question: "¿Qué es la adicción a las sustancias adictivas?",
                  options: [
                     "Una decisión voluntaria de consumir drogas solo en fiestas",
                     "Una enfermedad que afecta el cerebro y el comportamiento",
                     "Una moda entre los jóvenes",
                     "Un hábito inofensivo si se controla",
                  ],
                  answer: 1,
               },
            },
            {
               step: 3,
               type: "quiz",
               question: {
                  question: "¿Qué sustancias se consideran adictivas según el texto?",
                  options: [
                     "Solo drogas ilegales",
                     "Únicamente medicamentos recetados",
                     "Alcohol, marihuana, nicotina y opioides",
                     "Bebidas energéticas",
                  ],
                  answer: 2,
               },
            },
            {
               step: 4,
               type: "quiz",
               question: {
                  question: "¿Cómo puede comenzar la adicción en algunas personas?",
                  options: [
                     "Por una alimentación deficiente",
                     "Por presión académica",
                     "Por el uso recreativo en situaciones sociales",
                     "Por escuchar música que incite al consumo",
                  ],
                  answer: 2,
               },
            },
            {
               step: 5,
               type: "quiz",
               question: {
                  question: "¿Qué puede suceder cuando una persona se vuelve adicta?",
                  options: [
                     "Necesita menos cantidad para sentir efectos",
                     "Puede dejar el consumo fácilmente",
                     "Necesita dosis mayores para sentirse bien",
                     "Siente mayor energía física permanentemente",
                  ],
                  answer: 2,
               },
            },
            {
               step: 6,
               type: "quiz",
               question: {
                  question: "¿Qué ayuda se menciona para superar la adicción?",
                  options: [
                     "Cambiar de ciudad",
                     "Dormir más",
                     "Grupos de apoyo, familiares, médicos y programas de tratamiento",
                     "Ver menos televisión",
                  ],
                  answer: 2,
               },
            },
         ],
      },
      {
         moduleId: module(4),
         order: 5,
         title: "¿Qué es la Inclusión?",
         type: "quiz",
         steps: [
            {
               step: 1,
               type: "intro",
               intro: {
                  text: "La inclusión es un concepto poderoso que abraza la idea de que todas las personas, sin importar sus diferencias o características individuales, deben tener igualdad de oportunidades y acceso a los mismos recursos y servicios. En esencia, la inclusión es la promoción de la diversidad, la equidad y la justicia. En el ámbito educativo, esto se traduce en un compromiso para garantizar que todos tengan la oportunidad de aprender juntos. Y hacerlo en un ambiente de aula regular, independientemente de sus habilidades, capacidades, grupo socioeconómico u orientación. La inclusión trata de superar las barreras y construir puentes hacia un mundo donde la diversidad es celebrada y apreciada. En Apolo Kids, entendemos la importancia de la inclusión en la educación y estamos comprometidos con esta visión de igualdad y diversidad. Por eso nos preguntamos, ¿estamos siendo inclusivos? ¿Qué herramientas necesitamos para ampliar nuestra visión hacia la inclusión?",
                  videoUrl:
                     "https://res.cloudinary.com/dijm4ylwb/video/upload/v1756332952/Media_-_inclusion_cjaxrx.mp4",
               },
            },
            {
               step: 2,
               type: "quiz",
               question: {
                  question: "¿Qué es la inclusión según el texto?",
                  options: [
                     "Una forma de enseñanza tradicional",
                     "Un método para clasificar estudiantes según sus habilidades",
                     "La promoción de la diversidad, la equidad y la justicia",
                     "Un sistema que solo aplica en casos especiales",
                  ],
                  answer: 2,
               },
            },
            {
               step: 3,
               type: "quiz",
               question: {
                  question: "¿Qué busca garantizar la inclusión en el ámbito educativo?",
                  options: [
                     "Que los estudiantes sean evaluados por su inteligencia",
                     "Que todos aprendan juntos en un aula regular",
                     "Que se formen grupos separados según capacidades",
                     "Que los docentes solo enseñen a quienes avanzan más",
                  ],
                  answer: 1,
               },
            },
            {
               step: 4,
               type: "quiz",
               question: {
                  question: "¿Cuál es el principio central de la inclusión?",
                  options: [
                     "La estandarización de habilidades",
                     "El control del comportamiento",
                     "La igualdad de oportunidades y el acceso a recursos",
                     "El uso exclusivo de tecnología en el aula",
                  ],
                  answer: 2,
               },
            },
            {
               step: 5,
               type: "quiz",
               question: {
                  question: "¿Qué debe hacer la inclusión frente a las diferencias?",
                  options: [
                     "Ignorarlas para promover la igualdad",
                     "Clasificarlas para analizarlas mejor",
                     "Celebrarlas y apreciarlas como parte de la diversidad",
                     "Minimizar su impacto en el aprendizaje",
                  ],
                  answer: 2,
               },
            },
            {
               step: 6,
               type: "quiz",
               question: {
                  question: "¿Qué pregunta clave plantea el texto sobre la inclusión?",
                  options: [
                     "¿La inclusión es más costosa?",
                     "¿Estamos siendo inclusivos?",
                     "¿Podemos excluir a algunos si es necesario?",
                     "¿Debemos enseñar solo a los mejores?",
                  ],
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

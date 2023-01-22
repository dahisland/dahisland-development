export const quizzData = {
  fr: {
    intro: [
      "Avez-vous apprécié la découverte de ce portfolio ? Qu'avez-vous retenu de votre navigation ?",
      "Je vous propose de le découvrir à travers ce petit quizz qui ne vous prendra que quelques secondes...",
      "C'est parti !",
    ],
    form: [
      {
        order: 1,
        name: "Q1",
        question:
          "Parmi les technologies suivantes, laquelle n'ai-je pas explorée pour le moment ?",
        radio: [
          {
            value: "Javascript",
            id: "javascript-Q1",
          },
          {
            value: "React",
            id: "react-Q1",
          },
          {
            value: "Vuejs",
            id: "vuejs-Q1",
          },
          {
            value: "Framer motion",
            id: "framer-motion-Q1",
          },
        ],
      },
      {
        order: 2,
        name: "Q2",
        question:
          "Lequel de ces projets ne fait pas encore partie de mon portfolio ? ",
        radio: [
          {
            value:
              "Coder le prototype d'une interface d'application en HTML5/CSS3",
            id: "prototype-Q2",
          },
          {
            value:
              "Mettre en place un système de gestion d'état global avec Redux toolkit",
            id: "redux-Q2",
          },
          {
            value:
              "Développer un algorithme de recherche en programmation fonctionnelle",
            id: "algo-Q2",
          },
          {
            value:
              "Créer un service backend pour une application mobile en Java et Kotlin",
            id: "backend-Q2",
          },
        ],
      },
      {
        order: 3,
        name: "Q3",
        question:
          "Quel métier ne fait pas partie de mon parcours professionnel ?",
        radio: [
          {
            value: "Comptable",
            id: "accountant-Q3",
          },
          {
            value: "Opératrice vidéo",
            id: "operator-Q3",
          },
          {
            value: "Vendeuse",
            id: "seller-Q3",
          },
          {
            value: "Graphiste multimédia",
            id: "designer-Q3",
          },
        ],
      },
    ],
    goodAnswers: [
      "Vuejs",
      "Créer un service backend pour une application mobile en Java et Kotlin",
      "Comptable",
    ],
    required: "Sélectionnez une réponse",
    result: {
      buttons: {
        retry: "Rejouer",
        contact: "Contactez-moi",
        submit: "Valider les réponses",
      },
      success: [
        "Bravo ! Vous avez tout bon !",
        "Si vous voulez échanger davantage, je vous invite à me contacter via le formulaire de contact de ce site.",
        "Je serai ravie de vous découvrir à mon tour, alors n'hésitez pas !",
      ],
      fail: [
        "Oh non !",
        "Quelques petites erreurs ? Ce n'est pas grave !",
        "N'hésitez pas à explorer davantage ce portfolio et à revenir chatouiller la petite coccinelle !",
        "Ou bien, que diriez-vous de me contacter directement via le formulaire de contact de ce site ?",
      ],
    },
  },

  en: {
    intro: [
      "Did you enjoy this portfolio ? what did you learn from this web experience ?",
      "I invite you to discover it through this little quiz. It will only take you a few seconds...",
      "Let's play !",
    ],
    form: [
      {
        order: 1,
        name: "Q1",
        question:
          "Which of these following technologies have I not explored yet?",
        radio: [
          {
            value: "Javascript",
            id: "javascript-Q1",
          },
          {
            value: "React",
            id: "react-Q1",
          },
          {
            value: "Vuejs",
            id: "vuejs-Q1",
          },
          {
            value: "Framer motion",
            id: "framer-motion-Q1",
          },
        ],
      },
      {
        order: 2,
        name: "Q2",
        question: "Which of these projects is not yet part of my portfolio?? ",
        radio: [
          {
            value:
              "Code the prototype of an application interface in HTML5/CSS3",
            id: "prototype-Q2",
          },
          {
            value: "Set up a global state management system with Redux toolkit",
            id: "redux-Q2",
          },
          {
            value: "Develop a functional programming search algorithm",
            id: "algo-Q2",
          },
          {
            value:
              "Create a backend service for a mobile application in Java and Kotlin",
            id: "backend-Q2",
          },
        ],
      },
      {
        order: 3,
        name: "Q3",
        question: "What job is not part of my career path?",
        radio: [
          {
            value: "Accountant",
            id: "accountant-Q3",
          },
          {
            value: "Video operator",
            id: "operator-Q3",
          },
          {
            value: "Seller",
            id: "seller-Q3",
          },
          {
            value: "Graphic designer",
            id: "designer-Q3",
          },
        ],
      },
    ],
    goodAnswers: [
      "Vuejs",
      "Create a backend service for a mobile application in Java and Kotlin",
      "Accountant",
    ],
    required: "Select an answer",
    result: {
      buttons: {
        retry: "Play again",
        contact: "Contact me",
        submit: "Validate answers",
      },
      success: [
        "Cheer ! You are good!",
        "If you want to discuss more, I invite you to contact me via the contact form on this site.",
        "I would be delighted to discover you in my turn, so do not hesitate!",
      ],
      fail: [
        "Oh no !",
        "A few small mistakes? Don't be disappointed !",
        "Feel free to explore this portfolio further and come back to tickle the little ladybug !",
        "Or, how about contacting me directly via the contact form on this site ?",
      ],
    },
  },
};

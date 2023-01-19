export const careerData = {
  fr: {
    title: "Parcours",
    jobs: [
      {
        name: "Développeuse Front-end",
        hover: "",
        variant: {
          hidden: {
            offsetDistance: "0%",
            rotate: -20,
            scale: 0,
            backgroundColor: "black",
          },
          visible: {
            offsetDistance: "1%",
            rotate: 0,
            scale: 1,
            backgroundColor: "black",
            transition: {
              ease: "easeInOut",
              duration: 0.5,
              yoyo: Infinity,
            },
          },
        },
      },
      {
        name: "Opératrice vidéo",
        hover: "",
        variant: {
          hidden: {
            offsetDistance: "0%",
            rotate: 25,
            scale: 0,
            left: 0,
            backgroundColor: "red",
          },
          visible: {
            offsetDistance: "15%",
            rotate: 0,
            scale: 1,
            left: -40,
            backgroundColor: "red",
            transition: {
              ease: "easeInOut",
              duration: 1,
              yoyo: Infinity,
            },
          },
        },
      },
    ],
  },
  en: {
    title: "Career",
    jobs: [
      {
        name: "Front-end developper",
        hover: "",
        variant: {
          hidden: {
            offsetDistance: "0%",
            rotate: -20,
            scale: 0,
            backgroundColor: "black",
          },
          visible: {
            offsetDistance: "1%",
            rotate: 0,
            scale: 1,
            backgroundColor: "black",
            transition: {
              ease: "easeInOut",
              duration: 0.5,
              yoyo: Infinity,
            },
          },
        },
      },
      {
        name: "Video operator",
        hover: "",
        variant: {
          hidden: {
            offsetDistance: "0%",
            rotate: 25,
            scale: 0,
            left: 0,
            backgroundColor: "red",
          },
          visible: {
            offsetDistance: "15%",
            rotate: 0,
            scale: 1,
            left: -40,
            backgroundColor: "red",
            transition: {
              ease: "easeInOut",
              duration: 1,
              yoyo: Infinity,
            },
          },
        },
      },
    ],
  },
};

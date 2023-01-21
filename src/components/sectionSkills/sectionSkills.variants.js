export const skillContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      ease: "easeIn",
      duration: 0.6,
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
};

export const skillItem = {
  hidden: { y: 50, opacity: 0, rotate: 20, scale: 0 },
  visible: {
    y: 0,
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: {
      ease: "easeIn",
    },
  },
};

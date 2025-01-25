import { easeing } from "./variables";

export const stagger = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

export const fadeInUp = {
  initial: {
    y: -60,
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: easeing,
    },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 0.5,
      ease: easeing,
    },
  },
};

export const fadeInRight = {
  initial: {
    opacity: 0,
    x: 50,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const fadeInLeft = {
  initial: {
    opacity: 0,
    x: -50,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const enter = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    transition: { duration: 0.3, ease: easeing },
    opacity: 1,
    scale: 1,
  },
};

export const fadeIn = {
  initial: {
    opacity: 0,
  },
  animate: {
    transition: { duration: 0.1 },
    opacity: 1,
  },
};

export const fadeInFaster = {
  initial: {
    opacity: 0,
  },
  animate: {
    transition: { duration: 0.01 },
    opacity: 1,
  },
};

export const arise = {
  initial: {
    y: 200,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
  exit: { opacity: 0 },
};

export const logo = {
  initial: {
    y: -60,
    opacity: 0,
    transition: { duration: 0.05, ease: easeing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easeing,
    },
  },
};

export const image = {
  initial: {
    x: 200,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: 0.3 },
  },
};

export const heading = {
  initial: {
    opacity: 0,
    y: 25,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export const table = {
  initial: { opacity: 0, x: 25 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export const cards = {
  initial: { opacity: 0, y: 25 },
  animate: {
    y: 0,
    opacity: 1,
  },
};

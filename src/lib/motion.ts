import type { Transition, Variants } from "framer-motion";

export const springHeavy: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 24,
  mass: 1.1,
};

export const springSnappy: Transition = {
  type: "spring",
  stiffness: 260,
  damping: 28,
  mass: 0.75,
};

export const springLift: Transition = {
  type: "spring",
  stiffness: 180,
  damping: 22,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: springHeavy,
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: springHeavy,
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: springHeavy,
  },
};

export const imageZoom: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.06,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

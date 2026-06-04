import type { Transition, Variants } from "framer-motion";

export const springHeavy: Transition = {
  type: "spring",
  stiffness: 120,
  damping: 22,
  mass: 1.2,
};

export const springSnappy: Transition = {
  type: "spring",
  stiffness: 280,
  damping: 26,
  mass: 0.8,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: springHeavy,
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.12,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: springHeavy,
  },
};

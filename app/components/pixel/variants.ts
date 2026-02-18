import type { Variants } from "framer-motion";

export function stepsEase(numSteps: number) {
  return (t: number) => Math.floor(t * numSteps) / numSteps;
}

export const pixelPopVariants = (fromRight: boolean): Variants => ({
  hidden: {
    opacity: 0,
    x: fromRight ? 80 : -80,
    y: 12,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      x: { duration: 0.5, ease: stepsEase(6) },
      y: { duration: 0.3, ease: stepsEase(4) },
      opacity: { duration: 0.35, ease: "easeOut" },
    },
  },
});

export const inventoryReveal: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.6,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      scale: { type: "spring", stiffness: 320, damping: 20, mass: 0.5 },
      opacity: { duration: 0.3 },
      filter: { duration: 0.4 },
    },
  },
};

export const descStagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.25 } },
};

export const descItem: Variants = {
  hidden: { opacity: 0, x: -8 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.25 },
  },
};

export const tagContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04, delayChildren: 0.35 } },
};

export const tagPop: Variants = {
  hidden: { opacity: 0, scale: 0, y: 4 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 500, damping: 18 },
  },
};

/**
 * Scroll reveals and motion timing — matches DESIGN_SYSTEM.md:
 * once, threshold 0.2, translateY 40px → 0, 0.6s, cubic-bezier ease, 0.1s stagger.
 */
export const EASE = [0.42, 0, 0.58, 1] as const;

export const scrollViewport = { once: true, amount: 0.2 } as const;

export const fadeUpTransition = {
  duration: 0.6,
  ease: EASE,
} as const;

export const scrollHeaderContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

export const scrollFadeUpChild = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: fadeUpTransition,
  },
};

export function cardScrollTransition(index: number) {
  return { ...fadeUpTransition, delay: index * 0.1 };
}

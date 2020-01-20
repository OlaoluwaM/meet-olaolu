export const spring2 = {
  type: 'spring',
  mass: 1,
  tension: 180,
  friction: 12,
};

export const spring = {
  type: 'spring',
  damping: 20,
  stiffness: 300,
};

export const tween = {
  type: 'tween',
  duration: 0.2,
  ease: 'easeIn',
};

export const mainVariant = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,
  },
};

export const Variant = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2,
      delayChildren: 0.4,
      staggerDirection: -1,
    },
  },
  hidden: {
    opacity: 0,
    y: -80,
  },
};

export const ItemVariant = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...spring2 },
  },
  hidden: {
    opacity: 0,
    y: -80,
  },
};

export const TitleVariant = {
  visible: { opacity: 1, y: 0, transition: { ...spring2 } },
  hidden: { opacity: 0, y: -80 },
};

export const ContentVariant = {
  visible: { opacity: 1, y: 0, transition: { ...spring2 } },
  hidden: { opacity: 0, y: -80 },
};

export const spring3 = { mass: 1, tension: 280, friction: 120 };

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
  ease: 'easeOut',
};

// Variants ---------------------------------------------------------
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

export const listVariant = {
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

export const itemVariant = {
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

export const titleVariant = {
  visible: { opacity: 1, y: 0, transition: { ...spring2 } },
  hidden: { opacity: 0, y: -80 },
};

export const contentVariant = {
  visible: { opacity: 1, y: 0, transition: { ...spring2 } },
  hidden: { opacity: 0, y: -80 },
};

export const socialsVariants = {
  visible: {
    opacity: 1,
    y: 3,
    transition: {
      when: 'beforeChildren',
      delay: 1.6,
    },
  },
  hidden: {
    opacity: 0,
    y: 80,
  },
};

export const linkVariant = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...spring, duration: 1.3 },
  },
  hidden: {
    opacity: {
      opacity: 0,
      y: 80,
    },
  },
};

export const pathVariant = {
  visible: i => ({
    pathLength: 1,
    pathOffset: 0.1,
    pathSpacing: 0.4,
    transition: { ...spring2, delay: i * 0.3 },
  }),

  hidden: {
    pathLength: 0,
    pathOffset: 1,
    pathSpacing: 1,
  },
};

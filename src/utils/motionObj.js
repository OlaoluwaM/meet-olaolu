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
  duration: 0.2,
  ease: 'easeIn',
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
    y: 0,
    transition: {
      when: 'beforeChildren',
      delay: 2,
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

export const svgVariant = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.7,
      delayChildren: 1.2,
    },
  },
  hidden: {
    opacity: 0,
  },
};

export const pathVariant = {
  visible: i => ({
    pathLength: 1,
    pathOffset: 0.1,
    pathSpacing: 0.6,
    // fill: 'rgba(255, 255, 255, 1)',
    transition: { ...spring2, duration: 2, delay: i * 0.5 },
  }),

  hidden: {
    pathLength: 0,
    pathOffset: 1,
    pathSpacing: 1,
    // fill: 'rgba(255, 255, 255, 0)',
  },
};

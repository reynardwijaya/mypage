const experienceCardAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      duration: 1,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
}

const experienceCardImageAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.4,
      duration: 0.8,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
}

const experienceCardTitleAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.35,
      duration: 0.9,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
}

const experienceCardPeriodAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.45,
      duration: 0.9,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
}

const experienceCardCompanyAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 1,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
}

const experienceCardDescriptionAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.55,
      duration: 1.1,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
}

export {
  experienceCardAnimation,
  experienceCardImageAnimation,
  experienceCardTitleAnimation,
  experienceCardDescriptionAnimation,
  experienceCardCompanyAnimation,
  experienceCardPeriodAnimation,
}

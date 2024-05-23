// https://github.com/animate-css/animate.css/blob/main/source/bouncing_entrances/bounceIn.css

const bounceIn = [
  {
    opacity: 0,
    transform: `scale3d(0.3, 0.3, 0.3)`,
    easeing: `cubic-bezier(0.215, 0.61, 0.355, 1)`,
  },
  {
    transform: `scale3d(1.1, 1.1, 1.1)`,
    offset: 0.2,
    easeing: `cubic-bezier(0.215, 0.61, 0.355, 1)`,
  },
  {
    transform: `scale3d(0.9, 0.9, 0.9)`,
    offset: 0.4,
    easeing: `cubic-bezier(0.215, 0.61, 0.355, 1)`,
  },
  {
    opacity: 1,
    transform: `scale3d(1.03, 1.03, 1.03)`,
    offset: 0.6,
    easeing: `cubic-bezier(0.215, 0.61, 0.355, 1)`,
  },
  {
    transform: `scale3d(0.97, 0.97, 0.97)`,
    offset: 0.8,
    easeing: `cubic-bezier(0.215, 0.61, 0.355, 1)`,
  },
  {
    opacity: 1,
    transform: `scale3d(1, 1, 1)`,
    easeing: `cubic-bezier(0.215, 0.61, 0.355, 1)`,
  }
]

// animation-duration: calc(var(--animate-duration) * 0.75);
export default bounceIn

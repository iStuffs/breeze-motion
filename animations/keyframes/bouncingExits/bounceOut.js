// https://github.com/animate-css/animate.css/blob/main/source/bouncing_exits/bounceOut.css

const bounceOut = [
  {
    transform: `scale3d(0.9, 0.9, 0.9)`,
    offset: 0.2,
  },
  {
    opacity: 1,
    transform: `scale3d(1.1, 1.1, 1.1)`,
    offset: 0.5,
  },
  {
    opacity: 1,
    transform: `scale3d(1.1, 1.1, 1.1)`,
    offset: 0.55,
  },
  {
    opacity: 0,
    transform: `scale3d(0.3, 0.3, 0.3)`,
  }
]

export default bounceOut
//animation-duration: calc(var(--animate-duration) * 0.75),

// https://github.com/animate-css/animate.css/blob/main/source/flippers/flipOutX.css

const flipOutX = [
  {
    transform: `perspective(400px)`,
    backfaceVisibility: `visible !important`,
  },
  {
    transform: `perspective(400px) rotate3d(1, 0, 0, -20deg)`,
    opacity: 1,
    offset: 0.3,
  },
 {
    transform: `perspective(400px) rotate3d(1, 0, 0, 90deg)`,
    opacity: 0,
  }
]

export default flipOutX
// animation-duration: calc(var(--animate-duration) * 0.75),

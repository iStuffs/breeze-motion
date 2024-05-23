// https://github.com/animate-css/animate.css/blob/main/source/flippers/flipOutY.css
const flipOutY =[
  {
    transform: `perspective(400px)`,
    backfaceVisibility: `visible !important`,
  },
  {
    transform: `perspective(400px) rotate3d(0, 1, 0, -15deg)`,
    opacity: 1,
    backfaceVisibility: `visible !important`,
    offset: 0.3
  },
  {
    transform: `perspective(400px) rotate3d(0, 1, 0, 90deg)`,
    opacity: 0,
    backfaceVisibility: `visible !important`,
  }
]

export default flipOutY
// animation-duration: calc(var(--animate-duration) * 0.75),

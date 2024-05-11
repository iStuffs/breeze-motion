// https://github.com/animate-css/animate.css/blob/main/source/flippers/flipInX.css

const flipInX = [
  {
    backfaceVisibility: `visible !important`,
    transform: `perspective(400px) rotate3d(1, 0, 0, 90deg)`,
    easing: `ease-in`,
    opacity: 0,
  },
  {
    transform: `perspective(400px) rotate3d(1, 0, 0, -20deg)`,
    easing: `ease-in`,
    offset: 0.4,
  },
  {
    transform: `perspective(400px) rotate3d(1, 0, 0, 10deg)`,
    opacity: 1,
    offset: 0.6,
  },
  {
    transform: `perspective(400px) rotate3d(1, 0, 0, -5deg)`,
    offset: 0.8,
  },
  {
    transform: `perspective(400px)`,
  }
]

export default flipInX

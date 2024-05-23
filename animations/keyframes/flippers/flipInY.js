// https://github.com/animate-css/animate.css/blob/main/source/flippers/flipInY.css

const flipInY = [
  {
    backfaceVisibility: `visible !important`,
    transform: `perspective(400px) rotate3d(0, 1, 0, 90deg)`,
    easing: `ease-in`,
    opacity: 0,
  },
  {
    backfaceVisibility: `visible !important`,
    transform: `perspective(400px) rotate3d(0, 1, 0, -20deg)`,
    easing: `ease-in`,
    offset: 0.4,
  },
  {
    backfaceVisibility: `visible !important`,
    transform: `perspective(400px) rotate3d(0, 1, 0, 10deg)`,
    opacity: 1,
    offset: 0.6,
  },
  {
    backfaceVisibility: `visible !important`,
    transform: `perspective(400px) rotate3d(0, 1, 0, -5deg)`,
    offset: 0.8,
  },
  {
    backfaceVisibility: `visible !important`,
    transform: `perspective(400px)`,
  }
]

export default flipInY

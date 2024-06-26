// https://github.com/animate-css/animate.css/blob/main/source/flippers/flip.css

const flip = [
  {
    transform: `perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)`,
    ease: `ease-out`,
    backfaceVisibility: `visible`,
  },
  {
    transform: `perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)`,
    easing: `ease-out`,
    backfaceVisibility: `visible`,
    offset: 0.4,
  },
  {
    transform: `perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)`,
    easing: `ease-in`,
    backfaceVisibility: `visible`,
    offset: 0.5,
  },
  {
    transform: `perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)`,
    easing: `ease-in`,
    backfaceVisibility: `visible`,
    offset: 0.8,
  },
  {
    transform: `perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)`,
    easing: `ease-in`,
    backfaceVisibility: `visible`,
  }
]

export default flip

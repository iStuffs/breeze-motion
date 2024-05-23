// https://github.com/animate-css/animate.css/blob/main/source/rotating_entrances/rotateInUpLeft.css

const rotateInUpLeft = [
  {
    transform: `rotate3d(0, 0, 1, 45deg)`,
    opacity: 0,
    transformOrigin: `left bottom`,
  },
  {
    transform: `translate3d(0, 0, 0)`,
    opacity: 1,
    transformOrigin: `left bottom`,
  }
]

export default rotateInUpLeft

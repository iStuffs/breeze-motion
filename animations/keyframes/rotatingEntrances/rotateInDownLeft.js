// https://github.com/animate-css/animate.css/blob/main/source/rotating_entrances/rotateInDownLeft.css

const rotateInDownLeft = [
  {
    transform: `rotate3d(0, 0, 1, -45deg)`,
    opacity: 0,
    transformOrigin: `left bottom`,
  },
  {
    transform: `translate3d(0, 0, 0)`,
    opacity: 1,
  }
]

export default rotateInDownLeft

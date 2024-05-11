// https://github.com/animate-css/animate.css/blob/main/source/rotating_entrances/rotateInDownRight.css

const rotateInDownRight = [
  {
    transform: `rotate3d(0, 0, 1, 45deg)`,
    opacity: 0,
    transformOrigin: `right bottom`,
  },
  {
    transform: `translate3d(0, 0, 0)`,
    opacity: 1,
  }
]

export default rotateInDownRight

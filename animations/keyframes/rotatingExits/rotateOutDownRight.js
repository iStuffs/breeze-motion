// https://github.com/animate-css/animate.css/blob/main/source/rotating_exits/rotateOutDownRight.css

const rotateOutDownRight = [
  {
    opacity: 1,
    transformOrigin: `right bottom`,
  },
  {
    transform: `rotate3d(0, 0, 1, -45deg)`,
    transformOrigin: `right bottom`,
    opacity: 0,
  }
]

export default rotateOutDownRight

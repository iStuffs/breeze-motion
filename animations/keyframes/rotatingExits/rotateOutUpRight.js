// https://github.com/animate-css/animate.css/blob/main/source/rotating_exits/rotateOutUpRight.css

const rotateOutUpRight =[
  {
    opacity: 1,
    transformOrigin: `right bottom`,
  },
  {
    transform: `rotate3d(0, 0, 1, 90deg)`,
    transformOrigin: `right bottom`,
    opacity: 0,
  }
]

export default rotateOutUpRight

// https://github.com/animate-css/animate.css/blob/main/source/rotating_exits/rotateOutUpLeft.css

const rotateOutUpLeft =[
  {
    opacity: 1,
    transformOrigin: `left bottom`,
  },
  {
    transform: `rotate3d(0, 0, 1, -45deg)`,
    transformOrigin: `left bottom`,
    opacity: 0,
  }
]

export default rotateOutUpLeft

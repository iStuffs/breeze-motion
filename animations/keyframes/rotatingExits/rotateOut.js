// https://github.com/animate-css/animate.css/blob/main/source/rotating_exits/rotateOut.css

const rotateOut =[
  {
    opacity: 1,
    transformOrigin: `center`,
  },
  {
    transform: `rotate3d(0, 0, 1, 200deg)`,
    opacity: 0,
    transformOrigin: `center`,
  }
]

export default rotateOut

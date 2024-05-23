// https://github.com/animate-css/animate.css/blob/main/source/rotating_entrances/rotateIn.css

const rotateIn = [
  {
    transform: `rotate3d(0, 0, 1, -200deg)`,
    opacity: 0,
    transformOrigin: `center`,
  },
  {
    transform: `translate3d(0, 0, 0)`,
    opacity: 1,
    transformOrigin: `center`,
  }
]

export default rotateIn

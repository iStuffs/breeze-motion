// https://github.com/animate-css/animate.css/blob/main/source/specials/jackInTheBox.css

const jackInTheBox = [
  {
    transformOrigin: `center bottom`,
    opacity: 0,
    transform: `scale(0.1) rotate(30deg)`,
  },
  {
    transform: `rotate(-10deg)`,
    offset: 0.5,
  },
  {
    transform: `rotate(3deg)`,
    offset: 0.7,
  },
  {
    opacity: 1,
    transform: `scale(1)`,
  }
]

export default jackInTheBox

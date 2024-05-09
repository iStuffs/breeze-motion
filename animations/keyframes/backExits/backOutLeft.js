// https://github.com/animate-css/animate.css/blob/main/source/back_exits/backOutLeft.css

const backOutLeft = [
  {
    transform: `scale(1)`,
    opacity: 1,
  },
  {
    transform: `translateX(0px) scale(0.7)`,
    opacity: 0.7,
    offset: 0.2,
  },
  {
    transform: `translateX(-2000px) scale(0.7)`,
    opacity: 0.7,
  }
]

export default backOutLeft

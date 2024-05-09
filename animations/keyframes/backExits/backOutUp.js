// https://github.com/animate-css/animate.css/blob/main/source/back_exits/backOutUp.css

const backOutUp = [
  {
    transform: `scale(1)`,
    opacity: 1,
  },
  {
    transform: `translateY(0px) scale(0.7)`,
    opacity: 0.7,
    offset: 0.2,
  },
  {
    transform: `translateY(-700px) scale(0.7)`,
    opacity: 0.7,
  }
]

export default backOutUp

// https://github.com/animate-css/animate.css/blob/main/source/back_exits/backOutDown.css

const  backOutDown = [
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
    transform: `translateY(700px) scale(0.7)`,
    opacity: 0.7,
  }
]

export default backOutDown

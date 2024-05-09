// https://github.com/animate-css/animate.css/blob/main/source/bouncing_entrances/bounceInDown.css

const bounceInDown = [
  {
    opacity: 0,
    transform: `translate3d(0, -3000px, 0) scaleY(3)`,
    easing: `cubic-bezier(0.215, 0.61, 0.355, 1)`,
  },
  {
    opacity: 1,
    transform: `translate3d(0, 25px, 0) scaleY(0.9)`,
    easing: `cubic-bezier(0.215, 0.61, 0.355, 1)`,
    offset: 0.6,
  },
  {
    transform: `translate3d(0, -10px, 0) scaleY(0.95)`,
    easing: `cubic-bezier(0.215, 0.61, 0.355, 1)`,
    offset: 0.75,
  },
  {
    transform: `translate3d(0, 5px, 0) scaleY(0.985)`,
    easing: `cubic-bezier(0.215, 0.61, 0.355, 1)`,
    offset: 0.9,
  },
  {
    transform: `translate3d(0, 0, 0)`,
    easing: `cubic-bezier(0.215, 0.61, 0.355, 1)`,
  }
]

export default bounceInDown

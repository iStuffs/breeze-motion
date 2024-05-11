// https://github.com/animate-css/animate.css/blob/main/source/lightspeed/lightSpeedInRight.css

const lightSpeedInRight = [
  {
    transform: `translate3d(100%, 0, 0) skewX(-30deg)`,
    opacity: 0,
    easing: 'ease-out',
  },
  {
    transform: `skewX(20deg)`,
    opacity: 1,
    easing: 'ease-out',
    offset: 0.6,
  },
  {
    transform: `skewX(-5deg)`,
    easing: 'ease-out',
    offset: 0.8,
  },
  {
    transform: `translate3d(0, 0, 0)`,
    easing: 'ease-out',
  }
]

export default lightSpeedInRight

// https://github.com/animate-css/animate.css/blob/main/source/lightspeed/lightSpeedInLeft.css

const lightSpeedInLeft = [
  {
    ease: 'ease-out',
    transform: `translate3d(-100%, 0, 0) skewX(30deg)`,
    opacity: 0,
  },
   {
    ease: 'ease-out',
    transform: `skewX(-20deg)`,
    opacity: 1,
    offset: 0.6,
  },
  {
    ease: 'ease-out',
    transform: `skewX(5deg)`,
    offset: 0.8,
  },
  {
    ease: 'ease-out',
    transform: `translate3d(0, 0, 0)`,
  }
]

export default lightSpeedInLeft

// https://github.com/animate-css/animate.css/blob/main/source/zooming_exits/zoomOutLeft.css

const zoomOutLeft = [
  {
    opacity: 1,
    transform: `scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)`,
    offset: 0.4,
    transformOrigin: `left center`,
  },
  {
    opacity: 0,
    transform: `scale(0.1) translate3d(-2000px, 0, 0)`,
    transformOrigin: `left center`,
  }
]

export default zoomOutLeft

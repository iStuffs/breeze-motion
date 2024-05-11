// https://github.com/animate-css/animate.css/blob/main/source/zooming_exits/zoomOut.css

const zoomOut =[
  {
    opacity: 1,
  },
   {
    opacity: 0,
    transform: scale3d(0.3, 0.3, 0.3),
    offset: 0.5,
  },
  {
    opacity: 0,
  }
]

export default zoomOut

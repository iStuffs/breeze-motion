// https://github.com/animate-css/animate.css/blob/main/source/specials/hinge.css

const  hinge = [
  {
    easing: `ease-in-out`,
    transformOrigin: `top left`,
  },
  {
    transformOrigin: `top left`,
    transform: `rotate3d(0, 0, 1, 80deg)`,
    easing: `ease-in-out`,
    offset: 0.2,
  },
  {
    transformOrigin: `top left`,
    transform: `rotate3d(0, 0, 1, 60deg)`,
    easing: `ease-in-out`,
    opacity: 1,
    offset: 0.4,
  },
  {
    transformOrigin: `top left`,
     transform: `rotate3d(0, 0, 1, 80deg)`,
     easing: `ease-in-out`,
     offset: 0.6,
   },
  {
    transformOrigin: `top left`,
     transform: `rotate3d(0, 0, 1, 60deg)`,
     easing: `ease-in-out`,
     opacity: 1,
     offset: 0.8,
   },
   {
    transformOrigin: `top left`,
     transform: `translate3d(0, 700px, 0)`,
     opacity: 0,
   }
]

export default hinge
// animation-duration: calc(var(--animate-duration) * 2),

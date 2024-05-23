// https://github.com/animate-css/animate.css/blob/main/source/attention_seekers/wobble.css

const wobble= [
  {
    transform: `translate3d(0, 0, 0)`,
  },
  {
    transform: `translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)`,
    offset: 0.15,
  },
  {
    transform: `translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)`,
    offset: 0.3,
  },
  {
    transform: `translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)`,
    offset: 0.45,
  },
  {
    transform: `translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)`,
    offset: 0.6,
  },
  {
    transform: `translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)`,
    offset: 0.75,
  },
  {
    transform: `translate3d(0, 0, 0)`,
  }
]

export default wobble

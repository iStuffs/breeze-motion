// https://github.com/animate-css/animate.css/blob/main/source/attention_seekers/swing.css

const swing = [
  {
    transformOrigin: `top center`,
  },
  {
    transform: `rotate3d(0, 0, 1, 15deg)`,
    transformOrigin: `top center`,
    offset: 0.2
  },
  {
    transform: `rotate3d(0, 0, 1, -10deg)`,
    transformOrigin: `top center`,
    offset: 0.4
  },
  {
    transform: `rotate3d(0, 0, 1, 5deg)`,
    transformOrigin: `top center`,
    offset: 0.6,
  },
  {
    transform: `rotate3d(0, 0, 1, -5deg)`,
    transformOrigin: `top center`,
    offset: 0.8,
  },
  {
    transform: `rotate3d(0, 0, 1, 0deg)`,
    transformOrigin: `top center`,
    offset: 1,
  }
]

export default swing

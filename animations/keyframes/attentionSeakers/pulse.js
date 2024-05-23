// https://github.com/animate-css/animate.css/blob/main/source/attention_seekers/pulse.css

const pulse = [
  {
    transform: `scale3d(1, 1, 1)`,
    easing: `ease-in-out`,
  },
  {
    transform: `scale3d(1.05, 1.05, 1.05)`,
    easing: `ease-in-out`,
    offset: 0.5,
  },
  {
    transform: `scale3d(1, 1, 1)`,
    easing: `ease-in-out`,
  }
]

export default pulse
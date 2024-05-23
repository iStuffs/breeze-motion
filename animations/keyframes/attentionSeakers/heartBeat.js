// https://github.com/animate-css/animate.css/blob/main/source/attention_seekers/heartBeat.css

const heartBeat = [
  {
    transform: `scale(1)`,
    easing: `ease-in-out`,
  },
  {
    transform: `scale(1.3)`,
    easing: `ease-in-out`,
    offset: 0.14,
  },
  {
    transform: `scale(1)`,
    easing: `ease-in-out`,
    offset: 0.28,
  },
  {
    transform: `scale(1.3)`,
    easing: `ease-in-out`,
    offset: 0.42,
  },
  {
    transform: `scale(1)`,
    easing: `ease-in-out`,
    offset: 0.70,
  }
]

// animation-duration: calc(var(--animate-duration) * 1.3);
export default heartBeat

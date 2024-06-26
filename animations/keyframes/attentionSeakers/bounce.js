// https://github.com/animate-css/animate.css/blob/main/source/attention_seekers/bounce.css

const bounce = [
  {
    easing: `cubic-bezier(0.215, 0.61, 0.355, 1)`,
    transform: `translate3d(0, 0, 0)`,
    transformOrigin: 'center bottom',
  },
  {
    easing: `cubic-bezier(0.215, 0.61, 0.355, 1)`,
    transform: `translate3d(0, 0, 0)`,
    transformOrigin: 'center bottom',
    offset: 0.2,
  },

  {
    easing: `cubic-bezier(0.755, 0.05, 0.855, 0.06)`,
    transform: `translate3d(0, -30px, 0) scaleY(1.1)`,
    transformOrigin: 'center bottom',
    offset: 0.4,
  },
  {
    easing: `cubic-bezier(0.755, 0.05, 0.855, 0.06)`,
    transform: `translate3d(0, -30px, 0) scaleY(1.1)`,
    transformOrigin: 'center bottom',
    offset: 0.43,
  },
  {
    easing: `cubic-bezier(0.215, 0.61, 0.355, 1)`,
    transform: `translate3d(0, 0, 0)`,
    transformOrigin: 'center bottom',
    offset: 0.53,
  },
  {
    easing: `cubic-bezier(0.755, 0.05, 0.855, 0.06)`,
    transform: `translate3d(0, -15px, 0) scaleY(1.05)`,
    transformOrigin: 'center bottom',
    offset: 0.7,
  },
  {
    easing: `cubic-bezier(0.215, 0.61, 0.355, 1)`,
    transform: `translate3d(0, 0, 0) scaleY(0.95)`,
    transformOrigin: 'center bottom',
    offset: 0.8,
  },
  {
    transform: `translate3d(0, -4px, 0) scaleY(1.02)`,
    transformOrigin: 'center bottom',
    offset: 0.9,
  },
  {
    easing: `cubic-bezier(0.215, 0.61, 0.355, 1)`,
    transform: `translate3d(0, 0, 0)`,
    transformOrigin: 'center bottom',
  }
]

export default bounce
// https://github.com/animate-css/animate.css/blob/main/source/attention_seekers/headShake.css

const headShake  = [
  {
    transform: `translateX(0)`,
    easing: `ease-in-out`,
  },
  {
    transform: `translateX(2px) rotateY(3deg)`,
    easing: `ease-in-out`,
    offset: 0.043,
  },
  {
    transform: `translateX(-6px) rotateY(-9deg)`,
    easing: `ease-in-out`,
    offset: 0.065,
  },
  {
    transform: `translateX(5px) rotateY(7deg)`,
    easing: `ease-in-out`,
    offset: 0.185,
  },
  {
    transform: `translateX(-3px) rotateY(-5deg)`,
    easing: `ease-in-out`,
    offset: 0.315,
  },
  {
    transform: `translateX(0)`,
    easing: `ease-in-out`,
    offset: 0.5
  },
]

export default headShake

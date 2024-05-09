// https://github.com/animate-css/animate.css/blob/main/source/attention_seekers/headShake.css

const headShake  = [
  {
    transform: `translateX(0)`,
  },
  {
    transform: `translateX(2px) rotateY(3deg)`,
    offset: 0.043,
  },
  {
    transform: `translateX(-6px) rotateY(-9deg)`,
    offset: 0.065,
  },
  {
    transform: `translateX(5px) rotateY(7deg)`,
    offset: 0.185,
  },
  {
    transform: `translateX(-3px) rotateY(-5deg)`,
    offset: 0.315,
  },
  {
    transform: `translateX(0)`,
    offset: 0.5
  },

]

export default headShake

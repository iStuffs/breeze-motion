export default vScrollTriggerAnimation = {
  mounted: (el) => {
    const target = el

    // const options = {
    //   delay
    //   direction
    //   duration
    //   easing
    //   endDelay
    //   fill
    //   iterationStart
    //   iterations
    //   composite
    //   iterationComposite
    //   pseudoElement
    // }
    const keyframeEffect = new KeyframeEffect(target, keyframes, options)
    const animationEffet = keyframeEffect // keyframeEffect ( || SequenceEffect || GroupEffects)
    const animationTimeline = Document.timeline

    new Animation(animationEffet, animationTimeline)
    useIntersectionObserver(target, bindings)
    console.log(el)
  }
}

<template>
  <div>
    <BreakCrumbs />
    <h1>Bounce in up animation</h1>
    <div class="compare-grid">
      <SimpleBox class="animate__animated animate__bounceInUp animate__infinite" />
      <SimpleBox ref="box" id="js-box"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import keyframes from '../../animations/keyframes/bouncingEntrances/bounceInUp'

const box = ref(null)

onMounted(()=> {
  const options = {
  duration: 1000,
  iterations: Infinity,
}
const target = document.getElementById('js-box')
const keyframeEffect = new KeyframeEffect(target, keyframes, options)
const animation = new Animation(keyframeEffect)

  animation.play()
})
</script>

<style>
.compare-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
}
</style>
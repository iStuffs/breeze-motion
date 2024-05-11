<template>
  <div>
    <BreakCrumbs />
    <h1>Fade in top right animation</h1>
    <div class="compare-grid">
      <SimpleBox class="animate__animated animate__fadeInTopRight animate__infinite" />
      <SimpleBox ref="box" id="js-box"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import keyframes from '../../animations/keyframes/fadingEntrances/fadeInTopRight'

const box = ref(null)

onMounted(()=> {
  const options = {
  duration: 1000,
  iterations: Infinity,
  easing: 'ease',
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
<template>
  <div>
    <BreakCrumbs />
    <h1>Hinge animation</h1>
    <div class="compare-grid">
      <SimpleBox class="animate__animated animate__hinge animate__infinite" />
      <SimpleBox ref="box" id="js-box"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import keyframes from '../../animations/keyframes/specials/hinge'

const box = ref(null)

onMounted(()=> {
  const options = {
  duration: 2000,
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
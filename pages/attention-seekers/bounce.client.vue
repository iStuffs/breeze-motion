<template>
  <div>
    <BreakCrumbs />
    <h1>Bounce animation</h1>
    <div class="compare-grid">
      <SimpleBox class="animate__animated animate__bounce animate__infinite" />
      <SimpleBox ref="box" id="js-box"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import bounce from '../../animations/keyframes/attentionSeakers/bounce'

const box = ref(null)

onMounted(()=> {
  const options = {
  duration: 1000,
  iterations: Infinity,
}
const target = document.getElementById('js-box')
const keyframeEffect = new KeyframeEffect(target, bounce, options)
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
<template>
  <component :is="component" v-bind="attributes" class="animation-card">
    <h2>{{ name }}</h2>

    <div class="animation-card__footer">
      <p>Category: {{ category }}</p>
      <p>Status: {{ status }}</p>
    </div>
  </component>
</template>

<script lang="ts" setup>
import {kebabCase} from 'change-case'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  status: {
    type: [String, null],
    default: null,
  }
})

const component = computed(() => {
  return props.status ? 'NuxtLink' : 'div'
})

const attributes = computed(() => {
  const to = `/${kebabCase(props.category)}/${kebabCase(props.name)}`
  return props.status ? { to } : null
})

</script>

<style>

</style>
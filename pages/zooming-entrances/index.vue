
<template>
  <div>
    <BreakCrumbs />
    <h1>Zooming entrances</h1>
    <h2>Status</h2>
    <ul>
      <li>
        <NuxtLink to="/zooming-entrances/zoom-in">Zoom in</NuxtLink>
        <input type="checkbox" checked disabled>
      </li>
      <li>
        <NuxtLink to="/zooming-entrances/zoom-in-down">Zoom in Down</NuxtLink>
        <input type="checkbox" checked disabled>
      </li>
      <li>
        <NuxtLink to="/zooming-entrances/zoom-in-left">Zoom in left</NuxtLink>
        <input type="checkbox" checked disabled>
      </li>
      <li>
        <NuxtLink to="/zooming-entrances/zoom-in-right">Zoom in right</NuxtLink>
        <input type="checkbox" checked disabled>
      </li>
      <li>
        <NuxtLink to="/zooming-entrances/zoom-in-up">Zoom in up</NuxtLink>
        <input type="checkbox" checked disabled>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>
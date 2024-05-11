
<template>
  <div>
    <BreakCrumbs />
    <h1>Zooming exits</h1>
    <h2>Status</h2>
    <ul>
      <li>
        <NuxtLink to="/zooming-exits/zoom-out">Zoom out</NuxtLink>
        <input type="checkbox" checked disabled>
      </li>
      <li>
        <NuxtLink to="/zooming-exits/zoom-out-down">Zoom out Down</NuxtLink>
        <input type="checkbox" checked disabled>
      </li>
      <li>
        <NuxtLink to="/zooming-exits/zoom-out-left">Zoom out left</NuxtLink>
        <input type="checkbox" checked disabled>
      </li>
      <li>
        <NuxtLink to="/zooming-exits/zoom-out-right">Zoom out right</NuxtLink>
        <input type="checkbox" checked disabled>
      </li>
      <li>
        <NuxtLink to="/zooming-exits/zoom-out-up">Zoom out up</NuxtLink>
        <input type="checkbox" checked disabled>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>
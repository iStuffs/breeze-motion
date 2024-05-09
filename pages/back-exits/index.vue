<template>
  <div>
    <BreakCrumbs />
    <h1>Back exits</h1>
    <h2>Status</h2>
    <ul>
      <li>
        <NuxtLink to="/back-exits/back-out-down">Back out down</NuxtLink>
        <input type="checkbox" checked disabled>
      </li>
      <li>
        <NuxtLink to="/back-exits/back-out-left">Back out left</NuxtLink>
        <input type="checkbox" checked disabled>
      </li>
      <li>
        <NuxtLink to="/back-exits/back-out-right">Back out right</NuxtLink>
        <input type="checkbox" checked disabled>
      </li>
      <li>
        <NuxtLink to="/back-exits/back-out-up">Back out up</NuxtLink>
        <input type="checkbox" checked disabled>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>
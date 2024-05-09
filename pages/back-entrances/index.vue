<template>
  <div>
    <BreakCrumbs />
    <h1>Back entrances</h1>
    <h2>Status</h2>
    <ul>
      <li>
        <NuxtLink to="/back-entrances/back-in-down">Back in down</NuxtLink>
        <input type="checkbox" checked disabled>
      </li>
      <li>
        <NuxtLink to="/back-entrances/back-in-left">Back in left</NuxtLink>
        <input type="checkbox" checked disabled>
      </li>
      <li>
        <NuxtLink to="/back-entrances/back-in-right">Back in right</NuxtLink>
        <input type="checkbox" checked disabled>
      </li>
      <li>
        <NuxtLink to="/back-entrances/back-in-up">Back in up</NuxtLink>
        <input type="checkbox" checked disabled>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>
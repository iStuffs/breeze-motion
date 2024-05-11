<template>
  <div>
    <BreakCrumbs />
    <h1>Flippers animations</h1>
    <h2>Status</h2>
    <ul>
      <li>
        <NuxtLink to="/flippers/flip">Flip</NuxtLink>
        <input type="checkbox" checked disabled>
      </li>
      <li>
        <NuxtLink to="/flippers/flip-in-x">Flip in X</NuxtLink>
        <input type="checkbox" checked disabled>
      </li>
      <li>
        <NuxtLink to="/flippers/flip-in-y">Flip in Y</NuxtLink>
        <input type="checkbox" checked disabled>
      </li>
      <li>
        <NuxtLink to="/flippers/flip-out-x">Flip out X</NuxtLink>
        <input type="checkbox" checked disabled>
      </li>
      <li>
        <NuxtLink to="/flippers/flip-out-y">Flip out Y</NuxtLink>
        <input type="checkbox" checked disabled>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>
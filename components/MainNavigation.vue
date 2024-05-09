<template>
  <nav class="main-navigation">
    <ul><li>
      <NuxtLink to="/">Breeze motion</NuxtLink>
    </li></ul>
  </nav>
</template>

<script lang="ts" setup>

</script>

<style>
.main-navigation ul {
  list-style: none;
  padding-inline: 0;
}
.main-navigation a {
  text-decoration: none;
  color: var(--text-color);
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.5rem;
}
</style>
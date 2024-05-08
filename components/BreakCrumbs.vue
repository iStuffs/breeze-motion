<template>
  <ol v-if="paths.length > 0">
    <li v-for="path in paths">
    <NuxtLink :to="path.path">{{ path.label }}</NuxtLink>
    </li>
  </ol>
</template>

<script lang="ts" setup>
  const route = useRoute()
  //const router = useRouter()
  const pathsSegments = route.fullPath.substring(1).split('/')
  const paths = pathsSegments.reduce((accumulator: {path:String, label:String}[], segment, currentIndex) => {

    const path = currentIndex - 1 < 0 ? `/${segment}` : `${accumulator[currentIndex - 1].path}/${segment}`
    const label = segment.replace(/-/g, ' ')
    //if (router.hasRoute(path)) {
      accumulator.push({path, label})
    //}
    return accumulator
  }, [])
</script>

<style>

</style>
<script setup>
defineProps(['full_name', 'description', 'html_url'])
</script>

<template>
  <article>
    <h3>{{ full_name }}</h3>
    <p>{{ description }}</p>
    <a :href="html_url" target="_blank">ver no github</a>
  </article>
</template>

<style scoped>

</style>

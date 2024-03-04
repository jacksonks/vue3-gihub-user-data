<script setup>
defineProps(['login', 'name', 'company', 'bio', 'avatar_url','location', 'blog'])
</script>

<template>
<div>
  <img :src="avatar_url">
  <p>@{{ login }}</p>
  <p>{{ location }}</p>
  <p>{{ blog }}</p>
  <h1>{{ name }} </h1>
  <h2>{{ company }} </h2>
  <span>{{ bio }}</span>
</div>
</template>

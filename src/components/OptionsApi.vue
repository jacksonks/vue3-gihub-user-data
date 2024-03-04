<script>
export default {
  data() {
    return {
      searchInput: '',
      avatar_url: 'http://unsplash.it/256',
      login: 'Lorem ipsum',
      name: 'Lorem ipsum dolor sit amet',
      company: 'Lorem ipsum',
      location: 'Lorem ipsum',
      blog: 'Lorem ipsum',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    }
  },
  methods: {
    async fetchGithubUser() {
      const response = await fetch(`https://api.github.com/users/${this.searchInput}`)
      const{ login, bio, avatar_url, company, name, location, blog } = await response.json()
      this.login = login
      this.name = name
      this.bio = bio
      this.company = company
      this.avatar_url = avatar_url
      this.location = location
      this.blog = blog
    }
  }
}
</script>

<template>
<div>
  <h2>GitHub User Data</h2>
  <input type="text" v-model="searchInput">
  <button @click="fetchGithubUser">Carregar Usuário</button>
  <img :src="avatar_url">
  <p>@{{ login }}</p>
  <p>{{ location }}</p>
  <p>{{ blog }}</p>
  <h1>{{ name }} </h1>
  <h2>{{ company }} </h2>
  <span>{{ bio }}</span>
</div>
</template>

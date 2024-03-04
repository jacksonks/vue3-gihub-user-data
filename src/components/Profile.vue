<script setup>
import { reactive, ref, computed } from 'vue'
import UserInfo from '@/components/UserInfo.vue'
import Repository from '@/components/Repository.vue'
import FormSearch from '@/components/FormSearch.vue'
const searchInput = ref('')
const state = reactive({
  avatar_url: '',
  login: '',
  name: '',
  company: '',
  location: '',
  blog: '',
  bio: '',
  repositories: '',
})
async function fetchGithubUser(parameter) {
  event.preventDefault()
  const response = await fetch(`https://api.github.com/users/${parameter}`)
  const{ login, bio, avatar_url, company, name, location, blog } = await response.json()
  console.log(response.json)
  state.login = login
  state.name = name
  state.bio = bio
  state.company = company
  state.avatar_url = avatar_url
  state.location = location
  state.blog = blog
  fetchUserRepositories(parameter)
}
async function fetchUserRepositories(userName) {
  const response = await fetch(`https://api.github.com/users/${userName}/repos`)
  const repos = await response.json()
  state.repositories = repos;
}
const repositoriesCount = computed(() => {
  return state.repositories.length > 0
    ? `possui ${state.repositories.length} repositórios público`
    : `não possui nenhum repositório público`
  }
)
</script>

<template>
<div>
  <slot></slot>
  <p>pesquisando por <strong>https://api.github/users/{{ searchInput }}</strong></p>
  <form-search @formsubmit="fetchGithubUser" v-model="searchInput"></form-search>
  <div v-if="state.login != ''">
    <UserInfo
      :login="state.login"
      :name="state.name"
      :company="state.company"
      :bio="state.bio"
      :blog="state.blog"
      :location="state.location"
      :avatar_url="state.avatar_url"
    ></UserInfo>
    <br>
    <h1>{{ repositoriesCount }}</h1>
    <br>
    <section v-if="state.repositories.length > 0">
      <repository
        v-for="repo of state.repositories"
        :description='repo.description'
        :full_name="repo.full_name"
        :html_url="repo.html_url"
      ></repository>
    </section>
    <slot name="footer"></slot>
  </div>
</div>
</template>

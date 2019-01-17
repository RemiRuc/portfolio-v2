<template>
  <div class="home">
    <LandingPage></LandingPage>
    <div id="nav">
      <a href="/fr" replace>Français</a> |
      <a href="/jp" replace>Japonais</a> |
      <a href="/sr" replace>Serbe</a> |
      <a href="/en" replace>Anglais</a> || 
      <router-link :to="{name: 'about'}">About</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LandingPage from '@/components/LandingPage.vue'

export default {
  name: 'home',
  components: {
    LandingPage,
  }
}
</script>

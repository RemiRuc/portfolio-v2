<template>
  <div class="home">
    <LandingPage></LandingPage>
    <Portfolio id="portfolio"></Portfolio>
    <About id="about" class="grey-background"></About>
    <Experiences id="experience"></Experiences>
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
import LandingPage from '@/sections/LandingPage.vue';
import Portfolio from '@/sections/Portfolio.vue';
import About from '@/sections/About.vue';
import Experiences from '@/sections/Experiences.vue';
import Contact from '@/sections/Contact.vue';

import RRHeader from '@/components/RRHeader.vue';
import Navigation from '@/components/Navigation.vue';

export default {
  name: 'home',
  components: {
    LandingPage,
    Portfolio,
    About,
    Experiences,
    Contact,

    RRHeader,
    Navigation
  },

  mounted: () => {
    console.log("ok")
  }
}
</script>

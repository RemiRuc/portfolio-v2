<template>
<div>
    <LandingPage></LandingPage>
    <Portfolio></Portfolio>
    <About></About>
    <Experiences></Experiences>
    <Contact></Contact>
    <FooterCust></FooterCust>
</div>
</template>

<script>
// @ is an alias to /src
import LandingPage from '@/sections/LandingPage.vue';
import Portfolio from '@/sections/Portfolio.vue';
import About from '@/sections/About.vue';
import Experiences from '@/sections/Experiences.vue';
import Contact from '@/sections/Contact.vue';
import FooterCust from '@/components/FooterCust.vue';

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
    FooterCust,

    RRHeader,
    Navigation
  },

  mounted: () => {
    document.querySelector(".rr-header").classList.add("hide")
    let change = []
    function sizeTab(){

          let arraySize = [
        document.querySelector(".landing-page").clientHeight,
        document.querySelector(".portfolio").clientHeight,
        document.querySelector(".about").clientHeight,
        document.querySelector(".experiences").clientHeight,
        document.querySelector(".contact").clientHeight,
      ]
  
      change = []
      let actual = 0
  
      for (let i = 1; i < arraySize.length; i++) {
        actual += arraySize[i]
        change[i] = actual
      }
    }

    document.addEventListener("scroll", () => {

      let scrolltop = window.scrollY - 250

      if(window.location.pathname.length <= 4){
        if (scrolltop < change[1]) {
          document.querySelector('html').classList.add("blue-theme")
          document.querySelector('html').classList.remove("white-theme")
        } else if (scrolltop >= change[1] && scrolltop < change[2]) {
          document.querySelector('html').classList.add("white-theme")
          document.querySelector('html').classList.remove("blue-theme")
        } else if (scrolltop >= change[2] && scrolltop < change[3]) {
          document.querySelector('html').classList.add("blue-theme")
          document.querySelector('html').classList.remove("white-theme")
        } else if (scrolltop >= change[3] && scrolltop < change[4]) {
          document.querySelector('html').classList.add("white-theme")
          document.querySelector('html').classList.remove("blue-theme")
        }
      }

    })

    document.addEventListener("scroll", () => {
      if(window.location.pathname.length <= 4){

        let scrolltop = window.scrollY
        if (scrolltop >= document.querySelector(".landing-page").clientHeight) {
          document.querySelector(".rr-header").classList.remove('hide')
        } else {
          document.querySelector(".rr-header").classList.add('hide')
        }
      }
    })

    document.querySelectorAll('a').forEach(el => {
      el.addEventListener("mouseenter", ()=>{
        document.querySelector(".mouse").classList.add('hover')
      })
      el.addEventListener("mouseleave", ()=>{
        document.querySelector(".mouse").classList.remove('hover')
      })
      el.addEventListener("click", ()=>{
        document.querySelector(".mouse").classList.remove('hover')
      })
    })

    document.querySelector('.home-route').addEventListener("click", ()=>{
      window.location.hash = ""
      window.scrollTo(0,0)
    })

    sizeTab()
    window.addEventListener("resize", () => {
        if(window.location.pathname.length <= 4){
          sizeTab()
        }
    })
  },
  updated: () => {
    

  }
}
</script>

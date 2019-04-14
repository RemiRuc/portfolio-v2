<template lang="html">

  <section class="projet">
        <div class="top" :style="'background-image: url(/img/projet/'+this.projet[$route.params.projet]['img']+'.jpg)'">
           <div class="blue-cache"></div>
            <h2 class="section-title">{{this.projet[$route.params.projet]['name']}}</h2>
            <h3 class="section-subtitle">{{this.projet[$route.params.projet]['subname']}}</h3>
        </div>
        <div class="body">
          <img v-scroll-reveal = "{viewOffset: {top: -300,right: 0,bottom: 0,left: 0}}" class="mockup " :src="'/img/projet/mockup/'+this.projet[$route.params.projet]['img']+'.png'">
          <h3 v-scroll-reveal = "{viewOffset: {top: -300,right: 0,bottom: 0,left: 0}}" >Présentation :</h3>
          <p v-scroll-reveal = "{viewOffset: {top: -300,right: 0,bottom: 0,left: 0}}" class="para-presentation">{{this.projet[$route.params.projet]['presentation']}}</p>
          <h3 v-scroll-reveal = "{viewOffset: {top: -300,right: 0,bottom: 0,left: 0}}">Outils utilisés :</h3>
          <div v-scroll-reveal = "{viewOffset: {top: -300,right: 0,bottom: 0,left: 0}}" v-for="outil in this.projet[$route.params.projet]['outils']" class="link " :href="outil.link" target="_blank"><img :src="'/img/techno/'+outil.img+'.png'"><p>{{outil.name}}</p></div>

          <h3 v-scroll-reveal = "{viewOffset: {top: -300,right: 0,bottom: 0,left: 0}}">Collaborateurs :</h3>
          <IdPerson v-scroll-reveal = "{viewOffset: {top: -300,right: 0,bottom: 0,left: 0}}"  v-for="col in this.projet[$route.params.projet]['col']" :name="col.name" :poste="col.post" :img="col.img" :link="col.link"></IdPerson>

          <h3 v-scroll-reveal = "{viewOffset: {top: -300,right: 0,bottom: 0,left: 0}}">Liens du projet :</h3>
          <a v-scroll-reveal = "{viewOffset: {top: -300,right: 0,bottom: 0,left: 0}}" v-for="link in this.projet[$route.params.projet]['links']" class="link " :href="link.link" target="_blank"><i :class="link.icon"></i><p>{{link.label}}</p></a>

          <Portfolio></Portfolio>
        </div>

  </section>

</template>

<script lang="js">
import IdPerson from "@/components/IdPerson.vue";
  import dataProjet from "@/dataProject.js";
  import Portfolio from '@/sections/Portfolio.vue';
  import FooterCust from '@/components/FooterCust.vue';
  export default  {
    name: 'projet',
    components: {
      IdPerson,
      Portfolio,
      FooterCust
    },
    props: [],
    mounted() {
      
      document.querySelector(".rr-header").classList.remove("hide")      

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
    },
    data() {
      return {
        
      }
    },
    methods: {

    },
    computed: {
      projet: () => dataProjet.project,
    }
}
</script>

<style scoped lang="less">
  .projet {
    top: 0;
    padding-bottom: 100px;

    .body{
      margin: 0px 20px;
    }

    .mockup{
      width: 100%;
      max-width: 996px;
    }
    

    .section-subtitle{
      margin: 0px auto;
    }

    h3{
      position: relative;
      display: table;

      margin: 50px auto 30px auto;

      font-size: 1.5em;

      &::after{
            content: '';
            position: absolute;
            bottom: -10px;
            left: 0;

            width: 100%;
            height: 5px;

            transition: all 0.3s;

          }
    }
    .para-presentation{
      font-size: 1.2em;
      line-height: 40px;
    }
    .top{
      position: relative;
      width: 100%;
      height: 300px;
      overflow: hidden;
      background-size: cover;
      background-position: center center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transition: all 0.5s ease;
      margin-bottom: 20px;

      &:hover{
        height: 400px;
      }

      h2, h3{
        z-index: 1;
      }
    }
    .link{
        display: inline-block;
        position: relative;
        margin: 0px 20px;

        font-size: 2em;

        transition: all 0.5s;

        p{
          &::after{
            content: '';
            position: absolute;
            bottom: -10px;
            left: 0;

            width: 0%;
            height: 5px;

            transition: all 0.3s;

          }
        }
      }
      a.link:hover{
          font-size: 2.5em;
        }

        a.link:hover p::after{
          width: 100%;
        }
      i{
        font-size: 3em;

        margin: 10px 0px;
      }
  }
</style>

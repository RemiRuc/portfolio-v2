<template lang="html">

  <section class="landing-page">
    <div class="blue-cache"></div>
    <div class="center">
      <div class="landing-page-reveal" v-scroll-reveal><h1>{{ $t("first-name") }}<span>{{ $t("family-name") }}</span></h1></div>
      <div class="landing-page-reveal" v-scroll-reveal = "{delay: 60}"><h2 v-html="$t('post')"></h2></div>

      <div v-scroll-reveal = "{delay: 120}" class="from">
        <div class="landing-page-reveal"><a href="#"><img class="white" src="/img/exp/ibm.png"></a></div>
        <div class="landing-page-reveal"><a href="#"><img class="white" src="/img/exp/gobelins.png"></a></div>
      </div>

      <Navigation class="landing-page-reveal nav" section="landing" v-scroll-reveal = "{delay: 180, viewOffset: {top: 0,right: 0,bottom: -60,left: 0}}"></Navigation>
    </div>
  </section>

</template>

<script lang="js">
  import Navigation from '@/components/Navigation.vue';
  //import ScrollReveal from 'scrollreveal';


  export default  {
    name: 'landing-page',
    components: {
      Navigation
    },
    props: [],
    mounted() {
           // ScrollReveal().reveal('.landing-page-reveal', { duration: 1000, distance: '100px', origin: 'left', reset: true, interval: 60 })
           // console.log(ScrollReveal().store)
    },
    data() {
      return {

      }
    },
    methods: {
      
    },
    computed: {

    }
}
</script>

<style scoped lang="less">
  .landing-page {
    --blue: #2EAB62;
    width: 100vw;
    height: 100vh;

    top: 0;

    z-index: 2;

    background: url("../assets/img/bgapropos.jpg"), var(--blue);
    background-position: center center;
    background-size: cover;
    .landing-page-reveal{
          display: block;
    }
    h1{
      font-size: 9.5vw;

      transition: all 0.5s;

      &:hover{
        font-size: 10.5vw;
      }
    }
    h2{
        font-size: 5vw;

        transition: all 0.5s;
        &:hover{
          font-size: 6vw;
        }
    }
    .center{
      width: 100%;
    }
    .from{
      margin: 90px 0px;

      .landing-page-reveal{
          display: inline-block;
      }
      a{
        cursor: default;

        font-size: 1.2em;

        transition: all 0.5s;

            margin: 0px 15px;

        img{
          width: 80px;
          height: 80px;

          transition: all 0.5s ease;
        }

      }
      a:hover{
        font-size: 1.4em;
      }
      a:hover img{
        width: 100px;
        height: 100px;
      }
    }


      @media screen and (min-width: 1000px) {
      h1{
        font-size: 6em;

        &:hover{
          font-size: 7em;
        }
      }

      h2{
        font-size: 3em;

        &:hover{
          font-size: 3.8em;
        }
      }
    }
  }

.fade-enter-active, .fade-leave-active {
  transition-duration: 0.3s;
  transition-property: all;
  transition-timing-function: ease;
}

.fade-enter-to, .fade-leave{
    transform: blur(0px);
    opacity: 1;
}

.fade-enter, .fade-leave-to{
    filter: blur(10px);
    opacity: 0;
}

</style>

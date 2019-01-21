<template lang="html">

  <header class="landing-page">
    <div class="blue-cache"></div>
    <div class="center">
      <h1>{{ $t("first-name") }}<span>{{ $t("family-name") }}</span></h1>
      <h2>{{ $t("post") }}</h2>

      <div class="from flex-horizontal flex-center">
        <a href="#"><img src="https://fakeimg.pl/80x80/"><p>IBM</p></a>
        <a href="#"><img src="https://fakeimg.pl/80x80/"><p>Gobelins</p></a>
      </div>

      <Navigation section="landing"></Navigation>
    </div>
  </header>

</template>

<script lang="js">
  import Navigation from '@/components/Navigation.vue';

  export default  {
    name: 'landing-page',
    components: {
      Navigation
    },
    props: [],
    mounted() {
      
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

    z-index: 2;

    background: url("../assets/img/bgapropos.jpg"), var(--blue);
    background-position: center center;
    background-size: cover;
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
      margin: 30px 0px;
      a{
        flex: 0 1 150px;

        font-size: 1.2em;

        transition: all 0.5s;
      }
      a:hover{
        font-size: 1.4em;
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

</style>

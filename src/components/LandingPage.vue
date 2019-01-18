<template lang="html">

  <section class="landing-page">
    <div class="blue-cache"></div>
    <div class="center">
      <h1>{{ $t("first-name") }}<span>{{ $t("family-name") }}</span></h1>
      <h2>{{ $t("post") }}</h2>
      <p class="enjoy">Savour ses journées chez :</p>
      <div class="from flex-horizontal flex-center">
        <a href="#"><img src="https://fakeimg.pl/80x80/"><p>IBM</p></a>
        <a href="#"><img src="https://fakeimg.pl/80x80/"><p>Gobelins,<br>l'école de l'image</p></a>
      </div>
    </div>
  </section>

</template>

<script lang="js">
  export default  {
    name: 'landing-page',
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
    --blue: #0072BA;
    width: 100vw;
    height: 100vh;

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
    .enjoy{
      margin: 30px 0px 15px 0px;

      font-size: 1.5em;
    }
    .from{
      &:nth-child(1){
        margin-right: 10px;
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

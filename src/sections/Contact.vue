<template lang="html">

  <section class="contact">
    <h2 class="section-title">{{$t("contact")}}</h2>
    <div class="center flex-horizontal flex-center">
      <a href="https://twitter.com/RemiRucojevic" target="_blank"><i class="fab fa-twitter"></i><p>@RemiRucojevic</p></a>
      <a href="https://www.linkedin.com/in/r%C3%A9mi-rucojevic/" target="_blank"><i class="fab fa-linkedin"></i><p>Rémi Rucojevic</p></a>
      <a href="https://github.com/RemiRuc" target="_blank"><i class="fab fa-github"></i><p>RemiRuc</p></a>
      <a href="https://codepen.io/RemiRuc/" target="_blank"><i class="fab fa-codepen"></i><p>RemiRuc</p></a>
    </div>
  </section>

</template>

<script lang="js">
  export default  {
    name: 'contact',
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
  .contact {
    .center{
      width: 100%;
      a{
        position: relative;
        margin: 0px 20px;

        font-size: 2em;
        color: white;

        transition: all 0.5s;

        p{
          &::after{
            content: '';
            position: absolute;
            bottom: -10px;
            left: 0;

            background-color: #2EAB62;

            width: 0%;
            height: 5px;

            transition: all 0.3s;

          }
        }

        &:hover{
          font-size: 2.5em;
        }

        &:hover p::after{
          width: 100%;
        }
      }
      i{
        font-size: 3em;

        margin: 10px 0px;
      }
    }
  }
</style>

<template lang="html">

  <section class="contact" id="contact">
    <h2 class="section-title">{{$t("contact")}}</h2>
    <div class="contact-links flex-horizontal flex-center">
      <div class="contact-reveal"><a href="https://twitter.com/RemiRucojevic" target="_blank"><i class="fab fa-twitter"></i><p>@RemiRucojevic</p></a></div>
      <div class="contact-reveal"><a href="https://www.linkedin.com/in/r%C3%A9mi-rucojevic/" target="_blank"><i class="fab fa-linkedin"></i><p>Rémi Rucojevic</p></a></div>
      <div class="contact-reveal"><a href="https://github.com/RemiRuc" target="_blank"><i class="fab fa-github"></i><p>RemiRuc</p></a></div>
      <div class="contact-reveal"><a href="https://codepen.io/RemiRuc/" target="_blank"><i class="fab fa-codepen"></i><p>RemiRuc</p></a></div>
    </div>
  </section>

</template>

<script lang="js">
  import ScrollReveal from 'scrollreveal';
  export default  {
    name: 'contact',
    props: [],
    mounted() {
      ScrollReveal().reveal('.contact-reveal', { duration: 1000, distance: '100px', origin: 'left', reset: true, interval: 200 })
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
    .contact-links{
      width: 100%;
      height: calc(100vh - 45px - 194.05px);
      align-items: center;
      .contact-reveal{
        //flex: 0 1 310px;
        width: 310px;
      }
      a{
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

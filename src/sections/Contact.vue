<template lang="html">

  <section class="contact" id="contact">
    <h2 class="section-title">{{$t("contact")}}</h2>
    <p v-scroll-reveal>{{$t("contact-text")}}</p>
    <div class="contact-links">
      <div v-scroll-reveal = "{delay: 60}" class="contact-reveal"><a href="https://twitter.com/RemiRuc" target="_blank"><i class="fab fa-twitter"></i><p>@RemiRuc</p></a></div>
      <div v-scroll-reveal = "{delay: 120}" class="contact-reveal"><a href="https://www.linkedin.com/in/r%C3%A9mi-rucojevic/" target="_blank"><i class="fab fa-linkedin"></i><p>Rémi Rucojevic</p></a></div>
      <div v-scroll-reveal = "{delay: 180}" class="contact-reveal"><a href="https://github.com/RemiRuc" target="_blank"><i class="fab fa-github"></i><p>RemiRuc</p></a></div>
      <div v-scroll-reveal = "{delay: 240}" class="contact-reveal"><a href="https://codepen.io/RemiRuc/" target="_blank"><i class="fab fa-codepen"></i><p>RemiRuc</p></a></div>
      <div v-scroll-reveal = "{delay: 300}" data-clipboard-text="remi.rucojevic@gmail.com" class="contact-reveal mail"><a><i class="fas fa-at"></i><p>remi.rucojevic@gmail.com</p></a></div>
    </div>
    <p class="toast">remi.rucojevic@gmail.com {{$t("copy")}}</p>
  </section>

</template>

<script lang="js">
  import ClipBoard from 'clipboard';
  export default  {
    name: 'contact',
    props: [],
    mounted() {
      let mail = new ClipboardJS('.mail')
      mail.on('success', function(e) {
        document.querySelector('.toast').style.display = "table"
        window.setTimeout(() => {
          document.querySelector('.toast').style.display = "none"
        }, 2000);
      });
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
      .contact-reveal{
          display: inline-block;
         min-width: 310px;
         margin-bottom: 20px;
      }
      a{
        position: relative;
        margin: 0px 20px;

        font-size: 2em;

        transition: all 0.5s;

        p{
          display: table;
          margin: auto;
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
      .mail{
        @media screen and (max-width: 427px) {
          font-size: 0.7em;
          a{
            &:hover{
              font-size: 2em;
            }
          }
        }
      }
    }
    .toast{
      display: none;
      margin: auto;
      background-color: rgba(0,0,0,0.5);
      color: white;
      padding: 10px;
      border-radius: 20px;
    }
    >p{
      font-size: 1.2em;
      margin: 50px 0px;
      line-height: 40px;
    }
  }
</style>

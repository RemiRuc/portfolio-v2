<template lang="html">

  <section class="blog">
      <div class="top" :style="'background-image: url(/img/projet/'+this.blog[$route.params.blog]['img']+'.jpg)'">
          <div class="blue-cache"></div>
          <h2 class="section-title">{{this.blog[$route.params.blog]['title']}}</h2>
          <h3 class="section-subtitle">{{this.blog[$route.params.blog]['subtitle']}}</h3>
      </div>
      <div class="body" v-html="this.blog[$route.params.blog]['html']">

      </div>
      <FooterCust></FooterCust>
  </section>

</template>

<script lang="js">
  import dataBlog from "@/dataBlog.js";
  /*import Prism from 'prismjs'
import 'prismjs/themes/prism-okaidia.css'
import 'prismjs/components/prism-lua.min.js'*/
import FooterCust from '@/components/FooterCust.vue';
import "@/assets/prism/prism.js"
import "@/assets/prism/prism.css"

Prism.highlightAll();

  export default  {
    name: 'blog',
    props: [],
    components: {
      FooterCust,
    },
    mounted() {
          document.querySelector('html').classList.add("white-theme")
          document.querySelector('html').classList.remove("blue-theme")
    },
    data() {
      return {

      }
    },
    methods: {

    },
    computed: {
      blog: () => dataBlog,
    }
}
</script>

<style lang="less">
  .blog {
    top: 0px;
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

      .presentation{
        .text{
              width: 90%;
          margin: auto;
          text-align: justify;
          max-width: 980px;

          p{
            font-size: 1.3em;
            margin-top: 0;
            width: 100%;
            line-height: 40px;
          }

          h3, h4{
            margin-top: 50px;
            margin-bottom: 20px;
            
          }

          h3{
            font-size: 2em;
          }
          h4{
            font-size: 1.5em;
          }
        }

        .code-toolbar{
          cursor:text;
          z-index: 60;
        }

        margin-bottom: 100px;
      }
  }
</style>

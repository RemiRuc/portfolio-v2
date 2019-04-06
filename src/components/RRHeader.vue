<template lang="html">

  <nav class="rr-header">
    <router-link class="home-route" :to="{name:'home', params:{lang: i18n.locale}}"><h1>{{ $t("first-name") }}<span>{{ $t("family-name") }}</span></h1></router-link>
    <Navigation section="header"></Navigation>
  </nav>

</template>

<script lang="js">
  import Navigation from '@/components/Navigation.vue';
  import * as router from '@/router.js';

  import i18n from '@/lang/lang.js';
  
  export default  {
    name: 'rr-header',
    components: {
      Navigation,
    },
    props: [
      
    ],
    mounted() {

    },

    data() {
      return {
        i18n
      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="less">
  .rr-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 45px;

    overflow: hidden;

    display: flex;

    transition: all 0.5s;

    justify-content: space-between;

    z-index: 3;

    nav ul li a{
      font-size: 1em;
    }

    a{
      display: none;
      align-items: center;

      margin-left: 15px;
    }
    @media screen and (min-width: 800px){
      a{
        display: inherit;
      }
    }
  }

  .hide{
    transform: translateY(-45px);
  }

    /** THEME BLUE **/
    .blue-theme{
      
    }

        /** THEME WHITE **/
    .white-theme{

    }
</style>

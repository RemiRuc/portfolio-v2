<template lang="html">

  <nav class="navigation" :class="section">
        <ul class="flex-horizontal flex-center">
          <li class="home-route"><router-link :to="{name:'home', params:{lang: i18n.locale}}" exact><h1>R<span>R</span></h1></router-link></li>
          <li><router-link :to="{name:'portfolio', params:{lang: i18n.locale}}" exact><i class="fas fa-dot-circle"></i><span>{{ $t("portfolio") }}</span></router-link></li>
          <li><router-link :to="{name:'about', params:{lang: i18n.locale}}" exact><i class="fas fa-address-card"></i><span>{{ $t("about") }}</span></router-link></li>
          <li><router-link :to="{name:'experience', params:{lang: i18n.locale}}" exact><i class="fas fa-building"></i><span>{{ $t("experience") }}</span></router-link></li>
          <li><router-link :to="{name:'contact', params:{lang: i18n.locale}}" exact><i class="fas fa-comments"></i><span>{{ $t("contact") }}</span></router-link></li>
        </ul>
  </nav>

</template>

<script lang="js">
  import i18n from '@/lang/lang.js';

  export default  {
    name: 'navigation',
    props: [
      'section'
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
  .navigation {
    li a{
      transition: all 0.5s;
    }
    li i{
      margin-right: 8px;
    }
  }

  .navigation.landing{
    .home-route{
      display: none;
    }
    li a{
      margin: 20px;
      margin-left: 0px;

      font-size: 1.4em;

      
         
       

      &:hover{
        font-size: 1.6em;

        color: white;
      }
    }
  }

  .navigation.header{
    width: 100%;
    li{
      flex: 1 0 20%;
      a{
        padding: 10.5px 15px;

        font-size: 1.2em;

        >span{
          display: none;
        }

      }

    }
    h1{
      span{
        color: white;
      }
    }

    

    .home-route{
        i{
          margin-right: 0px;
        }
      }

    .router-link-active{
      background-color: white;
    }

     @media screen and (min-width: 750px){
       li{
         a>span{
           display: initial;
         }
       }
     }

     @media screen and (min-width: 800px) {
       width: auto;
       li{
         flex: 1 0 auto;
       }
       .home-route{
          display: none;
        }
     }

    a:hover{
      background-color: white;
    }



  }
</style>

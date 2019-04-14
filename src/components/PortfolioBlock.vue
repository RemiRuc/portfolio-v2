<template lang="html">

  <router-link :to='{name: "project", params:{projet: link}}' class="portfolio-block" append>
    <div class="block">
      <div class="img" :style="'background-image: url(/img/projet/'+link+'.jpg)'"></div>
      <!--<div class="cache"><i class="fas fa-binoculars"></i></div>-->
    </div>
    <div class="titles">
      <h3>{{title}}</h3>
      <h4>{{subtitle}}</h4>
    </div>
  </router-link>

</template>

<script lang="js">
  export default  {
    name: 'portfolio-block',
    props: [
      'title',
      'subtitle',
      'link'
    ],
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
  .portfolio-block {
    width: 80vw;
    position: relative;
    .block{
      width: 80vw;
      height: 80vw;

      position: relative;

      &::before{
        content: '';
        position: absolute;
        top: 3%;
        left: 3%;
        bottom: 3%;
        right: 3%;
      }

      .img{
        position: absolute;
        top: 6%;
        left: 6%;
        bottom: 6%;
        right: 6%;

        transition: all 0.5s;

        background-position: center;
        background-size: auto 100%;
      }

      .cache{
          position: absolute;

          top: 6%;
          left: 6%;
          bottom: 6%;
          right: 6%;

          display: flex;

          align-items: center;
          justify-content: center;

          transition: all 0.5s;
          opacity: 0;

          border-radius: 50%;

          i{
            font-size: 33vw;
          }
        }


    }
    .titles{
      position: absolute;
      bottom: 0%;
      right: 0%;
      top: 38%;
    left: 38%;
      display: flex;
      flex-direction: column;
      padding: 10px 10px;
      justify-content: center;
      align-items: center;
      transform: rotate(0deg);
      transition: all 0.2s ease-out;
      h3{
        position: relative;
        display: inline-block;

        font-size: 1.6em;

        margin-bottom: 5px;


        &::before{
          content: '';

          position: absolute;
          left: 0;
          bottom: -4px;

          height: 5px;
          width: 0%;

          transition: all 0.3s;
        }
      }

      h4{
        font-size: 1.3em;

        transition: all 0.3s;
      }
      

    }

      &:hover .cache{
        opacity: 1;
      }

      &:hover .img{
        background-size: auto 150%;
      }

      &:hover h3{
        &::before{
          width: 100%;
        }
      }
      &:hover .titles{
        top: 6%;
        left: 6%;
        bottom: 6%;
        right: 6%;
        transform: rotate(360deg);
      }
    
    @media screen and (min-width: 400px) {
      width: 360px;
      .block{
        width: 360px;
         height: 360px;
        .cache{
          i{
            font-size: 9em;
          }
        }
      }

    }
  }
</style>

<style scoped>
  .portfolio-block .block, .portfolio-block .block::before, .portfolio-block .block .img, .portfolio-block .titles{
    transition: all 0.3s;
    border-radius: 43% 57% 42% 58% / 65% 40% 60% 35%;
  }

  .portfolio-block:hover .block, .portfolio-block:hover .block::before, .portfolio-block:hover .block .img, .portfolio-block:hover .titles{
    border-radius: 34% 66% 35% 65% / 51% 44% 56% 49%;
  }
</style>

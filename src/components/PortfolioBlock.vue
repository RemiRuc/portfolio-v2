<template lang="html">

  <router-link :to='{path: link}' class="portfolio-block" append>
    <div class="block">
      <div class="img" style="background-image: url('http://remi-rucojevic.com/img/imaMadeCapture.jpg')"></div>
      <div class="cache"><i class="fas fa-binoculars"></i></div>
    </div>
    <h3>{{title}}</h3>
    <h4>{{subtitle}}</h4>
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
    cursor: pointer;
    .block{
      width: 80vw;
      height: 80vw;

      position: relative;

      background-color: #2EAB62;

      border-radius: 50%;

      &::before{
        content: '';
        position: absolute;
        top: 3%;
        left: 3%;
        bottom: 3%;
        right: 3%;

        background-color: white;

        border-radius: 50%;
      }

      .img{
        position: absolute;
        top: 6%;
        left: 6%;
        bottom: 6%;
        right: 6%;

        background-color: #2EAB62;

        border-radius: 50%;

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

          background-color: rgba(46, 171, 98, 0.5);

          transition: all 0.5s;
          opacity: 0;

          border-radius: 50%;

          i{
            font-size: 33vw;
          }
        }


    }
    h3{
      position: relative;
      display: inline-block;

      color: white;

      font-size: 1.6em;

      margin: 15px 0px;
      margin-bottom: 5px;

      &::before{
        content: '';

        position: absolute;
        left: 0;
        bottom: -4px;

        height: 5px;
        width: 0%;

        transition: all 0.3s;

        background-color: #2EAB62;
      }
    }

    h4{
      font-size: 1.3em;

      color: #939393;
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

<template lang="html">

  <section class="portfolio" id="portfolio">
    <h2 class="section-title">{{$t("portfolio")}}</h2>
    <div class="portfolio-container">
      <div class="portfolio-row">
        <PortfolioBlock v-scroll-reveal title='To Watch List' :subtitle='$t("webApplication")' link="toWatchList"></PortfolioBlock>
        <PortfolioBlock v-scroll-reveal title='Azbooka' :subtitle='$t("webApplication")' link="azbooka"></PortfolioBlock>
      </div>

      <div class="portfolio-row">
        <PortfolioBlock v-scroll-reveal :title='$t("IMNM")' :subtitle='$t("CreativeSound")' link="imaMadeNandoMo"></PortfolioBlock>
        <PortfolioBlock v-scroll-reveal title='Chassing ghost' :subtitle='$t("CreativeSound")' link="chassingGhost"></PortfolioBlock>
        <PortfolioBlock v-scroll-reveal title='Co2 planete' subtitle='Dataviz 3d' link="co2planete"></PortfolioBlock>
      </div>

      <div class="portfolio-row">
        <PortfolioBlock v-scroll-reveal title='Yamanote Line' :subtitle='$t("webApplication")' link="yamanoteline"></PortfolioBlock>
        <PortfolioBlock v-scroll-reveal title='Japan Ni' :subtitle='$t("webApplication")' link="japanni"></PortfolioBlock>
      </div>

      <div class="portfolio-row">
        <PortfolioBlock v-scroll-reveal title='Kit Hub' :subtitle='$t("webApplication")' link="kithub"></PortfolioBlock>
        <PortfolioBlock v-scroll-reveal title='Penaltyfoof' :subtitle='$t("penaltyGame")' link="penaltyfoof"></PortfolioBlock>
        <PortfolioBlock v-scroll-reveal title='Miou, La fresque du passé' :subtitle='$t("webApplication")' link="miou"></PortfolioBlock>
      </div>


    </div>
  </section>

</template>

<script lang="js">
  import PortfolioBlock from "@/components/PortfolioBlock.vue";

  export default  {
    name: 'portfolio',
    components: {
      PortfolioBlock
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
  .portfolio {
    overflow-x: hidden;
    .portfolio-container{
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: space-around;
      padding-bottom: 50px;
      margin: auto;

       @media screen and (min-width: 400px) {
         overflow-x: auto;

       }


      .portfolio-block{
        margin: 10px 30px;
      }
    }

    @media screen and (min-width: 400px) {
      .portfolio-row{
        display: flex;

        flex-wrap: wrap;
        justify-content: center;
  
        &:nth-child(odd){
          margin-left: 20px;
        }
      }
    }

    
  }
</style>

<template lang="html">

  <section class="portfolio">
    <h2 class="section-title">{{$t("portfolio")}}</h2>
    <div class="portfolio-container flex-horizontal">
      <PortfolioBlock title='To Watch List' :subtitle='$t("webApplication")' link="imaMadeNandoMo"></PortfolioBlock>
      <PortfolioBlock title='Azbooka' :subtitle='$t("webApplication")' link="azbooka"></PortfolioBlock>
      <PortfolioBlock :title='$t("IMNM")' :subtitle='$t("CreativeSound")' link="ImaMadeNandoMo"></PortfolioBlock>
      <PortfolioBlock title='Chassing ghost' :subtitle='$t("CreativeSound")' link="chassingGhost"></PortfolioBlock>
      <PortfolioBlock title='Co2 planete' subtitle='Dataviz 3d' link="co2planete"></PortfolioBlock>
      <PortfolioBlock title='Penaltyfoof' :subtitle='$t("penaltyGame")' link="penaltyfoof"></PortfolioBlock>
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
    .portfolio-container{
      justify-content: space-around;

      .portfolio-block{
        margin: 10px 30px;
      }
    }
  }
</style>

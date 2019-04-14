<template lang="html">

  <section class="experiences" id="experiences">
    <h2 class="section-title">{{$t("experience")}}</h2>
    <div class="timeline-container">
      <div class="timeline">
        <h3>Professionnelle :</h3>
        <TimelineItem v-scroll-reveal.reset :entreprise='$t("pro.ibm.name")' entrepriseImg="ibm" :poste='$t("pro.ibm.poste")' :date='$t("pro.ibm.date")' :description='$t("pro.ibm.description")'></TimelineItem>
        <TimelineItem v-scroll-reveal.reset :entreprise='$t("pro.toosla.name")' entrepriseImg="toosla" :poste='$t("pro.toosla.poste")' :date='$t("pro.toosla.date")' :description='$t("pro.toosla.description")'></TimelineItem>
        <TimelineItem v-scroll-reveal.reset :entreprise='$t("pro.caq.name")' entrepriseImg="caq" :poste='$t("pro.caq.poste")' :date='$t("pro.caq.date")' :description='$t("pro.caq.description")'></TimelineItem>
        <TimelineItem v-scroll-reveal.reset :entreprise='$t("pro.myParentsMind.name")' entrepriseImg="myParentsMind" :poste='$t("pro.myParentsMind.poste")' :date='$t("pro.myParentsMind.date")' :description='$t("pro.myParentsMind.description")'></TimelineItem>
        <TimelineItem v-scroll-reveal.reset :entreprise='$t("pro.laforet.name")' entrepriseImg="laforet" :poste='$t("pro.laforet.poste")' :date='$t("pro.laforet.date")' :description='$t("pro.laforet.description")'></TimelineItem>
      </div>
      <div class="timeline">
        <h3>Scolaire :</h3>
        <TimelineItem v-scroll-reveal.reset :entreprise='$t("edu.gobelins.name")' entrepriseImg="gobelins" :poste='$t("edu.gobelins.poste")' :date='$t("edu.gobelins.date")' :description='$t("edu.gobelins.description")'></TimelineItem>
        <TimelineItem v-scroll-reveal.reset :entreprise='$t("edu.upem.name")' entrepriseImg="upem" :poste='$t("edu.upem.poste")' :date='$t("edu.upem.date")' :description='$t("edu.upem.description")'></TimelineItem>
        <TimelineItem v-scroll-reveal.reset :entreprise='$t("edu.cassin.name")' entrepriseImg="cassin" :poste='$t("edu.cassin.poste")' :date='$t("edu.cassin.date")' :description='$t("edu.cassin.description")'></TimelineItem>
      </div>
    </div>
  </section>


</template>

<script lang="js">
  import TimelineItem from "@/components/TimelineItem.vue";

  export default  {
    name: 'experiences',
    components: {
      TimelineItem
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
  .experiences {
    .timeline-container{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin: 0px 10px;
    }
    .timeline{
      position: relative;
      overflow: hidden;
      height: fit-content;
      margin: 0px auto;
      margin-bottom: 135px;

      @media screen and (min-width: 1230px) {
        width: 40vw;
      }

      &:before {
        content: '';
        position: absolute;
        background-color: #000;
        width: 3px;
        height: 100%;
        left: 140px;

        @media (max-width: 1230px) {
            display: none;
            flex-direction: column;
            align-items: center;
        }
    }
    }
  }
</style>

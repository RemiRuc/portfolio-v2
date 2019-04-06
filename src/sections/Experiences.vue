<template lang="html">

  <section class="experiences" id="experiences">
    <h2 class="section-title">{{$t("experience")}}</h2>
    <div class="timeline-container">
      <div class="timeline">
        <h3>Professionnelle :</h3>
        <TimelineItem v-scroll-reveal.reset entreprise='IBM' entrepriseImg="IBM" poste='Apprenti développeur front' date='Depuis octobre 2018' description='Travail au sein d"une équipe agile pour le client Royal Canin : Développeur front pour une application web déstinée aux vétérinaires réalisée sous Angular 6.'></TimelineItem>
        <TimelineItem v-scroll-reveal.reset entreprise='TOOSLA' entrepriseImg="toosla" poste='Stagiaire développeur full-stackt' date='Avril 2018 - Juin 2018' description='Interviens en tant que stagiaire sur la gestion du backoffice, l"API et le site internet. Utilisation des frameworks Laravel et Angular.JS sous les environnements Docker et Linux.'></TimelineItem>
        <TimelineItem v-scroll-reveal.reset entreprise='CAQ.fr' entrepriseImg="caq" poste='Rédacteur web et assistant webmaster' date='Décembre 2017 - Janvier 2018' description='Ecris des articles dans une logique SEO et assiste le gérant du site sur certaines tâches de maintenance (Gestion de Wordpress, création de sous-domaines...)'></TimelineItem>
        <TimelineItem v-scroll-reveal.reset :entreprise='"My Parents Mind"' entrepriseImg="myParentsMind" poste='Développeur web, ingénieur son et manager de l"équipe artistique' date='Mars 2017 - Mars 2018' description='Interviens sur la création du site web promotionnel et la composition musicale du court métrage d"animation "Ce que disent mes parents : My parents" mind". Manage l"équipe artistique composée de 4 personnes.'></TimelineItem>
        <TimelineItem v-scroll-reveal.reset entreprise='Stage au Japon' entrepriseImg="laforet" poste='' date='Juillet-Août 2017' description='Juillet : Stage linguistique à TOHO International College (Tokyo) Août : Stagiaire «employé polyvalent» au Resort-Hôtel Laforet (Hakuba)'></TimelineItem>
      </div>
      <div class="timeline">
        <h3>Scolaire :</h3>
        <TimelineItem v-scroll-reveal.reset entreprise='Gobelins, l"école de l"image' entrepriseImg="gobelins" poste='' date='Depuis septembre 2018' description='Bachelor Designer & Développeur Interactif : Formation en alternance dans le domaine du développement web. Option : Développement'></TimelineItem>
        <TimelineItem v-scroll-reveal.reset entreprise='Université Paris-Est Marne-La-Vallée - IUT de Meaux (77)' entrepriseImg="upem" poste='' date='2016-2018' description='DUT MMI (Métiers du multimédia et de l’internet) : Apprentissage des compétences liées au multimédia : Programmation web, programmation androïd, infographie, plan de communication, sécurité des réseaux, montage vidéo... Spécialité : Développement'></TimelineItem>
        <TimelineItem v-scroll-reveal.reset entreprise='Lycée René Cassin à Noisiel (77)' entrepriseImg="cassin" poste='' date='2014-2016' description='Baccalauréat S (Scientifique) Option : SI (Science de l’ingénieur) Spécialité : ISN (Informatique et sciences du numérique)'></TimelineItem>
      </div>
    </div>
  </section>


</template>

<script lang="js">
  import TimelineItem from "@/components/TimelineItem.vue";
    import ScrollReveal from 'scrollreveal';

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

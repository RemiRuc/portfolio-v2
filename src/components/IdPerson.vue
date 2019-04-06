<template lang="html">

  <a class="id-person" target="_blank" :href="link">
    <div v-if="img" class="profil-img" :style="'background-image: url(/img/profile/'+img+'.jpg)'"></div>
    <div v-else class="profil-img">{{name[0]}}</div>
    <p class="name">{{name}}</p>
    <p class="poste">{{poste}}</p>
  </a>

</template>

<script lang="js">
  export default  {
    name: 'id-person',
    props: ['img', 'name', 'poste', 'link'],
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
  .id-person {
    display: inline-block;
    margin: 20px 20px;
    .profil-img{
      width: 200px;
      height: 200px;
      background-position: center center;
      background-size: cover;

      transition: all 0.5s ease;

      overflow: hidden;

      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 5em;
    }

    .name{
      font-size: 1.8em;

      margin-top: 10px;

      transition: all 0.5s ease;
    }

    .poste{
      font-size: 1.2em;
    }
  }
</style>

<style scoped>
  .profil-img{
    border-radius: 43% 57% 70% 30% / 30% 30% 70% 70%;
  }

  .id-person:hover .profil-img{
    border-radius: 61% 39% 57% 43% / 47% 61% 39% 53%;
  }

</style>


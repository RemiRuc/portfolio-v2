<template lang="html">

  <footer class="footer">
    <div>
      © Copyright 2019 Rémi RUCOJEVIC
    </div>
    <a href="/RemiRucojevicCV.pdf" target="_blank">
      <i class="far fa-file-pdf"></i><p>{{$t("cv")}}</p>
    </a>
  </footer>

</template>

<script lang="js">
  export default  {
    name: 'footer-cust',
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
  .footer {
    display: table;
    position: relative;
    z-index: 2;
    width: 100%;
    margin-top: 50px;
    div, a{
      display: table-cell;
      box-sizing: border-box;
      width: 50%;
      height: 100%;
      vertical-align: middle;
      padding: 10px 0px;
    }

    a{
      p{
        display: inline-block;
        margin-left: 10px;
      }
    }
  }
</style>

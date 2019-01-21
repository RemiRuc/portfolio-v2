<template>
  <div id="app">
    <RRHeader></RRHeader>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import RRHeader from '@/components/RRHeader.vue'

export default {
  name: 'app',
  components: {
    RRHeader
  }
}
</script>


<style>
  .root{
    --blue: #2D3E51;
  }
</style>


<style lang="less">
/*Font*/
@font-face {
	font-family: fa;
	src: url('assets/font/FA123ALG.TTF');
}
@font-face {
	font-family: liberation;
	src: url("assets/font/LiberationSans-Regular.ttf");
}
@font-face {
	font-family: liberationBold;
	src: url("assets/font/LiberationSans-Bold.ttf");
}
@font-face {
	font-family: keepcalm;
	src: url('assets/font/KeepCalm-Medium.ttf');
}
@font-face {
	font-family: esphimere;
	src: url("assets/font/Esphimere.otf");
}
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: none; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  transition: background-color 0.3s;
  background-color: rgba(46, 171, 98, 0.8);
  border-radius: 20px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background-color: rgba(46, 171, 98, 1);
}
#app {
  font-family: 'esphimere', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;

  min-height: 100vh;

  overflow: hidden;
}
section{
  position: relative;
  top: 45px;
  overflow: auto;

  height: calc(100vh - 45px);
}
html{
  scroll-behavior: smooth;
  background-color: #2D3E51;

  overflow: hidden;
}
body{
  margin: 0;
  overflow-x: hidden;
}
a{
  display: block;
  color: black;
  text-decoration: none;
}
ul{
  padding: 0px;
  list-style: none;
}
h1, h2{
  color: black;
  span{
    color: #2EAB62;
  }
}
.section-title{
  display: inline-block;

  font-size: 2em;

  color: white;

  margin: 20px 0px;
  margin-bottom: 30px;
  padding: 10px 20px;

  background-color: #2EAB62;

  border-radius: 20px;
}
h1, h2, h3, h4, h5{
  text-transform: uppercase;
  font-family: 'liberationBold';
}
h1, h3, h4, p, a, ul{
  margin: 0;
}
.blue-cache{
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  background: linear-gradient(to bottom, #2D3E51 0, #2D3E51 100%);

  opacity: 0.5;
}
.center {
  position: absolute; /* postulat de départ */
  top: 50%; left: 50%; /* à 50%/50% du parent référent */
  transform: translate(-50%, -50%); /* décalage de 50% de sa propre taille */
}
.flex-horizontal{
  display: flex;
  flex-wrap: wrap;
}

.flex-center{
  justify-content: center;
}
.grey-background{
  background-color: #EEEEEE;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2EAB62;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: all;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>

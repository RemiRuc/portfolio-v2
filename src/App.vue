<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
  .root{
    --blue: #0072BA;
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
#app {
  font-family: 'esphimere', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
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
  padding: none;
  list-style: none;
}
h1{
  font-family: 'liberationBold';
  color: black;
  text-transform: uppercase;
  span{
    color: white;
  }
}
h1, h2, h3, h4, p, a{
  margin: 0;
}
.blue-cache{
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  background: linear-gradient(to bottom, #356aa0 0, #356aa0 100%);

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
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

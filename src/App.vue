<template>
  <div id="app">
    <RRHeader></RRHeader>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    <Background></Background>
    <div class="mouse"></div>
  </div>
</template>

<script>
import RRHeader from '@/components/RRHeader.vue'
import Background from '@/components/Background.vue'
  import TweenMax from "gsap/TweenMax"

export default {
  name: 'app',
  components: {
    RRHeader,
    Background
  },
  mounted: () => {
    console.log = function(){}
    let newMousePosition = [0, 0]
    document.addEventListener("mousemove", (event)=>{
      newMousePosition[0] = event.clientY -21.5 + "px"
      newMousePosition[1] = event.clientX -21.5 + "px"
      TweenMax.to(".mouse", 0.5, {top: newMousePosition[0], left: newMousePosition[1], ease: Back.easeOut.config(3), onComplete:()=>{
        document.querySelector(".mouse").style.top = event.clientY -21.5 + "px"
        document.querySelector(".mouse").style.left = event.clientX -21.5 + "px"
      }})
    })

    document.addEventListener("mousedown", (event)=>{
      document.querySelector("html").classList.add("click")
    })

    document.addEventListener("mouseup", (event)=>{
      document.querySelector("html").classList.remove("click")
    })

      window.mobileAndTabletcheck = function() {
      var check = false;
      (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
      return check;
    };

    if (window.mobileAndTabletcheck()) {
      document.querySelector(".mouse").style.display = "none"
    }
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

a:hover{
  cursor: url("/img/cursor-link.png") 21.5 21.5, pointer;
}

#app {
  font-family: 'esphimere', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  min-height: 100vh;

  overflow: hidden;
}
section{
  position: relative;
  top: 45px;
  overflow: auto;

  min-height: 100vh;

  z-index: 2;
}
html{

  overflow-x: hidden;
background-size: 400% 400%;

scroll-behavior: smooth;

cursor: url("/img/cursor.png") 21.5 21.5, default;

/*vertical-align: -webkit-animation: BackgroundGrad 30s ease infinite;
-moz-animation: BackgroundGrad 30s ease infinite;
animation: BackgroundGrad 30s ease infinite;*/

}
html.click{
  cursor: url("/img/cursor-click.png") 21.5 21.5, default;
}
body{
  margin: 0;
}
a{
  display: block;
  text-decoration: none;
}
ul{
  padding: 0px;
  list-style: none;
}

.section-title{
  display: inline-block;

  font-size: 2em;

  margin: 20px 0px;
  margin-bottom: 30px;
  padding: 10px 20px;
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

  opacity: 0.3;
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
  }
}

.mouse{
  pointer-events: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 28px;
  height:28px;
  border-radius: 50%;
  background-color: #2eab62;
  z-index: 50;
  
  transition: background-color 0.5s, width 0.5s, height 0.5s ease;

  &::before{
    content: '';
    position: absolute;
    top: 24%;
    left: 24%;
    width: 16px;
    height: 16px;

    border-radius: 50%;

    background-color: #2d3e51;
  }
}

.mouse.hover{
  background-color: rgba();
  width: 35px;
  height: 35px;
}

img.white{
  filter: grayscale(35) brightness(10);
}
.fade-enter-active, .fade-leave-active {
  transition-duration: 0.3s;
  transition-property: all;
  transition-timing-function: ease;
}

.fade-enter-to, .fade-leave{
    transform: blur(0px);
    opacity: 1;
}

.fade-enter, .fade-leave-to{
    filter: blur(10px);
    opacity: 0;
}

@-webkit-keyframes BackgroundGrad {
    0%{background-position:94% 0%}
    50%{background-position:7% 100%}
    100%{background-position:94% 0%}
}
@-moz-keyframes BackgroundGrad {
    0%{background-position:94% 0%}
    50%{background-position:7% 100%}
    100%{background-position:94% 0%}
}
@keyframes BackgroundGrad { 
    0%{background-position:94% 0%}
    50%{background-position:7% 100%}
    100%{background-position:94% 0%}
}

/** TRANSITIONS THEME **/
html, .blue-cache, .section-title{
    transition: background-color 0.3s ease;
}

#app, #nav a, h1, h2, .section-title{
    transition: color 0.3s ease;
}



/** THEME BLUE **/

html.blue-theme{
    background-color: #2d3e51;
}
.blue-theme{
  @principal : #2d3e51;
  @secondary : #2EAB62;
  @text_principal : white;
  @text_secondary : black;

  @cache : rgba(46, 171, 98, 0.5);

  @header_hover : rgba(46, 171, 98, 1);
  @header_unhover : rgba(46, 171, 98, 0.6);

  @block_hover : rgba(46, 171, 98, 0.9);
  @block_unhover : rgba(46, 171, 98, 0.7);
  #app{
    color: @text_principal;
  }
  
  .section-title{
      background-color: @secondary;
  }
  
  .blue-cache{
      background-color: @principal;
  }
  
  #nav {
    a {
      color: @secondary;
    }
  }
  
  h1, h2{
    color: @text_secondary;
    span{
      color: @secondary;
    }
  }

  .timeline-item{
    h2 {
      color: @text_principal;
    }
  }
  
  a{
    color: @text_secondary;
  }

  .landing-page {
    .navigation{
      li{
        a{
          color: @text_principal;
          

          &:before{
            background-color: #2EAB62;
          }
        }
      }
    }
  }
  
  .section-title{
    color: @text_principal;
  }

  /** PORTFOLIO BLOCK **/
  .portfolio-block {
    .block{

      background-color: @secondary;

      &::before{
        background-color: @text_principal;
      }

      .img{
        background-color: @secondary;
      }

      .cache{
          background-color: @cache;
        }


    }
    .titles{
      background-color: @block_unhover;
      h3{
        color: @text_principal;
        &::before{
          background-color: @secondary;
        }
      }

      h4{
        color: @principal;
      }
      

    }
      &:hover .titles{
        background-color: @block_unhover;
      }
  }

  /**HEADER**/
  .rr-header {
        background-color: @header_unhover;

        &:hover{
          background-color: @header_hover;
        }

        h1{
          span{
            color: @text_principal;
          }
        }
      }

    .contact {
      .contact-links{
        a{
          color: @text_principal;

           p{
          &::after{
            background-color: @secondary;
          }
        }
      }
    }
  }

  .experiences{
    a{
      color: @text_principal;
    }
  }

  .projet {
    h3{
      &::after{
        background-color: @secondary;
      }
    }
    .top{
      border-bottom: 20px @secondary solid;
    }
    .link{
      color: @text_principal;

      p{
        &::after {
          background-color: @secondary;
        }
      }
    }
  }

  .id-person {
    color: @text_principal;

    .profil-img{
      border: 8px solid @secondary;
    }
  }

    .comp-container{
      h4{
        &::after{
          background-color: @secondary;
        }
      }
    }

    .lang{
      color: @text_secondary;
      >div{
        background-color: @text_principal;
      }

      >div.valide{
        background-color: @secondary;
      }
    }

    .footer{
      div{
        background-color: @secondary;
      }

      a{
        background-color: darken(@secondary, 10%);
        color: @text_principal;
      }
    }

  #background-canvas{
    filter: blur(40px);
  }
}

/** THEME WHITE **/

html.white-theme{
    background-color: #ffffff;
}
.white-theme{
  @principal : #0072BA;
  @secondary : #0072BA;
  @text_principal : black;
  @text_secondary : white;

  @cache : rgba(0, 114, 186, 0.5);

  @header_hover : rgba(0, 114, 186, 1);
  @header_unhover : rgba(0, 114, 186, 0.6);

  @block_hover : rgba(0, 114, 186, 0.9);
  @block_unhover : rgba(0, 114, 186, 0.7);

  @lang_unvalid : rgba(0, 114, 186, 0.4);
  #app{
    color: @text_principal;
  }
  
  .section-title{
      background-color: @secondary;
  }
  
  .blue-cache{
      background-color: @principal;
  }
  
  #nav {
    a {
      color: @secondary;
    }
  }
  
  h1, h2{
    color: @text_principal;
    span{
      color: @text_secondary;
    }
  }

  .timeline-item{
    h2 {
      color: @text_principal;
    }
  }
  
  a{
    color: @text_secondary;
  }
  
  .section-title{
    color: @text_secondary;
  }

  /** PORTFOLIO BLOCK **/
  .portfolio-block {
    .block{

      background-color: @secondary;

      &::before{
        background-color: @text_secondary;
      }

      .img{
        background-color: @secondary;
      }

      .cache{
          background-color: @cache;
        }


    }
    .titles{
      background-color: @block_unhover;
      h3{
        color: @text_secondary;
        &::before{
          background-color: @secondary;
        }
      }

      h4{
        color: @text_principal;
      }
      

    }
      &:hover .titles{
        background-color: @block_unhover;
      }
  }

  /**HEADER**/
  .rr-header {
        background-color: @header_unhover;

        &:hover{
          background-color: @header_hover;
        }

        h1{
          span{
            color: @text_secondary;
          }
        }

        a{
          color: @text_principal;
        }
      }

    .contact {
      .contact-links{
        a{
          color: @text_principal;

           p{
          &::after{
            background-color: @secondary;
          }
        }
      }
    }
  }

  .experiences{
    a{
      color: @text_principal;
    }
  }

  .projet {
    h3{
      &::after{
        background-color: @secondary;
      }
    }
    .top{
      border-bottom: 20px @secondary solid;
    }
    .link{
      color: @text_principal;

      p{
        &::after {
          background-color: @secondary;
        }
      }
    }
  }

  .id-person {
    color: @text_principal;

    .profil-img{
      border: 8px solid @secondary;
    }
  }

    .comp-container{
      h4{
        &::after{
          background-color: @secondary;
        }
      }
    }

    .lang{
      color: @text_secondary;
      >div{
        background-color: @lang_unvalid;
      }

      >div.valide{
        background-color: @secondary;
      }
    }

    .footer{
      color: @text_secondary;
      div{
        background-color: @secondary;
      }

      a{
        background-color: darken(@secondary, 10%);
        color: @text_secondary;
      }
    }

  #background-canvas{
    filter: blur(40px) grayscale(100%) invert(100%) opacity(0.8);
  }
}



</style>

<style>
  .section-title {
    border-radius: 68% 32% 38% 62% / 51% 44% 56% 49%;
  }
</style>

<template lang="html">

  <canvas id="background-canvas" class="background"></canvas>

</template>

<script lang="js">
  import circle from '@/assets/img/background/circle.png'
  import square from '@/assets/img/background/square.png'
  import triangle from '@/assets/img/background/triangle.png'
  import TweenMax from "gsap/TweenMax"

  export default  {
    name: 'background',
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

    },
    mounted: () => {
      var can = document.getElementById('background-canvas')
      var ctx = can.getContext('2d')

      let size = window.innerHeight / 1.5
      let demiSize = size/2

      let deg = 0

      window.addEventListener("resize", resizeCanvas)
      resizeCanvas()

      function resizeCanvas(){
          can.style.height = window.innerHeight + "px"
          can.style.width = window.innerWidth + "px"
          can.height = window.innerHeight
          can.width = window.innerWidth
      }

      class Form{
        constructor(form) {
          this.x = Math.floor(Math.random() * (window.innerWidth));
          this.y = Math.floor(Math.random() * (window.innerHeight ));
          if(this.x < demiSize) this.x = 0
          if(this.y < demiSize) this.y = 0
          this.size = demiSize
          this.opacity = 0
          this.rotation = 0
          this.animated = false
          this.img = new Image()
          switch (form) {
            case 0:
              this.img.src = square
            break;

            case 1:
              this.img.src = circle
              
            break;

            case 2:
              this.img.src = triangle
            break;
          
            default:
              this.img.src = circle
              break;
          }
        }

        update(){
          
          this.draw()
        }

        draw(){
          ctx.save()
          ctx.globalAlpha = this.opacity
          ctx.translate(this.x, this.y)
          ctx.rotate(this.rotation * Math.PI / 180)
          ctx.drawImage(this.img, -demiSize, -demiSize,this.size,this.size)
          ctx.restore()
        }
      }

      let time = 0
      let now = Date.now()
      let past = now
      let deltaTime = 0
      requestAnimationFrame(animation)

      let forms = []
      function animation(){
          now = Date.now()
          deltaTime = now - past
          past = now
          time += deltaTime

          if (time >= 500) {
            time = 0
            forms.push(new Form(Math.floor(Math.random() * Math.floor(3))))
          }

        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        requestAnimationFrame(animation)

        forms.forEach(form => {
          if (form.animated == false) {
            TweenMax.to(form,4,{size:size, rotation: 25})
            TweenMax.to(form,2,{opacity: 1, onComplete: ()=>{
              TweenMax.to(form,1,{opacity: 0, onComplete: ()=>{
                forms.splice(forms.indexOf(form), 1);
              }})
            }})
            form.animated = true
          }
          form.draw()
        })

        /*deg += 1
        if (deg >= 360) {
          deg = 0
        }*/

        //can.style.filter = 'blur(40px) hue-rotate('+deg+'deg)'


        
      }

          forms.push(new Form(Math.floor(Math.random() * Math.floor(3))))  
      
    }
}
</script>

<style scoped>
  .background {

  }
  #background-canvas{
    position: fixed;
    z-index: 1;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;

    transition: all 0.3s ease;
  }
</style>

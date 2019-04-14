<template lang="html">

  <section class="about" id="about">
    <h2 class="section-title">{{$t("about")}}</h2>

    <div class="info">
      <IdPerson v-scroll-reveal.reset :name="$t('first-name') + ' ' + $t('family-name')" :poste="$t('local')" img="remirucojevic"></IdPerson>
      <p v-scroll-reveal.reset>Lorem Khaled Ipsum is a major key to success. I told you all this before, when you have a swimming pool, do not use chlorine, use salt water, the healing, salt water is the healing. How’s business? Boomin. Bless up. The key to success is to keep your head above the water, never give up. Let me be clear, you have to make it through the jungle to make it to paradise, that’s the key, Lion! You see that bamboo behind me though, you see that bamboo? Ain’t nothin’ like bamboo. Bless up. Cloth talk.</p>
    </div>
    <h3>{{$t("principales-comp")}} :</h3>
    <div class="comp-container">
      <div v-scroll-reveal.reset>
        <h4>FRONT-END :</h4>
        <ul>
          <li>- {{$t("front-1")}}</li>
          <li>- {{$t("front-2")}}</li>
          <li>- {{$t("front-3")}}</li>
          <li>- {{$t("front-4")}}</li>
        </ul>
        <h5>{{$t("tools")}} :</h5>
        <div>
          <div v-scroll-reveal.reset class="link"><img src="/img/techno/html.png"><p>HTML / CSS</p></div>
          <div v-scroll-reveal.reset class="link"><img src="/img/techno/javascript.png"><p>Javascript</p></div>
          <div v-scroll-reveal.reset class="link"><img src="/img/techno/three.png"><p>Three.js</p></div>
          <div v-scroll-reveal.reset class="link"><img src="/img/techno/vuejs.png"><p>Vue.js</p></div>
        </div>
      </div>
      <div v-scroll-reveal.reset>
        <h4>BACK-END :</h4>
        <ul>
          <li>- {{$t("back-1")}}</li>
          <li>- {{$t("back-2")}}</li>
          <li>- {{$t("back-3")}}</li>
          <li>- {{$t("back-4")}}</li>
        </ul>
        <h5>{{$t("tools")}} :</h5>
        <div>
          <div v-scroll-reveal.reset class="link"><img src="/img/techno/php.png"><p>PHP</p></div>
          <div v-scroll-reveal.reset class="link"><img src="/img/techno/mysql.png"><p>MySQL</p></div>
          <div v-scroll-reveal.reset class="link"><img src="/img/techno/ajax.png"><p>Ajax</p></div>
          <div v-scroll-reveal.reset class="link"><img src="/img/techno/symfony.png"><p>Symfony</p></div>
        </div>
      </div>
      <div v-scroll-reveal.reset>
        <h4>{{$t("GDP")}} :</h4>
        <ul>
          <li>- {{$t("gdp-1")}}</li>
          <li>- {{$t("gdp-2")}}</li>
          <li>- {{$t("gdp-3")}}</li>
        </ul>
        <h5>{{$t("tools")}} :</h5>
        <div>
          <div v-scroll-reveal.reset class="link"><img src="/img/techno/git.png"><p>Git</p></div>
          <div v-scroll-reveal.reset class="link"><img src="/img/techno/trello.png"><p>Trello</p></div>
          <div v-scroll-reveal.reset class="link"><img src="/img/techno/drive.png"><p>Drive</p></div>
        </div>
      </div>
    </div>
    <h3>{{$t("also")}} :</h3>
        <div class="comp-container plus">
      <div v-scroll-reveal.reset>
        <h4>{{$t("GRAPH")}} :</h4>
        <ul>
          <li>- Créer une maquette de site</li>
          <li>- Concevoir une charte graphique</li>
        </ul>
        <h5>{{$t("tools")}} :</h5>
        <div>
          <div v-scroll-reveal.reset class="link"><img src="/img/techno/photoshop.png"><p>Photoshop</p></div>
          <div v-scroll-reveal.reset class="link"><img src="/img/techno/illustrator.png"><p>Illustrator</p></div>
          <div v-scroll-reveal.reset class="link"><img src="/img/techno/indesign.png"><p>InDesign</p></div>
        </div>
      </div>
      <div v-scroll-reveal.reset>
        <h4>{{$t("LANG")}} :</h4>
        <ul>
        </ul>
        <div class="languages">
          <div v-scroll-reveal.reset class="link"><img src="/img/techno/uk.png"><p>{{$t("english")}}</p><div class="lang"><div class="valide">A1</div><div class="valide">A2</div><div class="valide">B1</div><div class="valide">B2</div><div>C1</div><div>C2</div></div></div>
          <div v-scroll-reveal.reset class="link"><img src="/img/techno/serbia.png"><p>{{$t("serbian")}}</p><div class="lang"><div class="valide">A1</div><div class="valide">A2</div><div>B1</div><div>B2</div><div>C1</div><div>C2</div></div></div>
          <div v-scroll-reveal.reset class="link"><img src="/img/techno/japan.png"><p>{{$t("japanease")}}</p><div class="lang"><div class="valide">A1</div><div>A2</div><div>B1</div><div>B2</div><div>C1</div><div>C2</div></div></div>
        </div>
      </div>
    </div>

  </section>

</template>

<script lang="js">
import IdPerson from "@/components/IdPerson.vue";
  export default  {
    name: 'about',
    props: [],
    components: {
      IdPerson
    },
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
  .about {
    .info{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;

      margin-bottom: 100px;

      >p{
        max-width: 800px;
        width: 50%;
        font-size: 1.1em;
        line-height: 35px;
      }
    }
    h3{
      margin-bottom: 20px;
    }

    ul{
      li{
        font-size: 1.2em;
        margin: 10px 0px;
      }
    }
    .comp-container{
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-wrap: wrap;
      margin: 100px 0px;
      >div{
        margin: 0px 20px;
        flex: 1 0 334px;
      }

      h4{
        display: table;
        margin: auto;
        position: relative;
        font-size: 1.8em;
        margin-bottom: 25px;

        &::after{
          content: '';
          position: absolute;
          bottom: -7px;
          left: 0;
          height: 5px;
          width: 100%;
        }
      }
    }

    .plus{
      font-size: 0.9em;
    }

  }

      .link{
        display: flex;
        position: relative;
        margin: 20px;

        justify-content: center;
        align-items: center;

        font-size: 1em;

        transition: all 0.3s;

        .lang{
          margin-top: 10px;
          margin-left: 10px;
          >div{
            display: inline-block;
            text-align: center;

            line-height: 20px;

            width: 20px;
            height: 20px;

            font-size: 0.8em;

            border-radius: 50%;
            margin: 2px;

          }
        }

        img{
          width: 24px;

          margin-bottom: 10px;
          margin-right: 10px;
        }

        p{
          &::after{
            content: '';
            position: absolute;
            bottom: -10px;
            left: 0;

            width: 0%;
            height: 5px;

            transition: all 0.3s;

          }
        }
      }
</style>

<style>

.languages img{
  border-radius: 68% 32% 38% 62% / 51% 44% 56% 49% ;
  filter: saturate(1.3);
}

</style>

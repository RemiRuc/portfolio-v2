<template lang="html">

  <div class="timeline-item">
			<div class="timeline-item-details">
				<time class="timeline-item-details-date">{{date}}<img class="timeline-item-details-img" :alt="'Logo '+entreprise" :src="'/img/exp/'+entrepriseImg+'.png'"></time>
				<div class="timeline-item-details-marker"></div>
				<div class="timeline-item-details-description">
					<h2>{{entreprise}} : {{poste}}</h2>
					<p>{{description}}</p>
				</div>
			</div>
  </div>

</template>

<script lang="js">
  export default  {
    name: 'timeline-item',
    props: [
      'date',
      'entreprise',
      'entrepriseImg',
      'poste',
      'description',
    ],
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
  .timeline-item {
    margin: 0 0;
    @media (max-width: 1230px){
        width: 100%;
        text-align: center;
    }
    .timeline-item-details {
      display: inline-block;
      margin-bottom: 20px;

      @media (max-width: 1230px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
      

      &:hover .timeline-item-details-marker{
        background-color: #000;
      }

      &:hover .timeline-item-details-description{
        opacity: 1;
      }

      &:hover img{
        filter: grayscale(0) brightness(1);
      }
    }

    .timeline-item-details-date {
      display: flex;
      flex-direction: column;
      align-items: center;
      float: left;
      margin-top: 9px;
      max-width: 100px;
    }

    .timeline-item-details-img {
        margin-top: 10px;
        display: block;
        float: left;
        width: 100px;
        height: 100px;
    }

    .timeline-item-details-marker {
        float: left;
        position: relative;
        z-index: 10;
        border-radius: 50%;
        background-color: #fff;
        width: 32px;
        height: 32px;
        border: black solid 3px;
        margin-left: 23px;
        transition-property: background-color;
        transition-duration: .5s;

        @media (max-width: 1230px) {
            display: none;
        }
    }
    .timeline-item-details-description {
        float: left;
        width: 60%;
        padding: 16px;
        font-size: 1.2em;
        opacity: .7;
        transition-property: opacity;
        transition-duration: .5s;
        @media (max-width: 1230px) {
            opacity: 1;
        }
    }

    img{
      //filter: grayscale(5) brightness(5);
      transition: all 0.3s ease;
    }
  }
</style>

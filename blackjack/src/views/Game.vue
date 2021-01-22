<template>
<div>
  <b-card-group deck>
    <b-card
      header="The Dealer"
      header-tag="header"
      footer="Card Footer"
      footer-tag="footer" 
    >
     <b-card-img v-if="activated2" :src="dealer[0].image" alt="Image" bottom class="rounded-0"></b-card-img>
  <b-card-img v-if="!visable" :src="dealer[1].image" alt="Image" bottom></b-card-img>
  <b-card-img v-else-if="visable" src="https://images.uncyclomedia.co/uncyclopedia/en/thumb/0/01/DramaticQuestionMark.png/300px-DramaticQuestionMark.png" alt="Image" bottom></b-card-img>
     
      <b-button @click="drawAcardDealer" href="#" variant="primary">Draw a card</b-button>
    </b-card>

    <b-card 
    title="The player" header-tag="header" footer-tag="footer"
    >
      <template #header>
        <h6 class="mb-0"></h6>
      </template>
       <b-list-group flush>
  <b-card-img v-if="activated1" :src="player[0].image" alt="Image" bottom class="rounded-0"></b-card-img>
  <b-card-img v-if="activated1" :src="player[1].image" alt="Image" bottom></b-card-img>
    </b-list-group>
      <b-button @click="drawAcard" href="#" variant="primary">Draw a card</b-button>
      <template #footer>
        <em>Footer Slot</em>
      </template>
    </b-card>
  </b-card-group>
</div>
</template>

<script>
export default {
    data() {
        return {
            player: [],
            dealer: [],
            cardone: "",
            activated1:false,
            visable:false,
            activated2:false
            
        }
    }
    ,
    methods: {
        
        drawAcard: function(){
       this.activated1= true 
       fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=2', {
      method: 'get'
    })
      .then((response) => {
        return response.json()
      })
      .then((jsonData) => {
        this.player = jsonData.cards

        }

      )}
    , 

    drawAcardDealer: function(){
        this.activated2= true 
       fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=2', {
      method: 'get'
    })
      .then((response) => {
        return response.json()
      })
      .then((jsonData) => {
        this.dealer = jsonData.cards

        }

      )}
   ,
    mounted: function() {
          fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=2', {
      method: 'get'
    })
      .then((response) => {
        return response.json()
      })
      .then((jsonData) => {
        this.player = jsonData.cards    
      }
      )}

}
}
   
    
    
    



</script>

<style scoped>

</style>
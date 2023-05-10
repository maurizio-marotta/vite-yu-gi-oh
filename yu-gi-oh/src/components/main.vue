<script>
import { store } from '../data/store';
import axios from '../../node_modules/axios';
import cards from '../components/cards.vue';

var test ;
export default {
  components: {
      cards
    },
    name:'Main',
    data(){
      return {
        store,
        filter:''
      }
    },
  methods :{
    getApi(){
      axios.get(store.apiUrl)
      .then(result => {
        store.cardArray = result.data.data.slice(0, 10);
        //store.cardArray = cardArray;
        console.log(store.cardArray);
      })
    }
  },
  mounted(){
    this.getApi()
  },
  computed: {
    filterCard(){
      return this.store.cardArray.filter((card) => {
        return card.archetype === this.filter;
      })
    }
  }
}
</script>

<template>
    <div class="container">
        <div class="select pt-4">
            <select name="filter" id="cardFilter" v-model="filter" class="mc-select">
            <option label="Alien" value="Alien">Alien</option>
            <option label="Noble Knight" value="Noble Knight">Noble Knight</option>
            <option label="Melodious" value="Melodious">Melodious</option>
        </select>
        </div>
        <div class="container-2 p-5">
          <div class="counter">
            <span>card trovate : {{ filterCard.length }}</span>
          </div>
          <div class="row row-cols-5" v-if="store.cardArray.length">
            <!-- {{store.cardArray[0].card_images[0] }} -->
            <cards
              v-for="card in filterCard"
              :key="card.id"
              :img="card.card_images[0].image_url"
              :name="card.name"
              :type="card.archetype" />
          </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.mc-select{
  border-radius: 7px;
  padding: 10px 30px;
}


.container{
  margin-top: 25px;
  min-height: 100vh;
  background-color: #D48F38;
}

.container-2{
  background-color: azure;
  height: 85%;
  margin: 20px;
}

.counter{
  display: flex;
  align-items: center;
  height: 5vh;
  background-color: black;
}
span{
  margin-left: 20px;
  color: white;
}

.cards-container{
  gap: 20px;
  flex-wrap: wrap;
}
</style>
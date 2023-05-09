<script>
import card from '../components/card.vue';
import cardVue from '../components/card.vue';
import { store } from '../data/store';
import axios from '../../node_modules/axios'

export default {
  components: { card },
    name:'Main',
    data(){
      return {
        store,
      }
    },
  methods :{
    getApi(){
      axios.get(store.apiUrl)
      .then(result => {
        const cardArray = result.data.slice(0, 100)
        store.cardArray = cardArray;
        store.cardNumber = cardArray.length
      })
    }
  },
  mounted(){
    this.getApi()
  }
}
</script>

<template>
    <div class="container">
        <div class="select pt-4">
            <select class="mc-select">
            <option value="1">Opzione</option>
            <option value="2">Opzione</option>
            <option value="3">Opzione</option>
        </select>
        </div>
        <div class="container-2 p-5">
          <div class="counter">
            <span>card trovate : {{ store.cardNumber}}</span>
          </div>
          <div class="row row-cols-5">
            <Card
              v-for="card in store.cardArray"
              :key="card.id"
              :img="card.card_images"
              :name="card.name"
              :type="card.type" />
            
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
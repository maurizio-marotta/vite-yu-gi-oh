<script>
import card from '../components/card.vue';
import cardVue from '../components/card.vue';
export default {
  components: { card },
    name:'Main'
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
            <span>card trovate</span>
          </div>
          <div class="cards-container d-flex">
            <card/>
            <card/>
            <card/>
            <card/>
            <card/>
            <card/>
            <card/>
            <card/>
            <card/>
            <card/>
            <card/>
            <card/>
            <card/>
            <card/>
            <card/>
            <card/>
            <card/>
            <card/>
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
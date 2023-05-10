<script>
export default {
    name:'Card',
    props:{
    img: String,
    name:String,
    type:String,
    id: String
  }
}

</script>

<template>

  <div class="card">
    <img :src="img" alt="name">
    <span>{{ name }} </span><br>
    <span>{{ type }}</span>
  </div>

</template>

<style lang="scss" scoped>
  .card{
    color: black;
    background-color: #D48F38;
    flex-shrink: 0;
    padding: 20px;
    width: 16.3%;
  }

span{
  font-size: 10px;
}
</style>
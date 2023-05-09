<script>
export default {
    name:'Card',
    props:{
    image_url: String,
    name:String,
    attribute:String,
  }
}
</script>

<template>


<div class="card">
        <img :src="image_url">
        <span>{{ name }} ciao</span>
        <span>{{ attribute }}</span>
      </div>

</template>

<style lang="scss" scoped>
  .card{
    color: black;
    background-color: #D48F38;
    flex-shrink: 0;
    padding: 20px;
    width: 16.3%;
    height: 200px;
  }
</style>
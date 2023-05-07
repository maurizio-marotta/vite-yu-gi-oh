<script>
export default {
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
        <div class="container-2 px-2">

        </div>
    </div>
</template>

<style lang="scss" scoped>
.mc-select{
  border-radius: 7px;
  padding: 10px 30px;
}
.select{
  text-align: left;
  }

.container{
  margin-top: 25px;
  height: 100vh;
  background-color: #D48F38;
}

.container-2{
  background-color: azure;
  height: 85%;
  margin: 20px;
}

</style>
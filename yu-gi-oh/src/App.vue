<script>
import headerVue from './components/header.vue';
import mainVue from './components/main.vue';
export default {
  name: "App",
  components: {
    headerVue,
    mainVue,
  },
}
</script>

<template>
  <div class="container">
    <headerVue/>
    <mainVue/>
  </div>
</template>

<style lang="scss" scoped>
  .container{
    padding: 0px 150px;
  }
</style>
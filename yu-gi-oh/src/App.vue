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
  <div class="">
    <headerVue/>
    <mainVue/>
  </div>
</template>

<style>
  
</style>
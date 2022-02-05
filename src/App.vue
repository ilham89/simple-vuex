<template>
  <div id="app">
    <!-- <mainview /> -->
    <country />
  </div>
</template>

<script>
// import Mainview from "./components/Mainview.vue";
import Country from "./components/Country.vue";
export default {
  name: "App",
  components: {
    // Mainview,
    Country,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

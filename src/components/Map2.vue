<template>
  <div id="app">
    <svg-map :map="x" />
  </div>
</template>

<script>
import { SvgMap } from "vue-svg-map";
import Taiwan from "@svg-maps/japan";

export default {
  name: "Map2",
  components: {
    SvgMap,
  },
  data() {
    return {
      x: Taiwan,
    };
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
<style src="vue-svg-map/dist/index.css"></style>

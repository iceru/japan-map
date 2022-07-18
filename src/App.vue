<script setup>
import MyMap from "./components/MyMap.vue";
</script>

<template>
  <MyMap :services="services" />
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      services: [],
    };
  },
  async mounted() {},
};
</script>

<style></style>

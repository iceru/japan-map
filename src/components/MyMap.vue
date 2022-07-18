<template>
  <div class="map">
    <div id="svgMap" ref="map"></div>
    <div class="data">
      <div class="services">
        <div
          v-for="service in services"
          :key="service"
          style="margin-bottom: 12px"
        >
          <div>{{ service.Name }}</div>
          <div>{{ service.PhysicalAddress.State }}</div>
        </div>
      </div>

      <div class="selectedService">
        <div
          v-for="service in selectedServices"
          :key="service"
          style="margin-bottom: 12px"
        >
          <div>{{ service.Name }}</div>
          <div>{{ service.PhysicalAddress.State }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "svg-japan/dist/svg-japan.min.js";
import prefectures from "../helpers/prefectures.js";
import { onMounted } from "vue";
import url from "@/helpers/endpoints.js";
import requests from "@/helpers/requests.js";
import axios from "axios";

export default {
  name: "MyMap",
  data() {
    return {
      services: [],
      selectedServices: [],
    };
  },
  methods: {
    filterData(region) {
      this.selectedServices = this.services.filter(
        (item) => item.PhysicalAddress.State === region
      );
    },
    clickRegion() {
      var self = this;
      document.addEventListener(
        "svgmap.click",
        function (e) {
          [...document.querySelectorAll(".prefecture-map")].forEach((pm) =>
            pm.classList.remove("selected")
          );

          const ref = e.target;
          const selected = prefectures(e.target.getAttribute("data-name"));

          console.log(self.services);
          console.log(selected);

          self.filterData(selected);

          if (ref.getAttribute("class").includes("selected"))
            ref.setAttribute("class", "prefecture-map");
          else ref.setAttribute("class", "prefecture-map selected");
        },
        false
      );
    },
  },
  async mounted() {
    this.clickRegion();
    const lang = "en-US";
    const currency = "JPY";
    try {
      await axios
        .post(url.endpoints.search, requests.bodyServices(lang, currency))
        .then((response) => {
          this.services = response.data.Entities;
        });
    } catch (error) {
      console.log(error);
    }
  },
  setup() {
    onMounted(() => {
      svgJapan({
        element: "#svgMap",
        uniformly: true,
      });
    });
  },
};
</script>

<style src="vue-svg-map/dist/index.css"></style>
<style>
.selected {
  fill: #d70035;
}

.data {
  display: flex;
  margin-top: 2rem;
}

.services {
  margin-right: 2rem;
}
</style>

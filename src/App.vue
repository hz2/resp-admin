<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

import req from "./utils/req";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
  },
  setup() {
    console.log("import.meta.env", import.meta.env);

    // req("/billboard/show", {
    //   method: "GET",
    //   params: {
    //     page: 1,
    //     size: 33,
    //   },
    // }).then((resp: object) => {
    //   console.log("resp", resp);
    // });

    // req("/promotion/all", {
    //   method: "GET",
    //   params: {
    //     page: 1,
    //     size: 33,
    //   },
    // }).then((resp: object) => {
    //   console.log("resp", resp);
    // });
  },
});
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
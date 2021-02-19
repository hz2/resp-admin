<template>
  <el-button @click="count++">count is: {{ count }}</el-button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup: () => {
    const count = ref(0);

    onMounted(() => {
      console.log("qqq");

      const url = "https://objectstorage.ap-tokyo-1.oraclecloud.com/n/nrs6ddnbfuvk/b/";
      fetch(url, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          "authorization": "Du_1fpHdAY4KQvNIE#6N"
        },
      });
    });

    return { count };
  },
});
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
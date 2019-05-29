<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld v-if="pageObj.title" :msg="'Welcome to' + pageObj.title"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld
  },
  props: {
    pageArr: Array
  },
  data() {
    return {
      pageObj: {}
    };
  },
  created() {
    this.pageObj = this.pageArr.find(item => item.alias == "app");
  }
};
</script>

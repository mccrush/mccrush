<template>
  <div id="app" class="container">
    <div v-if="!this.$store.state.pageArr[0]" class="spinner-grow text-danger mt-3" role="status">
      <span class="sr-only">Loading...</span>
    </div>
    <AppNavbar v-if="this.$store.state.pageArr[0]"/>
    <router-view v-if="this.$store.state.pageArr[0]"/>
    <AppFoot/>
  </div>
</template>

<script>
//import { db } from "@/main.js";
import AppNavbar from "@/components/AppNavbar.vue";
import AppFoot from "@/components/AppFoot.vue";

export default {
  components: {
    AppNavbar,
    AppFoot
  }
};
</script>


<style>
#app {
  text-align: left;
  color: #2c3e50;
  max-width: 800px;
}
</style>

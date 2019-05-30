<template>
  <div class="row mt-3">
    <div class="col">
      <h2>AdminListRazdel</h2>
    </div>
    <!-- <img alt="Vue logo" src="../assets/logo.png" width="150"> -->
    <!-- <HelloWorld v-if="pageObj.title" :msg="'Welcome to ' + pageObj.title"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "adminListRazdel",
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
    this.getPageObg(this.$route.params.alias);
  },
  methods: {
    getPageObg(match) {
      this.pageObj = this.pageArr.find(item => item.alias == match);
    }
  },
  watch: {
    $route(to, from) {
      this.getPageObg(to.params.alias);
    }
  }
};
</script>

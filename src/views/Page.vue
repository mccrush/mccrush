<template>
  <div class="row mt-3">
    <div class="col">
      <h2>{{pageObj.title}}</h2>
      <p class="description">{{pageObj.description}}</p>
      <div class="content" v-html="pageObj.content"></div>
      <button class="btn btn-success">Yeah!</button>
    </div>
    <!-- <img alt="Vue logo" src="../assets/logo.png" width="150"> -->
    <!-- <HelloWorld v-if="pageObj.title" :msg="'Welcome to ' + pageObj.title"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "page",
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

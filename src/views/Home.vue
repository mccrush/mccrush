<template>
  <div class="row mt-3">
    <vueHeadful :title="pageObj.title" :description="pageObj.description" />
    <div v-if="this.pageObj !== null" class="col-12">
      <h2>{{pageObj.title}}</h2>
      <p class="description">{{pageObj.description}}</p>
      <hr />
      <div class="content" v-if="this.$route.params.alias !== 'app'" v-html="pageObj.content"></div>
    </div>
    <!-- <img alt="Vue logo" src="../assets/logo.png" width="150"> -->
    <div v-if="this.$route.params.alias == 'app'" class="col-12">
      <div v-if="!this.$store.state.appArr[0]" class="spinner-grow text-danger mt-3" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <div v-if="this.$store.state.appArr[0]" class="card-deck">
        <CardApp v-for="(item, index) in this.$store.state.appArr" :key="'card-'+item.alias" :item="item" :itemId="appId[index]" />
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
// @ is an alias to /src
import vueHeadful from "vue-headful";
import $ from 'jquery'
import CardApp from "@/components/CardApp.vue";

export default {
  name: "home",
  components: {
    vueHeadful,
    CardApp
  },
  data() {
    return {
      pageObj: {},
      appId: this.$store.state.appId
    };
  },
  created() {
    this.getPageObg(this.$route.params.alias);
    $(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
  },
  methods: {
    getPageObg(match) {
      this.pageObj =
        this.$store.state.pageArr.find(item => item.alias == match) || null;

      if (this.pageObj == null) {
        this.$router.replace("/404");
      }
      //console.log("this.pageObj:", this.pageObj);
    }
    // getPageObg(match) {
    //   this.pageObj = this.pageArr.find(item => item.alias == match);
    // }
  },
  watch: {
    $route(to, from) {
      this.getPageObg(to.params.alias);
    }
  }
};
</script>
<style>
</style>
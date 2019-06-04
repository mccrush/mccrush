<template>
  <div class="row mt-3">
    <div class="col-12">
      <h2>{{pageObj.title}}</h2>
      <p class="description">{{pageObj.description}}</p>
      <hr>
      <div class="content" v-if="this.$route.params.alias !== 'app'" v-html="pageObj.content"></div>
    </div>
    <!-- <img alt="Vue logo" src="../assets/logo.png" width="150"> -->
    <div class="col-12" v-if="this.$route.params.alias == 'app'">
      <div class="card-deck">
        <CardApp v-for="item in this.$store.state.appArr" :key="'card-'+item.alias" :item="item"/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CardApp from "@/components/CardApp.vue";

export default {
  name: "page",
  components: {
    CardApp
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
      this.pageObj = this.$store.state.pageArr.find(
        item => item.alias == match
      );
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

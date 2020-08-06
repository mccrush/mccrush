<template>
  <div class="row mt-3">
    <vueHeadful :title="pageObj.title" :description="pageObj.description" />

    <div v-if="this.pageObj !== null" class="col-12">
      <h3>{{pageObj.title}}</h3>
      <p class="description">{{pageObj.description}}</p>
      <hr />
      <div class="content" v-if="this.$route.params.alias !== 'app'" v-html="pageObj.content"></div>
    </div>
    <!-- <img alt="Vue logo" src="../assets/logo.png" width="150"> -->
    <div v-if="this.$route.params.alias == 'app'" class="col-12">
      <div v-if="!this.$store.state.appArr[0]" class="spinner-grow text-danger mt-3" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <div v-if="this.$store.state.appArr[0]" class="row row-cols-1 row-cols-sm-2 g-4">
        <CardApp
          v-for="(item, index) in this.$store.state.appArr"
          :key="'card-'+item.alias"
          :item="item"
          :itemId="appId[index]"
        />
      </div>
    </div>
  </div>
</template>

<script>
import vueHeadful from 'vue-headful'
// import $ from 'jquery'
import CardApp from '@/components/CardApp.vue'

export default {
  name: 'index',
  components: {
    vueHeadful,
    CardApp,
  },
  data() {
    return {
      pageObj: {},
      appId: this.$store.state.appId,
    }
  },
  created() {
    this.getPageObg(this.$route.params.alias)
  },

  methods: {
    getPageObg(match) {
      this.pageObj =
        this.$store.state.pageArr.find((item) => item.alias == match) || null

      if (this.pageObj == null) {
        this.$router.replace('/404')
      }
      //console.log("this.pageObj:", this.pageObj);
    },
    // getPageObg(match) {
    //   this.pageObj = this.pageArr.find(item => item.alias == match);
    // }
  },
  watch: {
    $route(to, from) {
      this.getPageObg(to.params.alias)
    },
  },
}
</script>
<style>
.content a {
  color: #0056b3;
}
</style>
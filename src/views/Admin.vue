<template>
  <div class="row mt-3">
    <div class="col-12">
      <router-link to="/adm/page">Page</router-link>&nbsp;|
      <router-link to="/adm/app">App</router-link>
      <hr>
    </div>
    <div class="col-2 border-right">
      <AdminListRazdel :itogArr="itogArr"/>
    </div>
    <div class="col-10">Forms</div>
    <!-- <img alt="Vue logo" src="../assets/logo.png" width="150"> -->
    <!-- <HelloWorld v-if="pageObj.title" :msg="'Welcome to ' + pageObj.title"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import AdminListRazdel from "@/components/AdminListRazdel.vue";

export default {
  name: "admin",
  components: {
    AdminListRazdel
  },
  props: {
    pageArr: Array,
    appArr: Array
  },
  data() {
    return {
      pageObj: {},
      itogArr: []
    };
  },
  created() {
    //this.getPageObg(this.$route.params.alias);
    this.getItogArr(this.$route.params.razdel);
  },
  methods: {
    getPageObg(match) {
      this.pageObj = this.pageArr.find(item => item.alias == match);
    },
    getItogArr(arr) {
      this.itogArr = arr == "page" ? this.pageArr : this.appArr;
    }
  },
  watch: {
    $route(to, from) {
      //this.getPageObg(to.params.alias);
      this.getItogArr(to.params.razdel);
    }
  }
};
</script>

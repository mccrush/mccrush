<template>
  <div class="row mt-3">
    <div class="col-12">
      <router-link to="/adm/page">Page</router-link>&nbsp;
      <small>|</small>&nbsp;
      <router-link to="/adm/app">App</router-link>
      <hr>
    </div>
    <div class="col-2 border-right">
      <AdminListRazdel :itogArr="itogArr" :idArr="idArr"/>
    </div>
    <div class="col-10">
      <AdminFormPage v-if="this.$route.query.alias" :itogArr="itogArr" :idArr="idArr"/>
    </div>

    <!-- <img alt="Vue logo" src="../assets/logo.png" width="150"> -->
    <!-- <HelloWorld v-if="pageObj.title" :msg="'Welcome to ' + pageObj.title"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import AdminListRazdel from "@/components/AdminListRazdel.vue";
import AdminFormPage from "@/components/AdminFormPage.vue";

export default {
  name: "admin",
  components: {
    AdminListRazdel,
    AdminFormPage
  },
  props: {
    pageArr: Array,
    pageId: Array,
    appArr: Array,
    appId: Array
  },
  data() {
    return {
      formObj: {},
      itogArr: [],
      idArr: []
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
      this.idArr = arr == "page" ? this.pageId : this.appId;
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

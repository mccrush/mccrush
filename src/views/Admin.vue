<template>
  <div class="row mt-3">
    <div class="col-3">
      <h2>Admin</h2>
      <AdminListRazdel :pageArr="pageArr"/>
    </div>
    <div class="col-9">Forms</div>
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

<template>
  <ul class="list-unstyled small">
    <li>
      <router-link to="?alias=new" class="btn btn-outline-success btn-sm mb-2">Add new +</router-link>
    </li>
    <li v-for="(item, index) in itogArr" :key="'ki'+index">
      <router-link :to="'?alias='+item.alias+'&id='+idArr[index]">{{item.title}}</router-link>
    </li>
  </ul>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "adminListRazdel",
  components: {},
  props: {
    itogArr: Array,
    idArr: Array
  },
  data() {
    return {
      pageObj: {}
    };
  },
  created() {
    //this.getPageObg(this.$route.params.alias);
  },
  methods: {
    getPageObg(match) {
      this.pageObj = this.pageArr.find(item => item.alias == match);
    }
  },
  watch: {
    $route(to, from) {
      //this.getPageObg(to.params.alias);
    }
  }
};
</script>

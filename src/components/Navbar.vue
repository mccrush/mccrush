<template>
  <nav class="navbar navbar-expand-sm navbar-light bg-white shadow-sm">
    <router-link class="navbar-brand" to="/home">
      <img src="/img/logo.png" width="70" height="30" alt="Write Code!">
    </router-link>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item" v-for="item in menuArr" :key="'k-'+item.alias">
          <router-link :to="'/'+item.alias">&nbsp;{{item.title}}&nbsp;</router-link>
        </li>
      </ul>
    </div>
    <a class="navbar-brand mr-0" href="https://github/mccrush" target="_blank">
      <img src="/img/github.png" width="24" height="24" alt="Github/mccrush" title="Github/mccrush">
    </a>
  </nav>
</template>

<script>
export default {
  name: "navbar",
  props: {
    pageArr: Array
  },
  data() {
    return {
      menuArr: []
    };
  },
  created() {
    this.menuArr = this.pageArr.filter(function(item, i) {
      return i > 0;
    });
  }
};
</script>


<style scoped>
.nav-item a {
  color: #212529;
  margin-top: -20px;
  padding-bottom: 18px;
  border-bottom: 2px solid rgba(0, 0, 0, 0);
  transition: 0.5s;
}

.nav-item a:hover {
  color: #212529;
  text-decoration: none;
  border-bottom: 2px solid red;
}

.nav-item a.router-link-exact-active {
  color: #212529;
  border-bottom: 2px solid red;
}
</style>

<template>
  <div class="row">
    <div class="col pl-0 pr-0">
      <nav class="navbar navbar-expand-sm navbar-light bg-white shadow-sm pt-3 pb-3">
        <router-link class="mr-1" to="/home">
          <img src="/img/logo.png" width="32" height="32" alt="Logo" />
        </router-link>
        <h4 class="d-sm-none m-0">mccrush.ru</h4>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <!-- Для компьютеров -->
            <li class="nav-item d-none d-sm-inline" v-for="item in menuArr" :key="'ks-'+item.alias">
              <router-link :to="'/'+item.alias" class="pl-2 pr-2">&nbsp;{{item.title}}&nbsp;</router-link>
            </li>
            <li class="nav-item d-none d-sm-inline">
              &nbsp;
              <router-link :to="'/dev'" class="pl-2 pr-2">Разработка</router-link>&nbsp;
            </li>
            <li class="nav-item d-none d-sm-inline">
              &nbsp;
              <router-link :to="'/comp'" class="pl-2 pr-2">Ремонт</router-link>&nbsp;
            </li>
            <!-- Конец Для компьютеров -->
            <!-- Для телефонов -->
            <li class="nav-item d-sm-none" v-for="item in menuArr" :key="'k-'+item.alias">
              <router-link :to="'/'+item.alias" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false">&nbsp;{{item.title}}&nbsp;</router-link>
            </li>
            <li class="nav-item d-sm-none">
              &nbsp;
              <router-link :to="'/dev'" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false">Разработка</router-link>&nbsp;
            </li>
            <li class="nav-item d-sm-none">
              &nbsp;
              <router-link :to="'/comp'" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false">Ремонт</router-link>&nbsp;
            </li>
            <!-- Конец Для телефонов -->
            <!-- Для системные всегда -->
            <li class="nav-item" v-if="this.$store.state.uid">
              &nbsp;
              <router-link :to="'/adm/page'" class="text-muted pl-1 pr-1">Панель</router-link>&nbsp;
            </li>
            <li class="nav-item" v-if="this.$store.state.uid && (this.$route.path == '/adm/page' || this.$route.path == '/adm/app')">
              &nbsp;
              <span class="text-muted spanout pl-1 pr-1" @click="logOut()">Выйти</span>&nbsp;
            </li>
            <!-- Конец Для системные всегда -->
          </ul>
        </div>
        <a class="mr-0 d-none d-sm-block" href="https://github.com/mccrush/" target="_blank">
          <img src="/img/github_32.png" width="28" height="28" alt="Github/mccrush" title="Github/mccrush" />
        </a>
      </nav>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
//import { auth } from "@/main.js";

export default {
  name: "navbar",
  props: {
    //pageArr: Array
  },
  data() {
    return {
      menuArr: []
      //authStatus: auth.currentUser
    };
  },
  created() {
    this.menuArr = this.$store.state.pageArr.filter(function(item, i) {
      return i > 0 && item.show;
    });

    // this.menuArr = this.pageArr.filter(function(item, i) {
    //   return i > 0;
    // });
  },
  mounted() {
    // let navItem = document.querySelectorAll(".navbar-nav>li>a");
    // let collapsing = document.querySelector(".navbar-collapse");
    // for (let i = 0, len = navItem.length; i < len; i++) {
    //   navItem[i].addEventListener("click", function() {
    //     collapsing.classList.remove("show");
    //   });
    // }
  },
  methods: {
    logOut() {
      this.$store.commit("logOut");
    }
  },
  computed: {}
};
</script>


<style scoped>
.nav-item a {
  color: #212529;
  margin-top: -20px;
  padding-bottom: 20px;
  border-bottom: 2px solid rgba(0, 0, 0, 0);
  transition: 0.5s;
}

.nav-item a:hover {
  color: #212529;
  text-decoration: none;
  border-bottom: 2px solid #ea5455 /*red*/;
}

.nav-item a.router-link-exact-active {
  color: #212529;
  border-bottom: 2px solid #ea5455 /*red*/;
}

@media (max-width: 576px) {
  .nav-item {
    padding: 15px 0 0 0;
    margin-top: 0;
    border-bottom: none;
  }

  .nav-item a {
    color: #212529;
    margin-top: -20px;
    padding-bottom: 18px;
    border-bottom: none;
  }

  .nav-item a:hover {
    color: #212529;
    text-decoration: none;
    border-bottom: none;
  }

  .nav-item a.router-link-exact-active {
    color: #212529;
    border-bottom: none;
  }
}

.spanout {
  cursor: pointer;
}

.spanout:hover {
  text-decoration: underline;
}
</style>

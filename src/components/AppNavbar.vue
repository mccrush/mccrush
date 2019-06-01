<template>
  <div class="row">
    <div class="col pl-0 pr-0">
      <nav class="navbar navbar-expand-sm navbar-light bg-white shadow-sm">
        <router-link class="navbar-brand" to="/home">
          <img src="/img/logo.png" width="70" height="30" alt="Write Code!">
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item" v-for="item in menuArr" :key="'k-'+item.alias">
              <router-link :to="'/'+item.alias">&nbsp;{{item.title}}&nbsp;</router-link>
            </li>
            <li class="nav-item" v-if="isAuth==true">
              &nbsp;
              <router-link :to="'/adm/page'" class="text-muted">Панель</router-link>&nbsp;
            </li>
            <li class="nav-item" v-if="isAuth==true">
              &nbsp;
              <span class="text-muted spanout" @click="logOut()">Выйти</span>&nbsp;
            </li>
          </ul>
        </div>
        <a class="navbar-brand mr-0 d-none d-sm-block" href="https://github/mccrush" target="_blank">
          <img src="/img/github.png" width="24" height="24" alt="Github/mccrush" title="Github/mccrush">
        </a>
      </nav>
    </div>
  </div>
</template>

<script>
import { auth } from "@/main.js";

export default {
  name: "navbar",
  props: {
    pageArr: Array
  },
  data() {
    return {
      menuArr: [],
      isAuth: false
    };
  },
  created() {
    this.menuArr = this.pageArr.filter(function(item, i) {
      return i > 0;
    });
    //
    if (auth.currentUser) {
      this.isAuth = true;
    } else {
      this.isAuth = false;
    }
  },
  methods: {
    logOut() {
      console.log("Metod srabotal");
      auth
        .signOut()
        .then(function() {
          // Sign-out successful.
          this.isAuth = false;
        })
        .catch(function(error) {
          // An error happened.
        });
    }
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

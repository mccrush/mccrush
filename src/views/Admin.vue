<template>
  <div class="row mt-3">
    <div v-if="!authStatus" class="col-12">
      <div class="row mt-2">
        <div class="col-4"></div>
        <div class="col-4 pt-3 pb-3 border bg-light">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="uEmail">
              <small id="emailHelp" class="form-text text-muted">Для получения доступа, обратитесь к администратору</small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="uPassword">
            </div>
            <button class="btn btn-block btn-dark" @click.prevent="signIn()">Войти</button>
          </form>
        </div>
        <div class="col-4"></div>
      </div>
    </div>
    <div v-if="authStatus" class="col-12">
      <router-link to="/adm/page">Page</router-link>&nbsp;
      <small>|</small>&nbsp;
      <router-link to="/adm/app">App</router-link>
      <hr>
    </div>
    <div v-if="authStatus" class="col-2 border-right">
      <AdminListRazdel :itogArr="itogArr" :idArr="idArr"/>
      authStatus = {{authStatus}}
    </div>
    <div v-if="authStatus" class="col-10">
      <AdminFormPage v-if="this.$route.query.alias" :itogArr="itogArr" :idArr="idArr"/>
    </div>

    <!-- <img alt="Vue logo" src="../assets/logo.png" width="150"> -->
    <!-- <HelloWorld v-if="pageObj.title" :msg="'Welcome to ' + pageObj.title"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import { auth } from "@/main.js";
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
      uEmail: null,
      uPassword: null,
      //authStatus: store.state.authStatus,
      formObj: {},
      itogArr: [],
      idArr: []
      //test: "2"
    };
  },
  created() {
    if (auth.currentUser) {
      //this.$store.commit("changeAuthStatus", true);
      //this.isAuth = true;
    } else {
      //store.commit("changeAuthStatus");
      //this.isAuth = false;
    }
    //
    auth.onAuthStateChanged(function(user) {
      if (user) {
        console.log("Статус пользователя изменен на Авторизован");
        //this.isAuth = true;
        //this.$store.commit("changeAuthStatus", true);
      } else {
        console.log("Ad:Статус пользовтеля - Вышел!");
        this.$store.commit("changeAuthStatus", false);
        //this.test = "5";
        //this.isAuth = false;
      }
    });
    //this.getPageObg(this.$route.params.alias);
    this.getItogArr(this.$route.params.razdel);
  },
  methods: {
    signIn() {
      auth
        .signInWithEmailAndPassword(this.uEmail, this.uPassword)
        .then(function(user) {
          console.log("Авторизация прошла успешно");
          //this.isAuth = true;
          //sessionStorage.setItem(uid, user.uid);
          //console.log("in metd this.isAuth =", this.isAuth);
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
        });
    },
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
  },
  computed: {
    authStatus() {
      return this.$store.state.authStatus;
    }
  }
};
</script>

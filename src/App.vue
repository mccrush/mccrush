<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">Home</router-link>|
      <router-link to="/app">App</router-link>|
      <router-link to="/edu">Edu</router-link>|
      <router-link to="/gtd">Gtd</router-link>
    </div>
    <router-view v-if="pageArr[0]" :pageArr="pageArr"/>
  </div>
</template>

<script>
import { db } from "@/main.js";

export default {
  data() {
    return {
      pageArr: []
    };
  },
  created() {
    db.collection("page")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.pageArr.push(doc.data());
          //console.log(`${doc.id} => ${doc.data().alias}`);
        });
        //console.log("this.pageArr:", this.pageArr);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

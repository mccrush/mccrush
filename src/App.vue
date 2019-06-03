<template>
  <div id="app" class="container">
    <div v-if="!pageArr[0]" class="spinner-grow text-danger mt-3" role="status">
      <span class="sr-only">Loading...</span>
    </div>
    <AppNavbar v-if="pageArr[0]" :pageArr="pageArr"/>
    <router-view v-if="pageArr[0]" :pageArr="pageArr" :pageId="pageId" :appArr="appArr" :appId="appId"/>
    <AppFoot/>
  </div>
</template>

<script>
import { db } from "@/main.js";
import AppNavbar from "@/components/AppNavbar.vue";
import AppFoot from "@/components/AppFoot.vue";

export default {
  components: {
    AppNavbar,
    AppFoot
  },
  data() {
    return {
      pageArr: [],
      pageId: [],
      appArr: [],
      appId: []
    };
  },
  created() {
    db.collection("page")
      .orderBy("posmenu")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.pageId.push(doc.id);
          this.pageArr.push(doc.data());
          //console.log(`${doc.id} => ${doc.data().alias}`);
        });
        //console.log("this.pageArr:", this.pageArr);
      })
      .catch(error => {
        console.log(error);
      });

    db.collection("app")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.appId.push(doc.id);
          this.appArr.push(doc.data());
          //console.log(`${doc.id} => ${doc.data().alias}`);
        });

        //console.log("this.appArr:", this.appArr);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>


<style>
#app {
  text-align: left;
  color: #2c3e50;
  max-width: 730px;
}
</style>

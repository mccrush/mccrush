<template>
  <div id="app" class="container">
    <Navbar v-if="pageArr[0]" :pageArr="pageArr"/>
    <router-view v-if="pageArr[0]" :pageArr="pageArr" :appArr="appArr"/>
    <Foot/>
  </div>
</template>

<script>
import { db } from "@/main.js";
import Navbar from "@/components/Navbar.vue";
import Foot from "@/components/Foot.vue";

export default {
  components: {
    Navbar,
    Foot
  },
  data() {
    return {
      pageArr: [],
      appArr: []
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

    db.collection("app")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
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

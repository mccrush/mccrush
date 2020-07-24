<template>
  <div id="app" class="container-md">
    <!-- <div v-if="!this.$store.state.pageArr[0]" class="spinner-grow text-danger mt-3" role="status">
      <span class="sr-only">Loading...</span>
    </div>-->
    <Loader v-if="!this.$store.state.pageArr[0]" />

    <Navbar v-if="this.$store.state.pageArr[0]" />
    <transition appear name="fade" mode="out-in">
      <router-view v-if="this.$store.state.pageArr[0]" />
    </transition>
    <Footer v-if="this.$store.state.pageArr[0]" />
  </div>
</template>

<script>
//import { db } from "@/main.js";
import { auth } from '@/main.js'
import Loader from '@/components/Loader'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  components: {
    Loader,
    Navbar,
    Footer,
  },
  mounted() {
    if (auth.currentUser) {
      this.$store.commit('setUser', auth.currentUser.uid)
      //this.uid = auth.currentUser.uid;
    }
  },
}
</script>


<style>
#app {
  text-align: left;
  color: #55636f;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  max-width: 880px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: #2c3e50;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
}
</style>

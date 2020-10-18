<template>
  <div id="app" class="container-md">
    <Navbar />
    <transition appear name="fade" mode="out-in">
      <router-view />
    </transition>
    <Footer />
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  name: 'app',
  components: {
    Navbar,
    Footer,
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

<template>
  <div id="container" class="container-fluid">
    <div class="header row vh-100">
      <Navbar @change-bg="changeBg" />
      <Jimbo />
    </div>
    <div class="row bg-warning">
      <Footer />
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '@/components/Navbar'
import Jimbo from '@/components/Jimbo'
import Footer from '@/components/Footer'

export default {
  name: 'app',
  components: {
    Navbar,
    Jimbo,
    Footer
  },
  methods: {
    changeBg() {
      console.log('ChBg')
    }
  }
}
</script>


<style>
#container {
  color: rgba(31, 31, 33, 0.87);
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  /* color: #2c3e50; */
  /* color: #fff; */
  font-weight: 600;
}

a,
a:hover,
a:active {
  /* color: #fff; */
  color: #212529;
}

.btn:focus,
.form-control:focus,
.form-select:focus,
.navbar-toggler:focus {
  outline: 0 !important;
  box-shadow: none !important;
}

.fw-500 {
  font-weight: 600;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

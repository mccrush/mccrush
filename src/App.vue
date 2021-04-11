<template>
  <div id="container" class="container-fluid">
    <div class="header row vh-100">
      <Navbar @change-bg="changeBg" />
      <Jimbo />
    </div>
    <div class="bg-deep-blue row">
      <PriceCalc />
    </div>
    <div class="row">
      <Footer />
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '@/components/Navbar'
import Jimbo from '@/components/Jimbo'
import PriceCalc from '@/components/PriceCalc'
import Footer from '@/components/Footer'

export default {
  name: 'app',
  components: {
    Navbar,
    Jimbo,
    PriceCalc,
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

.container-960 {
  max-width: 960px;
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

.cursor-def {
  cursor: default;
}

.cursor-point {
  cursor: pointer;
}

.fw-500 {
  font-weight: 600;
}

.bg-deep-blue {
  background-color: #3f51b5;
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

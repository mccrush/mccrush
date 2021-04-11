<template>
  <div id="container" class="container-lg">
    <Navbar />
    <Index />
    <Footer />
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '@/components/Navbar'
import Index from '@/views/Index'
import Footer from '@/components/Footer'

export default {
  name: 'app',
  components: {
    Navbar,
    Index,
    Footer
  }
}
</script>


<style>
#container {
  max-width: 960px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
}

/* 
#apps {
  text-align: left;
  max-width: 880px;
} */

h1,
h2,
h3,
h4,
h5,
h6 {
  /* color: #2c3e50; */
  /* color: #fff; */
  font-weight: 500;
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
  font-weight: 500;
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

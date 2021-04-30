<template>
  <div id="container" class="container-fluid">
    <div class="header bg-pattern-brl row vh-100">
      <Navbar />
      <Jimbo />
    </div>

    <div class="bg-light bg-pattern-brl row">
      <Apps />
    </div>

    <div class="bg-blue bg-pattern-brl row">
      <Uslugi />
    </div>

    <div class="bg-deep-blue bg-pattern-brl row">
      <PriceCalc />
    </div>

    <div class="bg-purpur bg-pattern-brl row">
      <Price />
    </div>

    <div class="row bg-dark">
      <Footer />
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '@/components/Navbar'
import Jimbo from '@/components/Jimbo'
import Apps from '@/components/Apps'
import Uslugi from '@/components/Uslugi'
import PriceCalc from '@/components/PriceCalc'
import Price from '@/components/Price'
import Footer from '@/components/Footer'

export default {
  name: 'app',
  components: {
    Navbar,
    Jimbo,
    Apps,
    Uslugi,
    PriceCalc,
    Price,
    Footer
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
  color: rgba(31, 31, 33, 0.87);
}

a.a-price,
a.a-price:hover,
a.a-price:active {
  color: #ffffff;
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

.margin-64 {
  margin-top: -64px;
}

.text-blue {
  color: #2196f3;
}

.text-deep-blue {
  color: #3f51b5;
}

.text-purpur {
  color: #673ab7;
}

.bg-blue {
  background-color: #2196f3;
  color: #ffffff;
}

.bg-deep-blue {
  background-color: #3f51b5;
  color: #ffffff;
}

.bg-purpur {
  background-color: #673ab7;
  color: #ffffff;
}

.bg-pattern {
  background-image: url('/img/so-white.png');
}

.bg-pattern-brl {
  background-image: url('/img/brilliant.png');
}

.opc-08 {
  opacity: 0.8;
}

.box-tech {
  cursor: default;
  border-top: 3px solid #ffffff;
  transition: 0.3s;
}

.box-tech:hover {
  box-shadow: 0 0.1rem 0.4rem rgba(0, 0, 0, 0.15) !important;
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

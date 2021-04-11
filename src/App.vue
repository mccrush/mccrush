<template>
  <div id="apps" class="container-md">
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
#app {
  background: #ca9800;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
}

#apps {
  text-align: left;
  /* color: #55636f; */
  max-width: 880px;
}

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
  color: #fff;
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

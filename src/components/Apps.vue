<template>
  <div class="col-12 mb-5 pt-5 pb-5">
    <div class="container-960 container-lg">
      <div class="row text-center">
        <div class="col-12">
          <h5 class="mt-5 mb-5">Open sourse проекты</h5>
        </div>
        <div
          v-for="n in 6"
          :key="'id' + n"
          class="app-card h-256 col-4 d-flex flex-column justify-content-center bg-light position-relative"
        >
          <a href="#" class="app-link d-block stretched-link"
            ><h6>Go somewhere</h6></a
          >
          <small>Description app for all ages peoples and girls</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import apps from '@/data/apps'

export default {
  data() {
    return {
      apps
    }
  }
}
</script>

<style scoped>
.app-card {
  border-top: 4px solid #fff;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  z-index: 2;
  transition: ease-out 0.3s;
}

.app-card:hover {
  border-top: 4px solid #f8f9fa;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  z-index: 3;
}

@media screen and (max-width: 960px) {
  .h-256 {
    height: calc(100vw / 3 - 16px);
  }
}

@media screen and (min-width: 960px) {
  .h-256 {
    height: 308px;
  }
}

.app-link {
  text-decoration: none;
}
</style>
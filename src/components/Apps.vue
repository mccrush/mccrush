<template>
  <div class="col-12 mb-5 pt-5 pb-5">
    <div class="container-960 container-lg">
      <div class="row text-center">
        <div class="col-12">
          <h5 class="mt-5 mb-5">Open sourse проекты</h5>
        </div>
        <div
          v-for="app in apps"
          :key="'id' + app.id"
          class="app-card h-256 col-12 col-sm-6 col-md-4 d-flex flex-column justify-content-center bg-light position-relative"
        >
          <a
            :href="app.href"
            target="_blank"
            class="app-link d-block stretched-link"
            ><h5>{{ app.title }}</h5></a
          >
          <small>{{ app.description }}</small>
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

@media screen and (max-width: 576px) {
  .h-256 {
    height: calc((100vw - 24px) / 1.618);
  }
}

@media screen and (min-width: 576px) and (max-width: 768px) {
  .h-256 {
    height: calc((100vw - 24px) / 3.236);
  }
}

@media screen and (min-width: 768px) and (max-width: 960px) {
  .h-256 {
    height: calc((100vw - 24px) / 4.854);
  }
}

/* 
@media screen and (min-width: 960px) {
  .h-256 {
    height: 190px; 
  }
} */

.app-link {
  text-decoration: none;
}
</style>
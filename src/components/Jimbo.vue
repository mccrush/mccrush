<template>
  <div class="col-12 text-center">
    <h6 class="fw-500 display-6">
      Качественная разработка
      <br />приложений
    </h6>
    <p class="pt-2">
      Современные сайты&shy; и веб-приложения
      <abbr
        data-original-title="Single-page application"
        class="initialism"
        title="Single Page Application"
        >SPA</abbr
      >,
      <abbr
        data-original-title="Progressive Web Apps"
        class="initialism"
        title="Progressive Web Applications"
        >PWA</abbr
      >, <br />с адаптивным дизайном и офлайн-доступом
    </p>
    <div v-if="showArrow" class="arrows fixed-bottom">
      <div class="arrow"></div>
      <div class="arrow"></div>
      <div class="arrow"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showArrow: true
    }
  },
  mounted() {
    window.addEventListener('scroll', function (e) {
      if (window.scrollY > 96) {
        this.showArrow = false
      } else {
        this.showArrow = true
      }
    })
  }
}
</script>


<style scoped>
.arrows {
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation-name: arrows;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

@keyframes arrows {
  from {
    margin-bottom: 32px;
  }
  to {
    margin-bottom: 24px;
  }
}

.arrow {
  width: 16px;
  height: 16px;
  opacity: 0;
  margin-top: -4px;
  border-bottom: 2px solid rgba(31, 31, 33, 0.87);
  border-right: 2px solid rgba(31, 31, 33, 0.87);
  transform: rotate(45deg);
  animation-name: arrow;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

@keyframes arrow {
  from {
    opacity: 0;
  }
  to {
    opacity: 0.8;
  }
}
</style>
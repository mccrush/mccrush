<template>
  <div class="col-12 text-center">
    <h6 class="fw-500 margin-64 display-6">
      <span class="text-blue">Качественная </span>
      <span class="text-deep-blue">разработка</span>
      <br /><span class="text-purpur">приложений</span>
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
    <!-- <div class="arrows fixed-bottom" :class="{ 'd-none': showArrow == false }">
      <div class="arrow"></div>
      <div class="arrow"></div>
      <div class="arrow"></div>
    </div> -->
  </div>
</template>

<script>
// export default {
//   data() {
//     return {
//       showArrow: true
//     }
//   },
//   mounted() {
//     window.addEventListener('scroll', function (e) {
//       console.log(window.scrollY)
//       if (window.scrollY > 96) {
//         this.showArrow = false
//         console.log('B this.showArrow = ', this.showArrow)
//       } else {
//         console.log('S this.showArrow = ', this.showArrow)
//         this.showArrow = true
//       }
//     })
//   }
// }
</script>


<style scoped>
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
/* .arrows {
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
} */
</style>
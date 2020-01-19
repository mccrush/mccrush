<template>
  <div class="row justify-content-center">
    <div class="card-group mt-4 mb-4 p-3">
      <div class="card border-0 shadow card-base rounded-top">
        <div class="card-header bg-secondary border-0 rounded-top">
          <h5 class="text-white text-center m-0">Base</h5>
        </div>
        <div class="card-body text-center">
          <h5 class="card-title">Установка Windows</h5>
          <h5>7 или 10</h5>
          <h5>+</h5>
          <h5>Установка драйверов</h5>
          <p class="card-text">звук, видео, сеть</p>
        </div>
        <div class="card-footer bg-secondary border-0">
          <h5 class="text-white text-center m-0">350P</h5>
        </div>
      </div>
      <div class="card border-0 shadow mt-sm-4 card-standart ml-n1 mr-n1 rounded-top">
        <div class="card-header bg-success border-0 rounded-top">
          <h5 class="text-white text-center m-0">Standart</h5>
        </div>
        <div class="card-body text-center">
          <h5 class="bg-secondary text-white p-2 rounded">Пакет Base</h5>
          <h5>+</h5>
          <h5>Microsoft Office</h5>
          <p class="card-text">Word, Excel, PowerPoint</p>
          <h5>+</h5>
          <h5>Установка браузера</h5>
          <p class="card-text">Chrome | Opera | Firefox</p>
        </div>
        <div class="card-footer bg-success mb-sm-n4 border-0 shadow rounded-bottom">
          <h5 class="text-white text-center m-0">500P</h5>
        </div>
      </div>
      <div class="card border-0 shadow card-premium rounded-top">
        <div class="card-header bg-warning border-0 rounded-top">
          <h5 class="text-white text-center m-0">Premium</h5>
        </div>
        <div class="card-body text-center">
          <h5 class="bg-success text-white p-2 rounded">Пакет Standart</h5>
          <h5>+</h5>
          <h5>Ускорение загрузки</h5>
          <h5>+</h5>
          <h5>Гарантия 3 мес.</h5>
        </div>
        <div class="card-footer bg-warning border-0">
          <h5 class="text-white text-center m-0">750P</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "comp",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.card-standart {
  z-index: 1;
}
</style>
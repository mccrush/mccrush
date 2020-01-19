<template>
  <div class="row justify-content-center mt-3">
    <div class="col-12">
      <h2>
        Ремонт компьютеров
        <small>г.&nbsp;Славгород</small>
      </h2>
      <p>Установка операционной системы, удаление вирусов, ускорение загрузки</p>
      <hr />
    </div>
    <div class="card-group mb-0 mb-sm-4 p-3">
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
          <h5 class="text-white text-center m-0">500P</h5>
        </div>
      </div>

      <div class="card border-0 shadow mt-sm-4 card-standart ml-n1 mr-n1 rounded-top">
        <div class="card-header bg-success border-0 rounded-top">
          <h5 class="text-white text-center m-0">Standart</h5>
        </div>
        <div class="card-body text-center">
          <h6 class="border border-secondary p-2 rounded">Пакет Base</h6>
          <h5>+</h5>
          <h5>Установка браузера</h5>
          <p class="card-text">Chrome | Opera | Firefox</p>
          <h5>+</h5>
          <h5>Microsoft Office</h5>
          <p class="card-text">Word, Excel, PowerPoint</p>
        </div>
        <div class="card-footer bg-success mb-sm-n4 border-0 shadow rounded-bottom">
          <h5 class="text-white text-center m-0">750P</h5>
        </div>
      </div>

      <div class="card border-0 shadow card-premium rounded-top">
        <div class="card-header bg-warning border-0 rounded-top">
          <h5 class="text-white text-center m-0">Premium</h5>
        </div>
        <div class="card-body text-center">
          <h6 class="border border-success p-2 rounded">Пакет Standart</h6>
          <h5>+</h5>
          <h5>Настройка ускоренной загрузки системы</h5>
          <h5>+</h5>
          <h5>
            Бесплатное обслуживание
            <br />3 месяца
          </h5>
        </div>
        <div class="card-footer bg-warning border-0">
          <h5 class="text-white text-center m-0">900P</h5>
        </div>
      </div>
    </div>
    <div class="col-12 text-center">
      <h4 class="mt-sm-3">
        <img src="/img/comp/whatsapp64.png" alt="WhatsApp" width="36" height="36" />
        <span>+7 906 940 4069</span>
      </h4>
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
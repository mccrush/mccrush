<template>
  <div class="row mt-4">
    <div class="col-12">
      <div class="row text-center p-5 jimbo">
        <div class="col-12">
          <h6 class="fw-500 display-6">
            Качественная разработка
            <br />приложений
          </h6>
          <p class="description pt-2">
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
        </div>
      </div>
      <!-- <hr /> -->

      <div class="row text-center pb-5">
        <div class="col-12">
          <h5 class="mt-4 mb-4">Предлагаем услуги</h5>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
          <h6 class="box-tech shadow-sm rounded p-3 m-0">
            Разработка веб-сайтов
            <br />и веб-приложений
          </h6>
        </div>
        <div class="col-12 col-sm-6 col-md-4 mt-3 mt-sm-0">
          <h6 class="box-tech shadow-sm rounded p-3 m-0">
            Администри&shy;рование
            <br />веб-сайтов
          </h6>
        </div>
        <div class="col-12 col-md-4 mt-3 mt-md-0">
          <h6 class="box-tech shadow-sm rounded p-3 m-0">
            Поддержка
            <br />веб-приложений
          </h6>
        </div>
      </div>

      <div class="row text-center pb-5">
        <PriceCalc />
      </div>

      <div class="row text-center pb-2">
        <div class="col-12">
          <h5 class="mt-5 mb-4">
            Стоимость услуг администрирования и поддержки
          </h5>
        </div>
        <div class="col-6">
          <h6 class="box-tech shadow-sm rounded p-3 m-0">
            На регулярной основе
            <br />от 7500 р/месяц
          </h6>
        </div>
        <div class="col-6">
          <h6 class="box-tech shadow-sm rounded p-3 m-0">
            Сдельная работа
            <br />от 750 р/час
          </h6>
        </div>
      </div>
    </div>
    <p class="bez-sdel">
      Для «безопасных сделок» используется сервис
      <a
        href="https://kwork.ru/website-development/624937/razrabotka-veb-prilozheniya-spa-pwa?ref=656"
        title="Ссылка на сайт Kwork"
        target="_blank"
        >Kwork</a
      >
    </p>
  </div>
</template>

<script>
import PriceCalc from '@/components/index/PriceCalc'

export default {
  name: 'index',
  components: {
    PriceCalc
  }
}
</script>
<style scoped>
.stec-text {
  text-align: center;
  vertical-align: middle;
}
.box {
  /* border-top: 3px solid rgba(255, 0, 0, 0.5); */
  /* border-bottom: 2px solid white; */
  transition: 0.3s;
}

.box:hover {
  box-shadow: 0 0.5rem 1rem rgba(256, 0, 0, 0.15) !important;
  /* border-top: 3px solid rgba(255, 0, 0, 0.75); */
  /* color: rgba(196, 0, 0, 1); */
}

.row-tech-50 {
  height: 50px;
  margin-top: 0px;
}

.row-tech-100 {
  height: 100px;
  margin-top: 0px;
}

.box-tech {
  cursor: default;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border-top: 3px solid #fff; */
  border-top: 3px solid #673ab7;
  transition: 0.3s;
}

.box-tech:hover {
  box-shadow: 0 0.1rem 0.4rem rgba(0, 0, 0, 0.15) !important;
}

.box-uslugi1 {
  cursor: default;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 2px solid #ea5455 /*rgba(224, 0, 0, 0.55)*/;
  border-right: 2px solid #ea5455 /*rgba(224, 0, 0, 0.55)*/;
  transition: 0.3s;
}

.box-uslugi2 {
  cursor: default;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 2px solid #ea5455 /*rgba(224, 0, 0, 0.55)*/;
  transition: 0.3s;
}

.small,
small {
  font-size: 0.75em;
}

.jimbo {
  /* background: url(../assets/img/insert-backdrop.webp) no-repeat center center; */
  /* background-position: center center;
  background-repeat: no-repeat; */
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.bez-sdel {
  margin-top: 24px;
  margin-bottom: 0px;
  text-align: center;
}

/*
Зеленый для Vue #3BA361
Синий для CSS #3298F0
Фиолетовый для Bootstrap #9732F0
 */
</style>
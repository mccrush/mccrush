<template>
  <div class="row mt-3">
    <vueHeadful
      title="Качественная разработка приложений"
      description="Современные сайты и веб-приложения (SPA, PWA*), с адаптивным дизайном и офлайн-доступом"
    />
    <div class="col-12">
      <div class="row text-center p-5 jimbo">
        <div class="col-12">
          <h6 class="display-6">
            Качественная разработка
            <br />приложений
          </h6>
          <p class="description pt-2">
            Современные сайты&shy; и веб-приложения
            <abbr
              data-original-title="Single-page application"
              class="initialism"
              title="Single Page Application"
            >SPA</abbr>,
            <abbr
              data-original-title="Progressive Web Apps"
              class="initialism"
              title="Progressive Web Applications"
            >PWA</abbr>,
            <br />с адаптивным дизайном и офлайн-доступом
          </p>
        </div>
      </div>
      <!-- <hr /> -->

      <div class="row text-center">
        <div class="col-12">
          <h5 class="mt-3 mb-4">Предлагаем услуги</h5>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
          <h6 class="box-tech shadow-sm rounded p-3 m-0" style="border-top: 3px solid #ea5455;">
            Разработка веб-сайтов
            <br />и веб-приложений
          </h6>
        </div>
        <div class="col-12 col-sm-6 col-md-4 mt-3 mt-sm-0">
          <h6 class="box-tech shadow-sm rounded p-3 m-0" style="border-top: 3px solid #ea5455;">
            Администри&shy;рование
            <br />веб-сайтов
          </h6>
        </div>
        <div class="col-12 col-md-4 mt-3 mt-md-0">
          <h6 class="box-tech shadow-sm rounded p-3 m-0" style="border-top: 3px solid #ea5455;">
            Поддержка
            <br />веб-приложений
          </h6>
        </div>
      </div>

      <div class="row text-center">
        <PriceCalc />
      </div>

      <div class="row text-center">
        <div class="col-12">
          <h5 class="mt-5 mb-4">Стоимость услуг администрирования</h5>
        </div>
        <div class="col-6">
          <h6 class="box-tech shadow-sm rounded p-3 m-0" style="border-top: 3px solid #ea5455;">
            На регулярной основе
            <br />от 7500 р/месяц
          </h6>
        </div>
        <div class="col-6">
          <h6 class="box-tech shadow-sm rounded p-3 m-0" style="border-top: 3px solid #ea5455;">
            Сдельная работа
            <br />от 750 р/час
          </h6>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <h5 class="mb-3 mt-5 text-center">Стек технологий разработки</h5>
          <table class="table table-borderless table-sm" style="width: 100%;" id="imgRow">
            <tbody>
              <tr>
                <td style="width: 26%; text-align: center; vertical-align: middle;">
                  <img
                    src="img/stec/firebase.png"
                    alt="Firebase"
                    width="64"
                    height="64"
                    title="Firebase - это облачная СУБД, позволяющая разработчикам обрабатывать данные"
                    class="lazy"
                  />
                </td>
                <td style="width: 12%; text-align: center; vertical-align: middle;">
                  <img src="img/stec/arr_right_line.png" alt width="32" height="32" class="lazy" />
                </td>
                <td style="width: 25%; text-align: center; vertical-align: middle;">
                  <img
                    src="img/stec/vuejs.png"
                    alt="Vue.js"
                    width="64"
                    height="64"
                    title="Vue.js - это прогрессивный фреймворк для создания пользовательских интерфейсов"
                    class="lazy"
                  />
                </td>
                <td style="width: 12%; text-align: center; vertical-align: middle;">
                  <img src="img/stec/arr_right_line.png" alt width="32" height="32" class="lazy" />
                </td>
                <td style="width: 25%; text-align: center; vertical-align: middle;">
                  <img
                    src="img/stec/bootstrap.png"
                    alt="Bootstrap"
                    width="64"
                    height="64"
                    title="Bootstrap - это HTML- и CSS-шаблоны оформления для типографики, веб-форм, и прочих компонентов веб-интерфейса"
                    class="lazy"
                  />
                </td>
              </tr>
              <tr>
                <td class="stec-text">
                  <h6>Firebase</h6>
                </td>
                <td class="stec-text">&nbsp;</td>
                <td class="stec-text">
                  <h6>Vue.js</h6>
                </td>
                <td class="stec-text">&nbsp;</td>
                <td class="stec-text">
                  <h6>Bootstrap</h6>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vueHeadful from 'vue-headful'
import LazyLoad from 'vanilla-lazyload'
import PriceCalc from '@/components/index/PriceCalc'

export default {
  name: 'home',
  components: {
    vueHeadful,
    PriceCalc,
  },
  mounted() {
    const lazyContent = new LazyLoad({
      elements_selector: 'img.lazy',
      use_native: true, // <-- there you go
      threshold: 150,
      container: document.getElementById('imgRow'),
    })
  },
}
</script>
<style scoped>
.stec-text {
  color: #212529;
  text-align: center;
  vertical-align: middle;
}
.box {
  color: #212529;
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
  /* border-top: 2px solid rgba(224, 0, 0, 0.55); */
  /* border: 1px solid grey; */
  transition: 0.3s;
}

.box-tech:hover {
  box-shadow: 0 0.1rem 0.4rem rgba(0, 0, 0, 0.15) !important;
  /* border: solid 1px rgba(255, 0, 0, 0.5); */
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
  background: url(../assets/img/insert-backdrop.webp) no-repeat center center;
  /* background-position: center center;
  background-repeat: no-repeat; */
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
/*
Зеленый для Vue #3BA361
Синий для CSS #3298F0
Фиолетовый для Bootstrap #9732F0
 */
</style>
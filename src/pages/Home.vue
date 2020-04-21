<template>
  <div class="row mt-3">
    <vueHeadful title="Качественная разработка приложений" description="Современные сайты и веб-приложения (SPA, PWA*), с адаптивным дизайном и офлайн-доступом" />
    <div class="col-12">
      <h3>Качественная разработка приложений</h3>
      <p class="description">
        Современные сайты и веб-приложения (
        <abbr data-original-title="Single-page application" class="initialism" data-toggle="tooltip" data-placement="bottom">SPA</abbr>,
        <abbr data-original-title="Progressive Web Apps" class="initialism" data-toggle="tooltip" data-placement="bottom">PWA</abbr>), с адаптивным дизайном и офлайн-доступом
      </p>
      <hr />

      <h5 class="mb-3 text-center">Стек технологий</h5>
      <table class="table table-borderless table-sm" style="width: 100%;">
        <tbody>
          <tr>
            <td style="width: 26%; text-align: center; vertical-align: middle;">
              <img src="img/stec/firebase.png" alt="Firebase" width="64" height="64" data-toggle="tooltip" data-placement="bottom" data-original-title="Firebase - это облачная СУБД, позволяющая разработчикам обрабатывать данные" />
            </td>
            <td style="width: 12%; text-align: center; vertical-align: middle;">
              <img src="img/stec/arr_right_line.png" alt width="32" height="32" />
            </td>
            <td style="width: 25%; text-align: center; vertical-align: middle;">
              <img src="img/stec/vuejs.png" alt="Vue.js" width="64" height="64" data-toggle="tooltip" data-placement="bottom" data-original-title="Vue.js - это прогрессивный фреймворк для создания пользовательских интерфейсов" />
            </td>
            <td style="width: 12%; text-align: center; vertical-align: middle;">
              <img src="img/stec/arr_right_line.png" alt width="32" height="32" />
            </td>
            <td style="width: 25%; text-align: center; vertical-align: middle;">
              <img src="img/stec/bootstrap3.png" alt="Bootstrap" width="64" height="64" data-toggle="tooltip" data-placement="bottom" data-original-title="Bootstrap - это HTML- и CSS-шаблоны оформления для типографики, веб-форм, и прочих компонентов веб-интерфейса" />
            </td>
          </tr>
          <tr>
            <td class="stec-text">
              <strong>Firebase</strong>
            </td>
            <td class="stec-text">&nbsp;</td>
            <td class="stec-text">
              <strong>Vue.js</strong>
            </td>
            <td class="stec-text">&nbsp;</td>
            <td class="stec-text">
              <strong>Bootstrap</strong>
            </td>
          </tr>
        </tbody>
      </table>
      <h5 class="mt-5 mb-3 text-center">Структура технологий</h5>
      <div class="row m-0">
        <div class="col-12">
          <div class="row row-tech-50">
            <div class="col-12 shadow-sm rounded-sm box-tech">PWA</div>
          </div>
          <div class="row">
            <div class="col-4 shadow-sm rounded-sm box-tech">Bootstrap</div>
            <div class="col-4">
              <div class="row row-tech-50">
                <div class="col-12 shadow-sm rounded-sm box-tech">Vue.js</div>
              </div>
              <div class="row row-tech-50">
                <div class="col-6 shadow-sm rounded-sm box-tech">Vuex</div>
                <div class="col-6 shadow-sm rounded-sm box-tech">Router</div>
              </div>
            </div>
            <div class="col-4">
              <div class="row row-tech-50">
                <div class="col-12 shadow-sm rounded-sm box-tech">Firebase</div>
              </div>
              <div class="row">
                <div class="col-6">
                  <div class="row row-tech-50">
                    <div class="col-12 shadow-sm rounded-sm small box-tech">Authentication</div>
                    <div class="col-12 shadow-sm rounded-sm small box-tech">Cloud Storege</div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="row row-tech-50">
                    <div class="col-12 shadow-sm rounded-sm small box-tech">Cloud Firestore</div>
                    <div class="col-12 shadow-sm rounded-sm small box-tech">Hosting</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row row-tech-50">
            <div class="col-2 shadow-sm rounded-sm box-tech">HTML</div>
            <div class="col-2 shadow-sm rounded-sm box-tech">CSS</div>
            <div class="col-8 shadow-sm rounded-sm box-tech">JavaScript</div>
          </div>
        </div>
      </div>
      <hr />
      <h5 class="mb-3 text-center">Разделы сайта</h5>
      <div class="row mr-0 ml-0">
        <router-link class="col-12 col-sm-4 shadow-sm rounded box text-decoration-none text-center pt-4" to="/app">
          <img src="img/home/icons_box/app.png" width="56" height="56" alt="Приложения" />
          <p>Приложения</p>
        </router-link>
        <router-link class="col-6 col-sm-4 shadow-sm rounded box text-decoration-none text-center pt-4" to="/gtd">
          <img src="img/home/icons_box/gtd.png" width="56" height="56" alt="GTD" />
          <p>GTD</p>
        </router-link>
        <router-link class="col-6 col-sm-4 shadow-sm rounded box text-decoration-none text-center pt-4" to="/dev">
          <img src="img/home/icons_box/dev.png" width="56" height="56" alt="Разработка" />
          <p>Разработка</p>
        </router-link>
        <!-- <router-link class="col-6 col-sm-3 shadow-sm rounded box text-decoration-none text-center pt-4" to="/comp">
          <img src="img/home/icons_box/comp.png" width="56" height="56" alt="Ремонт" />
          <p>Ремонт</p>
        </router-link>-->
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import vueHeadful from "vue-headful";
import $ from "jquery";

export default {
  name: "home",
  components: {
    vueHeadful
  },
  data() {
    return {};
  },
  created() {
    $(function() {
      $('[data-toggle="tooltip"]').tooltip();
    });
  },
  methods: {},
  watch: {}
};
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
  margin-top: 4px;
}

.row-tech-100 {
  height: 100px;
  margin-top: 4px;
}

.box-tech {
  cursor: default;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 2px solid rgba(224, 0, 0, 0.55);
  transition: 0.3s;
}

.box-tech:hover {
  box-shadow: 0 0.3rem 0.7rem rgba(256, 0, 0, 0.15) !important;
  /* border: solid 1px rgba(255, 0, 0, 0.5); */
}
</style>
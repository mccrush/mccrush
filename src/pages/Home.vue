<template>
  <div class="row mt-3">
    <vueHeadful title="Качественная разработка приложений" description="Современные сайты и веб-приложения (SPA, PWA*), с адаптивным дизайном и офлайн-доступом" />
    <div class="col-12">
      <h2>Качественная разработка приложений</h2>
      <p class="description">Современные сайты и веб-приложения (SPA, PWA*), с адаптивным дизайном и офлайн-доступом</p>
      <hr />

      <h5 style="text-align: center;">Стек технологий</h5>
      <table class="table table-borderless table-sm mt-3" style="width: 100%;">
        <tbody>
          <tr>
            <td style="width: 26%; text-align: center; vertical-align: middle;">
              <img title src="img/stec/firebase.png" alt="Firebase" width="64" height="64" data-toggle="tooltip" data-placement="bottom" data-original-title="Firebase - это облачная СУБД, позволяющая разработчикам обрабатывать данные" />
            </td>
            <td style="width: 12%; text-align: center; vertical-align: middle;">
              <img src="img/stec/arr_right.png" alt width="32" height="32" />
            </td>
            <td style="width: 25%; text-align: center; vertical-align: middle;">
              <img title src="img/stec/vuejs.png" alt="Vue.js" width="64" height="64" data-toggle="tooltip" data-placement="bottom" data-original-title="Vue.js - это прогрессивный фреймворк для создания пользовательских интерфейсов" />
            </td>
            <td style="width: 12%; text-align: center; vertical-align: middle;">
              <img src="img/stec/arr_right.png" alt width="32" height="32" />
            </td>
            <td style="width: 25%; text-align: center; vertical-align: middle;">
              <img title src="img/stec/bootstrap.png" alt="Bootstrap" width="64" height="64" data-toggle="tooltip" data-placement="bottom" data-original-title="Bootstrap - это HTML- и CSS-шаблоны оформления для типографики, веб-форм, и прочих компонентов веб-интерфейса" />
            </td>
          </tr>
          <tr>
            <td style="text-align: center; vertical-align: middle;">
              <strong>Firebase</strong>
            </td>
            <td style="text-align: center; vertical-align: middle;">&nbsp;</td>
            <td style="text-align: center; vertical-align: middle;">
              <strong>Vue.js</strong>
            </td>
            <td style="text-align: center; vertical-align: middle;">&nbsp;</td>
            <td style="text-align: center; vertical-align: middle;">
              <strong>Bootstrap</strong>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="row">
        <div class="col">
          <h4>&nbsp;</h4>
        </div>
      </div>
      <hr />
      <p class="small">
        * SPA -
        <a href="https://www.wikiwand.com/en/Single-page_application" target="_blank" rel="noopener">Single-page application</a>
        <br />PWA -
        <a href="https://developers.google.com/web/progressive-web-apps/" target="_blank" rel="noopener">Progressive Web Apps</a>
      </p>
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
<style>
</style>
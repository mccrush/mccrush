<template>
  <div class="row mt-3">
    <vueHeadful title="GTD" description="Данный раздел посвящен методикам организации повседневной деятельности, инструментам и способам поддержания своих дел в полном порядке" />
    <div class="col-12">
      <h3>GTD</h3>
      <p class="description">Данный раздел посвящен методикам организации повседневной деятельности, инструментам и способам поддержания своих дел в полном порядке</p>
      <hr />

      <h5>Ссылки на полезные сервисы</h5>
      <div class="row mr-0 ml-0 mt-3">
        <div class="col-12 col-sm-4 text-decoration-none text-center p-0" data-toggle="tooltip" data-placement="bottom" data-original-title="Сохраняйте и делитесь заметками где угодно">
          <div class="row m-0 mr-0 mr-sm-2">
            <div class="col p-0 pt-4 shadow-sm rounded box evernote">
              <img src="img/gtd/icons_gtd/evernote.png" width="56" height="56" alt="Evernote" class="mb-4" />
              <a class="d-block p-3 rounded-bottom" href="https://evernote.com/intl/ru/" target="_blank">Evernote</a>
            </div>
          </div>
        </div>
        <div class="col-6 col-sm-4 text-decoration-none text-center p-0" data-toggle="tooltip" data-placement="bottom" data-original-title="Веб-приложение для управления проектами">
          <div class="row m-0 mt-3 mt-sm-0 ml-0 ml-sm-2 mr-2">
            <div class="col p-0 pt-4 shadow-sm rounded box trello">
              <img src="img/gtd/icons_gtd/trellow.png" width="56" height="56" alt="Trello" class="mb-4" />
              <a class="d-block p-3 rounded-bottom" href="https://trello.com/mccrush/recommend" target="_blank">Trello</a>
            </div>
          </div>
        </div>
        <div class="col-6 col-sm-4 text-decoration-none text-center p-0" data-toggle="tooltip" data-placement="bottom" data-original-title="Современный инструмент для визуализации процессов, алгоритмов и сложных систем">
          <div class="row m-0 mt-3 mt-sm-0 ml-2">
            <div class="col p-0 pt-4 shadow-sm rounded box flow">
              <img src="img/gtd/icons_gtd/flow.png" width="56" height="56" alt="Knowflow" class="mb-4" />
              <a class="d-block p-3 rounded-bottom" href="https://www.knowflow.io/about" target="_blank">Knowflow</a>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <h5 class="mt-4">Список книг, которые помогут разобраться в делах</h5>
      <table class="table table-bordered table-hover mt-3">
        <tbody>
          <tr class="warning">
            <td align="center" width="5%">1</td>
            <td width="35%">
              <strong>Дэвид Аллен</strong>
              <br />
              <a class="mctbln" title="Как привести дела в порядок" href="http://www.ozon.ru/context/detail/id/138561487/?partner=mccrush" target="_blank" rel="noopener">Как привести дела в порядок</a>
            </td>
            <td>Пожалуй, лучшая книга в своем роде. Автор подробно рассказывает об эффективных методах организации ежедневных задач.</td>
          </tr>
          <tr>
            <td align="center" width="5%">2</td>
            <td width="35%">
              <strong>Стивен Кови</strong>
              <br />
              <a class="mctbln" title="Семь навыков высокоэффективных людей" href="http://www.ozon.ru/context/detail/id/6974309/?partner=mccrush" target="_blank" rel="noopener">Семь навыков высокоэффективных людей</a>
            </td>
            <td>Об этой книге, думаю, слышали многие. Такие простые, но такие эффективные рекомендации, которые помогут наладить свои дела в любых сферах деятельности.</td>
          </tr>
          <tr>
            <td align="center" width="5%">3</td>
            <td width="35%">
              <strong>Элияху Голдратт</strong>
              <br />
              <a class="mctbln" title="Цель. Процесс непрерывного совершенствования" href="http://www.ozon.ru/context/detail/id/26994615/?partner=mccrush" target="_blank" rel="noopener">Цель. Процесс непрерывного совершенствования</a>
            </td>
            <td>Это классика. Понимание описанного метода действий, позволит любой процесс сделать максимально эффективным.</td>
          </tr>
          <tr>
            <td align="center" width="5%">4</td>
            <td width="35%">
              <strong>Тимоти Феррис</strong>
              <br />
              <a class="mctbln" title="Как работать по 4 часа в неделю и при этом не торчать в офисе" href="http://www.ozon.ru/context/detail/id/5474657/?partner=mccrush" target="_blank" rel="noopener">Как работать по 4 часа в неделю</a>
            </td>
            <td>В данной книге описаны современные инструменты ведения дел. Мир не стоит на месте, появляются все новые и новые методы решения повседневных проблем. Читайте, и учитесь новому.</td>
          </tr>
        </tbody>
      </table>
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

a {
  color: #0056b3;
  text-decoration: none;
}

a:hover {
  color: #0056b3;
  text-decoration: underline;
}

.box {
  color: #212529;
  /* border-top: 3px solid rgba(255, 0, 0, 0.5); */
  /* border-bottom: 2px solid white; */
  transition: 0.5s;
}
.box:hover {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  /* border-top: 3px solid rgba(255, 0, 0, 0.75); */
  /* color: rgba(196, 0, 0, 1); */
}

.box a {
  color: #fff;
  text-decoration: none;
  -webkit-backdrop-filter: opacity(0.8);
  backdrop-filter: opacity(0.8);
  /* transition: 0.5s; */
}

.box a:hover {
  /* backdrop-filter: blur(6px); */
  -webkit-backdrop-filter: opacity(0.7);
  backdrop-filter: opacity(0.7);
}

.evernote {
  background: #2d4059 /*#00cc5f*/;
  /* background: url(/img/gtd/icons_gtd/bg_evernote.jpg) center top no-repeat; */
}

.trello {
  background: #2d4059 /*#0079bf*/;
  /* background: url(/img/gtd/icons_gtd/bg_trello.jpg) center top no-repeat;
  background-size: cover; */
}

.flow {
  background: #2d4059 /*#380acc*/;
  /* background: url(/img/gtd/icons_gtd/bg_flow.jpg) center top no-repeat; */
}
</style>
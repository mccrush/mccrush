<template>
  <div class="row mt-3">
    <vueHeadful
      title="GTD"
      description="Данный раздел посвящен методикам организации повседневной деятельности, инструментам и способам поддержания своих дел в полном порядке"
    />
    <div class="col-12">
      <h3>GTD</h3>
      <p
        class="description"
      >Данный раздел посвящен методикам организации повседневной деятельности, инструментам и способам поддержания своих дел в полном порядке</p>
      <hr />

      <h5 class="mb-3">Ссылки на полезные сервисы</h5>
      <div class="row row-cols-1 row-cols-sm-3 g-4">
        <div class="col">
          <div class="card border-0 shadow h-100">
            <img
              src="img/gtd/icons_gtd/evernote.jpg"
              height="134"
              alt="Evernote"
              class="card-img-top"
            />
            <div class="card-body">
              <h6 class="card-title">Evernote</h6>
              <p class="card-text small">Сохраняйте и делитесь заметками где угодно</p>
            </div>
            <div class="card-footer pt-0 pb-3 bg-white border-0">
              <a
                class="btn btn-sm btn-block btn-primary stretched-link"
                href="https://evernote.com/intl/ru/"
                target="_blank"
              >Перейти</a>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card border-0 shadow h-100">
            <img src="img/gtd/icons_gtd/trello.jpg" height="134" alt="Trello" class="card-img-top" />
            <div class="card-body">
              <h6 class="card-title">Trello</h6>
              <p class="card-text small">Веб-приложение для управления проектами</p>
            </div>
            <div class="card-footer pt-0 pb-3 bg-white border-0">
              <a
                class="btn btn-sm btn-block btn-primary stretched-link"
                href="https://trello.com/mccrush/recommend"
                target="_blank"
              >Перейти</a>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card border-0 shadow h-100">
            <img
              src="img/gtd/icons_gtd/knowflow.jpg"
              height="134"
              alt="Knowflow"
              class="card-img-top"
            />
            <div class="card-body">
              <h6 class="card-title">Knowflow</h6>
              <p
                class="card-text small"
              >Современный инструмент для визуализации процессов, алгоритмов и сложных систем</p>
            </div>
            <div class="card-footer pt-0 pb-3 bg-white border-0">
              <a
                class="btn btn-sm btn-block btn-primary stretched-link"
                href="https://www.knowflow.io/about"
                target="_blank"
              >Перейти</a>
            </div>
          </div>
        </div>
      </div>

      <h5 class="mt-5">Список книг, которые помогут разобраться в делах</h5>
      <table class="table table-bordered table-hover mt-3">
        <tbody>
          <tr class="warning">
            <td align="center" width="5%">1</td>
            <td width="35%">
              <h6 class="d-inline">Дэвид Аллен</h6>
              <br />
              <a
                class="mctbln"
                title="Как привести дела в порядок"
                href="http://www.ozon.ru/context/detail/id/138561487/?partner=mccrush"
                target="_blank"
                rel="noopener"
              >Как привести дела в порядок</a>
            </td>
            <td>Пожалуй, лучшая книга в своем роде. Автор подробно рассказывает об эффективных методах организации ежедневных задач.</td>
          </tr>
          <tr>
            <td align="center" width="5%">2</td>
            <td width="35%">
              <h6 class="d-inline">Стивен Кови</h6>
              <br />
              <a
                class="mctbln"
                title="Семь навыков высокоэффективных людей"
                href="http://www.ozon.ru/context/detail/id/6974309/?partner=mccrush"
                target="_blank"
                rel="noopener"
              >Семь навыков высокоэффективных людей</a>
            </td>
            <td>Об этой книге, думаю, слышали многие. Такие простые, но такие эффективные рекомендации, которые помогут наладить свои дела в любых сферах деятельности.</td>
          </tr>
          <tr>
            <td align="center" width="5%">3</td>
            <td width="35%">
              <h6 class="d-inline">Элияху Голдратт</h6>
              <br />
              <a
                class="mctbln"
                title="Цель. Процесс непрерывного совершенствования"
                href="http://www.ozon.ru/context/detail/id/26994615/?partner=mccrush"
                target="_blank"
                rel="noopener"
              >Цель. Процесс непрерывного совершенствования</a>
            </td>
            <td>Это классика. Понимание описанного метода действий, позволит любой процесс сделать максимально эффективным.</td>
          </tr>
          <tr>
            <td align="center" width="5%">4</td>
            <td width="35%">
              <h6 class="d-inline">Тимоти Феррис</h6>
              <br />
              <a
                class="mctbln"
                title="Как работать по 4 часа в неделю и при этом не торчать в офисе"
                href="http://www.ozon.ru/context/detail/id/5474657/?partner=mccrush"
                target="_blank"
                rel="noopener"
              >Как работать по 4 часа в неделю</a>
            </td>
            <td>В данной книге описаны современные инструменты ведения дел. Мир не стоит на месте, появляются все новые и новые методы решения повседневных проблем. Читайте, и учитесь новому.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import vueHeadful from 'vue-headful'

export default {
  name: 'home',
  components: {
    vueHeadful,
  },
}
</script>
<style scoped>
.card {
  transition: 0.3s;
  top: 0px;
}

.card:hover {
  top: -5px;
}

img.card-img-top {
  object-fit: cover;
}
</style>
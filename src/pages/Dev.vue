<template>
  <div class="row mt-3">
    <vueHeadful title="Веб-разработка" description="Списки полезных ссылок по категориям. Данные источники будут интересны не только веб-разработчикам, но и тем, кто желает расширить свой кругозор" />
    <div class="col-12">
      <h3>Веб-разработка</h3>
      <p>Списки полезных ссылок по категориям. Данные источники будут интересны не только веб-разработчикам, но и тем, кто желает расширить свой кругозор</p>
      <hr />
    </div>

    <div class="row pl-3 pr-3">
      <div class="col-12 col-sm-6 mb-3">
        <ul class="list-group">
          <a class="list-group-item list-group-item-action bg-light disabled" href="#">
            <h5 class="m-0">Онлайн учебники</h5>
          </a>

          <a class="list-group-item list-group-item-action" href="https://learn.javascript.ru/" target="_blank" title="Открыть сайт">Учебник Javascript</a>

          <a class="list-group-item list-group-item-action" href="https://github.com/azat-io/you-dont-know-js-ru" target="_blank" title="Открыть сайт">"Вы не знаете JS"</a>
        </ul>
      </div>

      <div class="col-12 col-sm-6 mb-3">
        <ul class="list-group">
          <a class="list-group-item list-group-item-action bg-light disabled" href="#">
            <h5 class="m-0">Списки книг</h5>
          </a>

          <a class="list-group-item list-group-item-action" title="Открыть сайт" href="https://ru.hexlet.io/pages/recommended-books/?ref=107231" target="_blank">Список hexlet.io</a>

          <a class="list-group-item list-group-item-action" title="Открыть сайт" href="https://learn.javascript.ru/books" target="_blank">Список learn.javascript.ru</a>

          <a class="list-group-item list-group-item-action" title="Открыть сайт" href="https://stackoverflow.com/questions/1711/what-is-the-single-most-influential-book-every-programmer-should-read" target="_blank">Список stackoverflow.com (en)</a>
        </ul>
      </div>

      <div class="col-12 col-sm-6 mb-3">
        <ul class="list-group">
          <a class="list-group-item list-group-item-action bg-light disabled" href="#">
            <h5 class="m-0">Онлайн курсы</h5>
          </a>

          <a class="list-group-item list-group-item-action" href="https://ru.hexlet.io/?ref=107231" target="_blank" title="Открыть сайт">hexlet.io</a>

          <a class="list-group-item list-group-item-action" href="https://www.codecademy.com/learn" target="_blank" title="Открыть сайт">codecademy.com (en)</a>
        </ul>
      </div>

      <div class="col-12 col-sm-6 mb-3">
        <ul class="list-group">
          <a class="list-group-item list-group-item-action bg-light disabled" href="#">
            <h5 class="m-0">YouTube каналы</h5>
          </a>

          <a class="list-group-item list-group-item-action" href="https://www.youtube.com/channel/UCg8ss4xW9jASrqWGP30jXiw/playlists" target="_blank" title="Открыть сайт">Владилен Минин</a>

          <a class="list-group-item list-group-item-action" href="https://www.youtube.com/user/ArtSorax/playlists" target="_blank" title="Открыть сайт">Sorax</a>

          <a class="list-group-item list-group-item-action" href="https://www.youtube.com/user/iliakan/playlists" target="_blank" title="Открыть сайт">JavaScript.ru</a>

          <a class="list-group-item list-group-item-action" href="https://www.youtube.com/user/agragregra/playlists" target="_blank" title="Открыть сайт">WebDesign Master</a>
        </ul>
      </div>
    </div>

    <div class="col-12">
      <hr />
      <h5>Цикл видео о сетевых технологиях от Дмитрия Бачило</h5>
      <p>
        Сайт:
        <a title="Перейти на сайт" href="http://16-bits.ru/myvideo/nettech/" target="_blank">16-bits.ru/myvideo/nettech/</a>
      </p>

      <hr />
      <p>
        Список ресурсов по веб-разработке на
        <a href="https://github.com/andrew--r/channels" target="_blank">GitHub</a>
      </p>
    </div>
  </div>
</template>

<script>
import vueHeadful from "vue-headful";

export default {
  name: "dev",
  components: {
    vueHeadful
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
</style>
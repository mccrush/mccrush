<template>
  <div class="row mt-3">
    <vueHeadful title="Разработка" description="Ссылки на качественные материалы по веб-разработке. Данная информация бедет полезна не только веб-разработчикам, но и тем, кто желает расширить свой кругозор" />
    <div class="col-12">
      <h3>Разработка</h3>
      <p>Ссылки на качественные материалы по веб-разработке. Данная информация бедет полезна не только веб-разработчикам, но и тем, кто желает расширить свой кругозор</p>
      <hr />
    </div>

    <div class="row pl-3 pr-3">
      <div class="col-12 col-sm-6 mb-4">
        <div class="card shadow-sm">
          <div class="card-body">
            <h5 class="card-title">Онлайн учебники</h5>
            <ul class="pl-4 mb-1">
              <li>
                <a href="https://learn.javascript.ru/" target="_blank" title="Открыть сайт">Учебник Javascript</a>
              </li>
              <li>
                <a href="https://github.com/azat-io/you-dont-know-js-ru" target="_blank" title="Открыть сайт">"Вы не знаете JS"</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="col-12 col-sm-6 mb-4">
        <div class="card shadow-sm">
          <div class="card-body">
            <h5 class="card-title">Списки книг</h5>
            <ul class="pl-4 mb-1">
              <li>
                <a title="Открыть сайт" href="https://ru.hexlet.io/pages/recommended-books/?ref=107231" target="_blank">Список hexlet.io</a>
              </li>
              <li>
                <a title="Открыть сайт" href="https://learn.javascript.ru/books" target="_blank">Список learn.javascript.ru</a>
              </li>
              <li>
                <a title="Открыть сайт" href="https://stackoverflow.com/questions/1711/what-is-the-single-most-influential-book-every-programmer-should-read" target="_blank">stackoverflow.com (en)</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="col-12 col-sm-6 mb-4">
        <div class="card shadow-sm">
          <div class="card-body">
            <h5 class="card-title">Онлайн курсы</h5>
            <ul class="pl-4 mb-1">
              <li>
                <a href="https://ru.hexlet.io/?ref=107231" target="_blank" title="Открыть сайт">hexlet.io</a>
              </li>
              <li>
                <a href="https://www.codecademy.com/learn" target="_blank" title="Открыть сайт">codecademy.com (en)</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="col-12 col-sm-6 mb-4">
        <div class="card shadow-sm">
          <div class="card-body">
            <h5 class="card-title">YouTube каналы</h5>
            <ul class="pl-4 mb-1">
              <li>
                <a href="https://www.youtube.com/channel/UCg8ss4xW9jASrqWGP30jXiw/playlists" target="_blank" title="Открыть сайт">Владилен Минин</a>
              </li>
              <li>
                <a href="https://www.youtube.com/user/ArtSorax/playlists" target="_blank" title="Открыть сайт">Sorax</a>
              </li>
              <li>
                <a href="https://www.youtube.com/user/iliakan/playlists" target="_blank" title="Открыть сайт">JavaScript.ru</a>
              </li>
              <li>
                <a href="https://www.youtube.com/user/agragregra/playlists" target="_blank" title="Открыть сайт">WebDesign Master</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="col-12">
      <h5>Цикл видео о сетевых технологиях от Дмитрия Бачило</h5>
      <p>
        Сайт:
        <a title="Перейти на сайт" href="http://16-bits.ru/myvideo/nettech/" target="_blank">16-bits.ru/myvideo/nettech/</a>
      </p>

      <h5>Список YouTube каналов от Андрея Романова</h5>
      <p>
        Сайт: страница на
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
  }
};
</script>

<style scoped>
.card {
  border: none;
  border-top: 3px solid rgba(224, 0, 0, 0.75);
}

ul {
  list-style-type: circle;
}

a {
  color: #0056b3;
  text-decoration: none;
}

a:hover {
  color: #0056b3;
  text-decoration: underline;
}
</style>
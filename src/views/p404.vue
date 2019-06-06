<template>
  <div class="row mt-3">
    <div class="col-12">
      <h2 class="text-center">Упс! Страница не найдена</h2>
      <h2 class="text-center">Ошибка 404</h2>
      <p class="description">
        Вернуться на
        <router-link to="/home">главную</router-link>
      </p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "p404"
};
</script>

<template>
  <div class="row mt-3">
    <div class="col-12">
      <h2 class="text-center">Упс! Страница не найдена</h2>
      <h3 class="text-center">Ошибка 404</h3>
      <p class="text-center">
        Вернуться на
        <router-link to="/">главную</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
}
</script>

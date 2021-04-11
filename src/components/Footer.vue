<template>
  <footer class="col-12 border-top text-center pt-3">
    <p class="small">
      &copy; {{ new Date().getFullYear() }} mccrush.ru&nbsp;&nbsp;
      <small>|</small>&nbsp;&nbsp;
      <span class="cursor-point" @click="email = 'mccrush@mail.ru'">{{
        email
      }}</span>
    </p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      email: 'Показать email'
    }
  }
}
</script>

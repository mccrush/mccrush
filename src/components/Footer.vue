<template>
  <footer class="col-12 text-center text-white pt-2 pb-2">
    <p class="small m-0">
      <small>&copy; 2010-{{ new Date().getFullYear() }} mccrush.ru</small
      >&nbsp;&nbsp; <small>|</small>&nbsp;&nbsp;
      <span class="cursor-point" @click="email = 'mccrush@mail.ru'"
        ><small>{{ email }}</small></span
      >
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

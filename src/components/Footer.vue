<template>
  <footer class="footer row mt-0 pt-3">
    <div class="col-12 text-center">
      <hr />
      <p>
        &copy; {{ new Date().getFullYear() }} mccrush.ru&nbsp;&nbsp;
        <!-- <small>|</small>&nbsp;&nbsp; -->
        <!-- <br />
        <span class="small" title="Текущая версия сайта">Версия сайта: v2.4.6</span>-->
        <small>|</small>&nbsp;&nbsp;
        <span class="small showem" @click="showEmail">{{ email }}</span>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      email: 'Показать email'
    }
  },
  methods: {
    showEmail() {
      this.email = 'mccrush@mail.ru'
    }
  }
}
</script>


<style scoped>
.footer {
  font-size: 0.9rem;
}

.showem {
  cursor: pointer;
}
</style>

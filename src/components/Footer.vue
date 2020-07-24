<template>
  <footer class="row footer border-top mt-3 pt-3">
    <div class="col-12 text-center">
      <p>
        &copy; {{new Date().getFullYear()}} mccrush.ru&nbsp;&nbsp;
        <!-- <small>|</small>&nbsp;&nbsp; -->
        <!-- <br />
        <span class="small" title="Текущая версия сайта">Версия сайта: v2.4.6</span>-->
        <small>|</small>&nbsp;&nbsp;
        <span class="small showem" @click="showEmail">{{email}}</span>
      </p>
    </div>
    <!-- <div class="col-6">
      <p class="small">
        Страницы сайта:
        <br />
        <span v-if="$route.path != '/home'">
          <router-link to="/" tag="a">Главная</router-link>
          <br />
        </span>
        <router-link to="/app" tag="a">Приложения</router-link>
        <br />
        <router-link to="/dev" tag="a">Разработка</router-link>
        <br />
        <router-link to="/gtd" tag="a">GTD</router-link>
      </p>
    </div>-->
  </footer>
</template>

<script>
export default {
  data() {
    return {
      email: 'Показать email',
    }
  },
  methods: {
    showEmail() {
      this.email = 'mccrush2027@gmail.com'
    },
  },
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

<template>
  <div class="row">
    <div class="col">
      <footer class="footer border-top mt-3 pt-2">
        <p>
          &copy; {{tecYear}} mccrush.ru&nbsp;&nbsp;
          <small>|</small>&nbsp;&nbsp;
          v2.3.0
          <small>|</small>&nbsp;&nbsp;
          <!-- <a href="https://github.com/mccrush/mccrush/releases" target="_blank">v2.0.1</a>&nbsp;
          <small class="text-muted">от 06.06.2019</small>&nbsp;&nbsp; 
          <small>|</small>&nbsp;&nbsp;-->
          <span class="showem" @click="showEmail">{{email}}</span>
        </p>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "foot",
  data() {
    return {
      tecYear: "",
      email: "Показать email"
    };
  },
  created() {
    this.tecYear = new Date().getFullYear();
  },
  methods: {
    showEmail() {
      this.email = "mccrush2027@gmail.com";
    }
  }
};
</script>


<style scoped>
.footer {
  font-size: 0.9rem;
}

.showem {
  cursor: pointer;
}
</style>

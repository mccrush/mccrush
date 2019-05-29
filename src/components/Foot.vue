<template>
  <div class="row">
    <div class="col">
      <footer class="footer border-top mt-3 pt-2">
        <p>mccrush.ru &copy; {{tecYear}}</p>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "foot",
  data() {
    return {
      tecYear: ""
    };
  },
  created() {
    this.tecYear = new Date().getFullYear();
  }
};
</script>


<style scoped>
.footer {
  font-size: 0.9rem;
}
</style>

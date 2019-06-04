<template>
  <div class="card shadow-sm">
    <div class="card-body">
      <h5 class="card-title">{{item.title}}</h5>
      <p class="card-text">
        Тип: {{item.alias}}
        <br>Доступно:
        <a :href="item.link" target="_blank">перейти</a>
        <br>Github:
        <a :href="item.github" target="_blank">{{item.github}}</a>
      </p>
      <p class="card-text">{{item.description}}</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Обновлено: {{fullDate}}</small>
    </div>
  </div>
</template>
<script>
export default {
  name: "cardapp",
  props: {
    item: Object
  },
  computed: {
    fullDate() {
      let time = new Date(this.item.dateUpdate.seconds * 1000);
      let dd = time.getDate() < 10 ? "0" + time.getDate() : time.getDate();
      let mm =
        time.getMonth() + 1 < 10
          ? "0" + (time.getMonth() + 1)
          : time.getMonth() + 1;
      let yyyy = time.getFullYear();
      return dd + "." + mm + "." + yyyy;
    }
  }
};
</script>
<style scoped>
.card {
  border: none;
  border-top: 4px solid red;
}
</style>

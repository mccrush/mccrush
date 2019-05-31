<template>
  <div class="row">
    <div class="col">tecData {{createFullDate()}}</div>
  </div>
</template>

<script>
export default {
  name: "adminFormPage",
  data() {
    return {
      dateNow: new Date(),
      formDate: "",
      email: "Показать email"
    };
  },
  created() {
    //this.tecYear = new Date().getFullYear();
  },
  methods: {
    createFullDate() {
      let dd =
        this.dateNow.getDate() < 10
          ? "0" + this.dateNow.getDate()
          : this.dateNow.getDate();
      let mm =
        this.dateNow.getMonth() + 1 < 10
          ? "0" + (this.dateNow.getMonth() + 1)
          : this.dateNow.getMonth() + 1;
      let yyyy = this.dateNow.getFullYear();
      return (this.dateNow = dd + "." + mm + "." + yyyy);
    },
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

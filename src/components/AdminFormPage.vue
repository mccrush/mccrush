<template>
  <div class="row">
    <div class="col">
      <form>
        <div class="form-group">
          <label for="itemTitle">Заголовок страницы</label>
          <input type="text" class="form-control" id="itemTitle" aria-describedby="titleHelp" placeholder="Введите заголовок страницы" maxlength="20" v-model="itemObj.title" @focus="editingForm()" @blur="saveForm()">
          <small id="titleHelp" class="form-text text-muted">Длина не более 20 символов</small>
        </div>
        <div class="form-group">
          <label for="itemDescription">Описание страницы</label>
          <textarea class="form-control" id="itemDescription" aria-describedby="descriptionHelp" placeholder="Введите краткое описание страницы" rows="3" v-model="itemObj.description" @focus="editingForm()" @blur="saveForm()"></textarea>
          <small id="descriptionHelp" class="form-text text-muted">Лучше - короче</small>
        </div>
        <div class="form-group">
          <label for="itemContent">Контент страницы</label>
          <textarea class="form-control" id="itemContent" aria-describedby="contentHelp" placeholder="Заполните содержимое страницы" rows="5" v-model="itemObj.content" @focus="editingForm()" @blur="saveForm()"></textarea>
          <small id="contentHelp" class="form-text text-muted">Как в Worde</small>
        </div>
        <div class="row">
          <div class="col-6">
            <button class="btn btn-block btn-light" @click.prevent="clearForm">Очистить поля</button>
          </div>
          <div class="col-6">
            <button class="btn btn-block btn-success" @click.prevent="saveForm">{{buttonSave}}</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "adminFormPage",
  data() {
    return {
      dateNow: new Date(),
      itemObj: {
        title: "",
        description: "",
        content: "",
        dateUpdate: Date().toString()
      },
      buttonSave: "Сохранено"
    };
  },
  created() {
    //this.tecYear = new Date().getFullYear();
    console.log("date:", this.itemObj.dateUpdate);
  },
  methods: {
    // createFullDate() {
    //   let dd =
    //     this.dateNow.getDate() < 10
    //       ? "0" + this.dateNow.getDate()
    //       : this.dateNow.getDate();
    //   let mm =
    //     this.dateNow.getMonth() + 1 < 10
    //       ? "0" + (this.dateNow.getMonth() + 1)
    //       : this.dateNow.getMonth() + 1;
    //   let yyyy = this.dateNow.getFullYear();
    //   return (this.dateNow = dd + "." + mm + "." + yyyy);
    // }
    clearForm() {},
    editingForm() {
      this.buttonSave = "Сохранить";
      return this.buttonSave;
    },
    saveForm() {
      this.buttonSave = "Сохранено";
      return this.buttonSave;
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

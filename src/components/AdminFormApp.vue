<template>
  <div class="row">
    <div class="col">
      <form>
        <div class="row">
          <div class="col-8">
            <div class="form-group">
              <label for="itemTitle">Название приложения</label>
              <input type="text" class="form-control" id="itemTitle" aria-describedby="titleHelp" placeholder="Введите название приложения" maxlength="60" v-model="itemObj.title" @focus="editingForm()" required>
            </div>
          </div>
          <div class="col-4">
            <div class="form-group">
              <label for="itemAlias">Алиас</label>
              <input type="text" class="form-control" id="itemAlias" aria-describedby="aliasHelp" placeholder="Введите алиас" maxlength="60" v-model="itemObj.alias" @focus="editingForm()" required>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-8">
            <div class="form-group">
              <label for="itemType">Тип приложения</label>
              <input type="text" class="form-control" id="itemType" aria-describedby="typeHelp" placeholder="Введите тип приложения" maxlength="60" v-model="itemObj.type" @focus="editingForm()" required>
            </div>
          </div>
          <div class="col-4">
            <div class="form-group">
              <label for="itemButton">Кнопка</label>
              <input type="text" class="form-control" id="itemButton" aria-describedby="buttonHelp" placeholder="Надпись на кнопке" maxlength="60" v-model="itemObj.button" @focus="editingForm()" required>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-9">
            <div class="form-group">
              <label for="itemLink">Ссылка приложения</label>
              <input type="text" class="form-control" id="itemLink" aria-describedby="linkHelp" placeholder="Введите ссылку на приложение" v-model="itemObj.link" @focus="editingForm()">
            </div>
          </div>
          <div class="col-3">
            <div class="form-group">
              <label for="itemPosmenu">Меню</label>
              <input type="number" class="form-control" id="itemPosmenu" aria-describedby="posmenuHelp" max="9" step="1" v-model="itemObj.posmenu" @focus="editingForm()" required>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-9">
            <div class="form-group">
              <label for="itemGithub">Ссылка Github</label>
              <input type="text" class="form-control" id="itemGithub" aria-describedby="githubHelp" placeholder="Введите ссылку на Github" v-model="itemObj.github" @focus="editingForm()">
            </div>
          </div>
          <div class="col-3">
            <div class="form-group">
              <label for="itemVersion">Версия</label>
              <input type="text" class="form-control" id="itemVersion" aria-describedby="versioneHelp" placeholder="Введите версию" v-model="itemObj.version" @focus="editingForm()">
            </div>
          </div>
        </div>
        <div class="form-group">
          <label for="itemDescription">Краткое описание</label>
          <textarea class="form-control" id="itemDescription" aria-describedby="descriptionHelp" placeholder="Введите краткое описание страницы" rows="3" v-model="itemObj.description" @focus="editingForm()"></textarea>
        </div>
        <div class="form-group">
          <label for="itemContent">Подробное описание</label>
          <editor
            api-key="hanxollva4phpflvvnv1lje4y82fvprrkqrmpqeclw066js2"
            :init="{height: 350,
  menubar: true,
  plugins: [
    'advlist autolink lists link image charmap print preview anchor textcolor',
    'searchreplace visualblocks code fullscreen',
    'insertdatetime media table paste code help wordcount'
  ],
  toolbar: 'undo redo | formatselect | bold italic forecolor | link | numlist bullist | alignleft aligncenter alignright alignjustify |code removeformat',
  }"
            class="form-control"
            id="itemContent"
            aria-describedby="contentHelp"
            placeholder="Заполните содержимое страницы"
            rows="5"
            v-model="itemObj.content"
            @focus="editingForm()"
          ></editor>
          <small id="contentHelp" class="form-text text-muted">Как в Worde</small>
        </div>
        <div class="row">
          <div class="col-3">
            <button v-if="this.tecId" class="btn btn-block btn-danger" @click.prevent="deleteForm">Удалить</button>
          </div>
          <div class="col-4">
            <button class="btn btn-block btn-light" @click.prevent="clearForm">Очистить поля</button>
          </div>
          <div class="col-5">
            <button class="btn btn-block" :class="buttonSaveBg" @click.prevent="saveForm">{{buttonSaveText}}</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
//import { db } from "@/main.js";
import validate from "@/scripts/validate.js";
import Editor from "@tinymce/tinymce-vue";

export default {
  name: "adminFormPage",
  components: {
    editor: Editor // <- Important part
  },
  props: {
    itogArr: Array,
    idArr: Array
  },
  data() {
    return {
      dateNow: new Date(),
      tecId: this.$route.query.id || null,
      itemObj: {
        title: "",
        alias: "",
        type: "",
        button: "",
        posmenu: null,
        link: "",
        github: "",
        version: "",
        description: "",
        content: "",
        dateUpdate: Date().toString()
      },
      buttonSaveBg: "btn-success",
      buttonSaveText: "Сохранено"
    };
  },
  created() {
    if (this.$route.query.id) {
      this.getPageObg(this.$route.query.alias);
    }
    //this.tecYear = new Date().getFullYear();
    //console.log("date:", this.itemObj.dateUpdate);
  },
  methods: {
    getPageObg(match) {
      this.itemObj = this.itogArr.find(item => item.alias == match);
    },
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
    deleteForm() {
      console.log("this.tecId =", this.tecId);
      if (confirm("Точно удалить?")) {
        this.$store.commit("deleteItem", {
          col: "app",
          id: this.tecId
        });
      }
      return false;
    },
    clearForm() {
      if (confirm("Точно очистить?")) {
        for (let key in this.itemObj) {
          this.itemObj[key] = "";
        }
        this.itemObj.dateUpdate = Date().toString();
      }
      return false;
    },
    editingForm() {
      this.buttonSaveBg = "btn-warning";
      this.buttonSaveText = "Сохранить";
    },
    saveForm() {
      console.log("this.tecId =", this.tecId);
      this.buttonSaveBg = "btn-warning";
      this.buttonSaveText = "Сохраняется...";
      if (validate(this.itemObj)) {
        this.$store.commit("setItem", {
          col: "app",
          id: this.tecId,
          item: this.itemObj
        });
        this.buttonSaveBg = "btn-success";
        this.buttonSaveText = "Сохранено";
      } else {
        alert("Все поля необходимо заполнить!");
      }
    }
  },
  watch: {
    $route(to, from) {
      this.getPageObg(to.query.alias);
      this.tecId = to.query.id || null;
      //console.log("id=", to.query.id);
      //this.getPageObg(to.params.alias);
    }
  }
};
</script>


<style scoped>
</style>

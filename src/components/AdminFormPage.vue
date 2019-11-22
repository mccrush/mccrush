<template>
  <div class="row">
    <div class="col">
      <form>
        <div class="row">
          <div class="col-7">
            <div class="form-group">
              <label for="itemTitle">Заголовок страницы</label>
              <input type="text" class="form-control" id="itemTitle" aria-describedby="titleHelp" placeholder="Введите заголовок страницы" maxlength="60" v-model="itemObj.title" @focus="editingForm()" required />
              <small id="titleHelp" class="form-text text-muted">Длина не более 60 символов</small>
            </div>
          </div>
          <div class="col-3">
            <div class="form-group">
              <label for="itemAlias">Алиас</label>
              <input type="text" class="form-control" id="itemAlias" aria-describedby="aliasHelp" placeholder="Введите алиас" maxlength="10" v-model="itemObj.alias" @focus="editingForm()" required />
              <small id="aliasHelp" class="form-text text-muted">Латиницей</small>
            </div>
          </div>
          <div class="col-2">
            <div class="form-group">
              <label for="itemPosmenu">Меню</label>
              <input type="number" class="form-control" id="itemPosmenu" aria-describedby="posmenuHelp" max="9" step="1" v-model="itemObj.posmenu" @focus="editingForm()" required />
              <small id="posmenuHelp" class="form-text text-muted">Число</small>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label for="itemDescription">Описание страницы</label>
          <textarea class="form-control" id="itemDescription" aria-describedby="descriptionHelp" placeholder="Введите краткое описание страницы" rows="3" v-model="itemObj.description" @focus="editingForm()"></textarea>
          <small id="descriptionHelp" class="form-text text-muted">Лучше - короче</small>
        </div>
        <div class="form-group">
          <label for="itemContent">Контент страницы</label>
          <editor
            api-key="hanxollva4phpflvvnv1lje4y82fvprrkqrmpqeclw066js2"
            :init="{height: 350,
  menubar: true,
  plugins: [
    'advlist autolink lists link image charmap print preview anchor',
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
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
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
        posmenu: null,
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
  },
  methods: {
    getPageObg(match) {
      this.itemObj = this.itogArr.find(item => item.alias == match);
    },
    deleteForm() {
      console.log("this.tecId =", this.tecId);
      if (confirm("Точно удалить?")) {
        this.$store.commit("deleteItem", {
          col: "page",
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
          col: "page",
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

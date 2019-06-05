<template>
  <div class="col-6 pl-0 pr-0 mb-3">
    <div class="card shadow-sm">
      <div class="card-body">
        <h5 class="card-title">{{item.title}}</h5>
        <p class="card-text">
          <strong>Тип:</strong>
          {{item.type}}
          <br>
          <strong>Версия:</strong>
          {{item.version}}
          <small class="text-muted">от {{dateFormat}}</small>
        </p>
        <div class="row">
          <div class="col-6">
            <a v-if="item.alias == 'pomotime'" :href="item.link" class="btn btn-block btn-sm btn-warning" target="_self" @click="countClick">
              {{item.button}}
              <small class="text-muted">({{item.btnclick}})</small>
            </a>
            <a v-if="item.alias !== 'pomotime'" :href="item.link" class="btn btn-block btn-sm btn-warning" target="_blank" @click="countClick">{{item.button}}</a>
          </div>
          <div class="col-6">
            <a :href="item.github" class="btn btn-block btn-sm btn-light" target="_blank">Github</a>
          </div>
        </div>
        <button class="btn btn-sm btn-block btn-light dropdown-toggle mt-3" type="button" data-toggle="collapse" :data-target="'#'+itemId" aria-expanded="false" :aria-controls="itemId">Подробнее</button>
        <p class="card-text mt-3 small collapse" :id="itemId" v-html="item.content"></p>
      </div>
    </div>
  </div>
</template>
<script>
import { storage } from "@/main.js";

export default {
  name: "cardapp",
  props: {
    item: Object,
    itemId: String
  },
  computed: {
    dateFormat() {
      return (
        this.item.dateUpdate.slice(8, 10) +
        "." +
        this.item.dateUpdate.slice(5, 7) +
        "." +
        this.item.dateUpdate.slice(0, 4)
      );
    }
  },
  methods: {
    countClick() {
      this.item.btnclick += 1;
      this.$store.commit("updateItem", {
        col: "app",
        id: this.itemId,
        item: { btnclick: this.item.btnclick }
      });
      return true;
    }
  }
};
</script>
<style scoped>
.card {
  border: none;
  border-top: 3px solid #ffc107; /* rgba(255, 0, 0, 0.75);*/
}
</style>

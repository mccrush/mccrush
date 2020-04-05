<template>
  <div class="row mt-3">
    <vueHeadful title="GTD" description="Данный раздел посвящен методикам организации повседневной деятельности, инструментам и способам поддержания своих дел в полном порядке" />
    <div class="col-12">
      <h3>GTD</h3>
      <p class="description">Данный раздел посвящен методикам организации повседневной деятельности, инструментам и способам поддержания своих дел в полном порядке</p>
      <hr />

      <h5 class="text-center">Ссылки на полезные сервисы</h5>

      <div class="row mr-0 ml-0">
        <div class="col-12 col-sm-4 shadow-sm rounded box text-decoration-none text-center p-0 pt-4 trello">
          <img src="img/gtd/icons_gtd/trello.png" width="56" height="56" alt="Trello" class="mb-4" />
          <a class="d-block p-3" href="trello.com" target="_blank">Trello</a>
        </div>
        <div class="col-6 col-sm-4 shadow-sm rounded box text-decoration-none text-center p-0 pt-4 evernote" href="evernote.com" target="_blank">
          <img src="img/gtd/icons_gtd/evernote.png" width="56" height="56" alt="Evernote" class="mb-4" />
          <a class="d-block p-3" href="evernote.com" target="_blank">Evernote</a>
        </div>
        <div class="col-6 col-sm-4 shadow-sm rounded box text-decoration-none text-center p-0 pt-4 flow" href="knowflow.io" target="_blank">
          <img src="img/gtd/icons_gtd/flow.png" width="56" height="56" alt="Knowflow" class="mb-4" />
          <a class="d-block p-3" href="knowflow.io" target="_blank">Knowflow</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import vueHeadful from "vue-headful";
import $ from "jquery";

export default {
  name: "home",
  components: {
    vueHeadful
  },
  data() {
    return {};
  },
  created() {
    $(function() {
      $('[data-toggle="tooltip"]').tooltip();
    });
  },
  methods: {},
  watch: {}
};
</script>
<style scoped>
.stec-text {
  color: #212529;
  text-align: center;
  vertical-align: middle;
}
.box {
  color: #212529;
  /* border-top: 3px solid rgba(255, 0, 0, 0.5); */
  /* border-bottom: 2px solid white; */
  transition: 0.5s;
}
.box:hover {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  /* border-top: 3px solid rgba(255, 0, 0, 0.75); */
  /* color: rgba(196, 0, 0, 1); */
}

.box a {
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  backdrop-filter: opacity(0.6);
  /* transition: 0.5s; */
}

.box a:hover {
  /* backdrop-filter: blur(6px); */
  backdrop-filter: opacity(0.4);
}

.trello {
  background: url(/img/gtd/icons_gtd/bg_trello.jpg) center top no-repeat;
}

.evernote {
  background: url(/img/gtd/icons_gtd/bg_evernote.jpg) center top no-repeat;
}

.flow {
  background: url(/img/gtd/icons_gtd/bg_flow.jpg) center top no-repeat;
}
</style>
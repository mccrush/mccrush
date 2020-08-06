<template>
  <div class="col">
    <div class="card border-0 shadow h-100">
      <img :src="'img/apps/'+app.img" height="134" :alt="app.title" class="card-img-top" />
      <div class="card-body">
        <h6 class="card-title">{{app.title}}</h6>
        <span class="small">
          <span class="small d-inline-block">
            <strong>Тип:</strong>
            {{app.type}}
          </span>
          <br />
          <span class="small d-inline-block">
            <strong>Версия:</strong>
            {{app.version}}
            от {{app['date-update']}}
          </span>
        </span>

        <!-- <span class="card-text small" v-html="app.description"></span> -->
      </div>
      <div class="card-footer pt-0 pb-3 bg-white border-0">
        <a
          class="btn btn-sm btn-block btn-danger rounded-pill"
          :href="app.link"
          target="_blank"
        >{{app['button-text']}}</a>
        <a
          class="btn btn-sm btn-block btn-light rounded-pill"
          :href="app.github"
          target="_blank"
        >Описание на GitHub</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-card',
  props: {
    app: {
      type: Object,
    },
  },
}
</script>

<style scoped>
img.card-img-top {
  object-fit: cover;
}
</style>
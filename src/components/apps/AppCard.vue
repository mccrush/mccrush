<template>
  <div class="col">
    <div class="card border-0 shadow h-100">
      <img src="img/gtd/icons_gtd/evernote.jpg" height="134" alt="Evernote" class="card-img-top" />
      <div class="card-body pb-0">
        <h6 class="card-title">{{app.title}}</h6>
        <span class="card-text small" v-html="app.description"></span>
      </div>
      <div class="card-footer pt-0 pb-3 bg-white border-0">
        <a
          class="btn btn-sm btn-block btn-danger"
          :href="app.link"
          target="_blank"
        >{{app['button-text']}}</a>
        <a class="btn btn-sm btn-block btn-light" :href="app.github" target="_blank">Github</a>
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

.btn-warning {
  background-color: #ffd460;
  border-color: #ffd460;
}

.btn-warning:hover {
  background-color: #e6c057;
  border-color: #e6c057;
}
</style>
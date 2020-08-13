<template>
  <div class="col">
    <div class="card border-0 shadow-sm h-100">
      <div class="jimbo d-flex justify-content-center bg-light">
        <img
          :src="'img/apps_ocons/'+app.img"
          width="96"
          height="96"
          :alt="app.title"
          class="align-self-center"
        />
      </div>

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
.jimbo {
  height: 134px;
  /* background: url(../../assets/img/insert-backdrop.webp) no-repeat center center; */
  /* background-position: center center;
  background-repeat: no-repeat; */
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

img.card-img-top {
  object-fit: contain;
}
</style>
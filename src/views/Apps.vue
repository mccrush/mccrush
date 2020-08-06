<template>
  <div class="row mt-3">
    <vueHeadful
      title="Приложения"
      description="Некоторые из публичных работ. Полезные и не очень: приложения, сервисы и программы"
    />
    <div class="col-12">
      <h3>Приложения</h3>
      <p>Некоторые из публичных работ. Полезные и не очень: приложения, сервисы и программы</p>
      <hr />
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        <AppCard v-for="app in apps" :key="'card-'+app.alias" :app="app" />
      </div>
    </div>
  </div>
</template>

<script>
import vueHeadful from 'vue-headful'
import AppCard from '@/components/apps/AppCard'
import apps from '@/scripts/apps'

export default {
  name: 'apps',
  components: {
    vueHeadful,
    AppCard,
  },
  data() {
    return {
      apps,
    }
  },
}
</script>

<style scoped>
</style>
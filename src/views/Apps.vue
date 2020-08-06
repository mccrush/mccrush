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
      <CardApp v-for="item in apps" :key="'card-'+item.alias" :item="item" />
    </div>
  </div>
</template>

<script>
import vueHeadful from 'vue-headful'
import CardApp from '@/components/CardApp'
import apps from '@/scripts/apps'

export default {
  components: {
    vueHeadful,
    CardApp,
  },
  data() {
    return {
      apps,
    }
  },
}
</script>

<style>
</style>
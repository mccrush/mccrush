<template>
  <div class="col-12">
    <h5 class="mt-5 mb-4">Расчет стоимости</h5>
    <div class="row">
      <div class="col-12 col-sm-8 col-md-9 text-left">
        <div
          v-for="(price, index) in prices"
          :key="'pr'+index"
          class="d-inline-block small shadow-sm mr-2 mb-2 p-1 pl-2 pr-2 rounded-sm price-block"
          @click="toggleCard(price.id)"
          :class="price.select ? 'border-danger' : 'border-gray'"
        >
          <span>{{price.title}}</span>
          <br />
          <span class="text-muted small">{{price.description}}</span>
        </div>
      </div>
      <div class="col-12 col-sm-4 col-md-3 calc d-flex flex-column align-items-end small">
        <div class="w-100 overflow-auto">
          <div
            v-for="(price, index) in selectedPrice"
            :key="'pr'+index"
            class="text-left small border mb-2 p-0 pl-2 pr-2 rounded-sm"
          >
            <span>{{price.title}}</span>
            <br />
            <span class="text-muted">{{price.price}}</span>
          </div>
        </div>
        <div class="w-100 mt-auto border-top pt-1">
          <span class="d-inline-block w-50 text-right pr-1">итого:</span>
          <span class="d-inline-block w-50 text-left text-danger">
            <strong>{{itogSumm}}</strong>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import prices from '@/scripts/price'

export default {
  data() {
    return {
      prices,
      selectedPrice: [],
    }
  },
  mounted() {},
  computed: {
    itogSumm() {
      if (this.selectedPrice.length) {
        let summ = 0
        this.selectedPrice.forEach((item) => {
          summ += item.price
        })
        summ = summ.toString()
        return summ.length < 5
          ? summ
          : summ[0] + summ[1] + ' ' + summ[2] + summ[3] + summ[4]
      } else {
        return 0
      }
    },
  },
  methods: {
    toggleCard(id) {
      let index = this.prices.findIndex((item) => item.id === id)
      if (this.prices[index].select) {
        this.prices[index].select = false
        this.selectedPrice = this.selectedPrice.filter(
          (item) => item.price != this.prices[index].price
        )
      } else {
        this.prices[index].select = true
        this.selectedPrice.push(this.prices[index])
      }
    },
  },
}
</script>

<style scoped>
.calc {
  max-height: 183px;
}

.price-block {
  cursor: pointer;
  user-select: none;
  border-top: 3px solid #dee2e6;
  transition: 0.3s;
}
</style>
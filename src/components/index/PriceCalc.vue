<template>
  <div class="col-12">
    <h5 class="mt-5 mb-4">Расчет стоимости разработки</h5>
    <div class="row">
      <div class="col-12 col-sm-8 col-md-9 text-left">
        <div
          v-for="(price, index) in prices"
          :key="'pr' + index"
          class="price-block d-inline-block small shadow-sm me-2 mb-2 p-1 ps-2 pe-2 rounded-1"
          @click="toggleCard(price.id)"
          :class="price.select ? 'border-white' : ''"
        >
          <span class="fw-500">{{ price.title }}</span>
          <br />
          <span class="text-light small">{{ price.description }}</span>
        </div>
      </div>
      <div
        class="calc col-12 col-sm-4 col-md-3 d-flex flex-column align-items-start small"
      >
        <div class="w-100 overflow-auto mb-auto">
          <div
            v-for="(price, index) in selectedPrice"
            :key="'pr' + index"
            class="text-left small border border-white mb-2 p-0 ps-2 pe-2 rounded-1"
          >
            <span>{{ price.title }}</span>
            <br />
            <span v-if="price.id !== 2" class="text-light">{{
              price.price
            }}</span>
            <span v-else class="text-light">1200</span>
          </div>
        </div>
        <div class="w-100 border-top border-light pt-1 pb-1">
          <span class="d-inline-block w-75 ps-1 pe-1 text-left small"
            >количество страниц</span
          >
          <input
            type="number"
            min="0"
            max="9"
            step="1"
            class="form-control form-control-sm d-inline w-25"
            :class="{ 'border-danger': verstka === 2 }"
            v-model.number="countPage"
            :disabled="verstka != 2"
          />
        </div>
        <div class="w-100 border-top border-light pt-1">
          <span class="d-inline-block w-50 text-right pe-1">итого:</span>
          <span class="fw-500 d-inline-block w-50 text-left">
            {{ itogSumm }}
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
      countPage: 0,
      verstka: 0
    }
  },
  mounted() {},
  computed: {
    itogSumm() {
      if (this.selectedPrice.length) {
        let summ = this.countPage * 1200
        this.selectedPrice.forEach(item => {
          summ += item.price
        })
        summ = summ.toString()
        return summ.length < 5
          ? summ
          : summ[0] + summ[1] + ' ' + summ[2] + summ[3] + summ[4]
      } else {
        return 0
      }
    }
  },
  methods: {
    toggleCard(id) {
      let index = this.prices.findIndex(item => item.id === id)
      if (this.prices[index].select) {
        if (id === 2) {
          this.verstka = 0
          this.countPage = 0
        }
        this.prices[index].select = false
        this.selectedPrice = this.selectedPrice.filter(
          item => item.price != this.prices[index].price
        )
      } else {
        if (id === 2) {
          this.verstka = !this.verstka ? id : this.verstka ? this.verstka : 0
        }
        this.prices[index].select = true
        this.selectedPrice.push(this.prices[index])
      }
    }
    // addPage() {
    //   this.itogSumm = this.itogSumm + this.countPage * 1200
    // },
  }
}
</script>

<style scoped>
.calc {
  max-height: 183px;
}

.price-block {
  cursor: pointer;
  user-select: none;
  /* border-top: 3px solid #dee2e6; */
  border-top: 3px solid rgba(0, 0, 0, 0);
  transition: 0.3s;
}

.fw-500 {
  font-weight: 500;
}
</style>
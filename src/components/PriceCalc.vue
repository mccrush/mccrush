<template>
  <div class="col-12 mb-5 pt-5 pb-5">
    <div class="container-960 price-calc container-lg">
      <h5 class="text-center mt-5 mb-5">Расчет стоимости разработки</h5>
      <div class="row">
        <div class="col-12 col-sm-8 col-md-9 text-left">
          <div
            v-for="(price, index) in prices"
            :key="'pr' + index"
            class="price-block bg-deep-blue d-inline-block small shadow-sm me-2 mb-2 pt-2 pb-2 ps-3 pe-3 rounded-1"
            @click="toggleCard(price.id)"
            :class="price.select ? 'border-purpur' : ''"
          >
            <span class="fw-500">{{ price.title }}</span>
            <br />
            <span class="small">{{ price.description }}</span>
          </div>
        </div>
        <div
          class="calc col-12 col-sm-4 col-md-3 d-flex flex-column align-items-start border rounded small p-0"
        >
          <div class="w-100 overflow-auto mb-auto p-1">
            <div
              v-for="(price, index) in selectedPrice"
              :key="'pr' + index"
              class="bg-deep-blue border-purpur-outline text-left small mb-1 p-0 ps-2 pe-2 rounded-1"
            >
              <span>{{ price.title }}</span>
              <br />
              <span v-if="price.id !== 2" class="">{{ price.price }}</span>
              <span v-else class="">1200</span>
            </div>
          </div>
          <div v-if="verstka === 2" class="bg-deep-blue border-top w-100 p-1">
            <span class="d-inline-block w-75 ps-1 pe-1 text-left small"
              >количество страниц</span
            >
            <input
              type="number"
              min="0"
              max="9"
              step="1"
              class="form-control d-inline small w-25 pt-0 pb-0 pe-1"
              :class="{
                'border-danger': verstka === 2 && countPage < 1
              }"
              v-model.number="countPage"
              :disabled="verstka != 2"
            />
          </div>
          <div class="bg-deep-blue border-top rounded-bottom w-100 ps-2 pt-1">
            <span class="d-inline-block text-right pe-1">итого:</span>
            <span class="fw-500 d-inline-block text-left ps-1">
              {{ itogSumm }} ₽
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import prices from '@/data/price'

export default {
  data() {
    return {
      prices,
      selectedPrice: [],
      countPage: 0,
      verstka: 0
    }
  },
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
.price-calc {
  color: #fff;
}
.calc {
  max-height: 183px; /* 183 для трех строк элементов для выбора */
}

.price-block {
  cursor: pointer;
  user-select: none;
  /* border-top: 3px solid #dee2e6; */
  border-top: 3px solid rgba(255, 255, 255, 0.2);
  transition: 0.3s;
}

.border-purpur {
  border-color: #ffffff;
}

.border-purpur-outline {
  border: 1px solid #ffffff;
}
</style>
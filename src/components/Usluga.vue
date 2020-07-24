<template>
  <tr>
    <th scope="row" class="text-center align-middle">{{index+1}}</th>
    <td v-if="usluga.description" class="align-middle">
      <span
        class="border-bot"
        data-toggle="tooltip"
        data-placement="bottom"
        :data-original-title="usluga.description"
      >{{usluga.title}}</span>
    </td>
    <td v-if="!usluga.description" class="align-middle">{{usluga.title}}</td>
    <td class="text-center align-middle">{{usluga.price}}</td>
    <td class="text-center align-middle">
      <input
        type="number"
        min="0"
        max="99"
        step="1"
        class="form-control form-control-sm"
        placeholder="0"
        v-model="kolich"
        @change="changeSum"
      />
    </td>
    <!-- <td class="text-center">
      <div role="group" class="btn-group btn-group-sm">
        <button type="button" class="btn btn-light active btn-light">Нет</button>
        <button type="button" class="btn btn-light">Да</button>
      </div>
    </td>-->
    <td class="text-center align-middle">{{totalSum}}</td>
  </tr>
</template>

<script>
// import $ from "jquery";

export default {
  props: {
    index: {
      type: Number,
      default: 0,
    },
    usluga: {
      type: Object,
      default() {
        return { title: 'Нет услуги', description: 'Нет описания', price: 0 }
      },
    },
  },
  data() {
    return {
      kolich: this.index == 0 ? 1 : 0,
      totalSum: this.index == 0 ? 250 : 0,
    }
  },
  created() {
    // $(function() {
    //   $('[data-toggle="tooltip"]').tooltip();
    // });
  },
  methods: {
    changeSum() {
      this.totalSum = this.usluga.price * this.kolich
      this.$emit('totalSum', this.index, this.totalSum)
    },
  },
}
</script>
<style  scoped>
.border-bot {
  border-bottom: 1px dotted #55636f70;
}
</style>
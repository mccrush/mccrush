<template>
  <tr>
    <th scope="row" class="text-center">{{index+1}}</th>
    <td>{{usluga.title}}</td>
    <td class="text-center">{{usluga.price}}</td>
    <td class="text-center">
      <input type="number" min="1" max="99" step="1" class="form-control form-control-sm" placeholder="1" v-model="kolich" />
    </td>
    <td class="text-center">
      <div role="group" class="btn-group btn-group-sm">
        <button type="button" class="btn btn-light active btn-light">Нет</button>
        <button type="button" class="btn btn-light">Да</button>
      </div>
    </td>
    <td class="text-center">{{usluga.price*kolich}}</td>
  </tr>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      default: 0
    },
    usluga: {
      type: Object,
      default() {
        return { title: "Нет услуги", description: "Нет описания", price: 0 };
      }
    }
  },
  data() {
    return {
      kolich: 1
    };
  }
};
</script>
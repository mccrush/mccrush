<template>
  <div class="row justify-content-center">
    <div class="card-group mt-4 mb-4 p-3">
      <div class="card border-0 shadow card-base">
        <div class="card-header bg-secondary border-0">
          <h5 class="text-white text-center m-0">Base</h5>
        </div>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        <div class="card-footer bg-secondary border-0">
          <h5 class="text-white text-center m-0">350P</h5>
        </div>
      </div>
      <div class="card border-0 shadow mt-4 card-standart">
        <div class="card-header bg-success border-0">
          <h5 class="text-white text-center m-0">Standart</h5>
        </div>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
        </div>
        <div class="card-footer bg-success mb-n4 border-0 shadow">
          <h5 class="text-white text-center m-0">500P</h5>
        </div>
      </div>
      <div class="card border-0 shadow card-premium">
        <div class="card-header bg-warning border-0">
          <h5 class="text-white text-center m-0">Premium</h5>
        </div>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
        </div>
        <div class="card-footer bg-warning border-0">
          <h5 class="text-white text-center m-0">750P</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "comp",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.card-standart {
  z-index: 1;
}
</style>
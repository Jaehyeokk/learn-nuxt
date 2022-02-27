<template>
  <li class="product-item" @click="moveToProductPage">
    <img :src="item.imageUrl" :alt="item.name">
    <p>{{ item.name }}</p>
    <span>{{ item.price }}</span>
  </li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {}
    },
  },
  
  methods: {
    moveToProductPage() {
      this.$router.push(`/product/${this.item.id}`)
    }
  },
}
</script>

<style scoped>
.product-item {
  cursor: pointer;
}
</style>
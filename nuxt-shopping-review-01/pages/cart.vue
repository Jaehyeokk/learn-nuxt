<template>
  <div>
    <div v-for="item in items" :key="item.id">
      <img :src="item.imageUrl" :alt="item.name">
      <p>{{ item.name }}</p>
      <span>{{ item.price }}</span>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ store }) {
    await store.dispatch('FETCH_CART_ITEMS')
  },
  computed: {
    items() {
      return this.$store.state.cart
    }
  }
}
</script>

<style>

</style>
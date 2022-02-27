<template>
  <div>
    <img :src="item.imageUrl" :alt="item.name">
    <p>{{ item.name }}</p>
    <span>{{ item.price }}</span>
    <button @click="addToCart">Add to cart</button>
  </div>
</template>

<script>

export default {
  async asyncData({ store, params }) {
    await store.dispatch('FETCH_PRODUCT', params.id)
  },

  computed: {
    item() {
      return this.$store.state.product
    }
  },
  
  methods: {
    async addToCart() {
      await this.$store.dispatch('ADD_CART_ITEM', this.item)
      this.$router.push('/cart')
    }
  },
}
</script>

<style>

</style>
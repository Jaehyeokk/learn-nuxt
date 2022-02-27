<template>
  <div>
    <SearchInput v-model="searchKeyword" @search="searchProducts"></SearchInput>
    <ul>
      <ProductListItem 
        v-for="item in products"
        :key="item.id"
        :item="item"
      >
      </ProductListItem>
    </ul>
    <button class="cart-btn" @click="moveToCartPage">Go to cart</button>
  </div>
</template>

<script>
import SearchInput from '../../learn-nuxt/components/SearchInput.vue'
import ProductListItem from '../components/ProductListItem.vue'

export default {
  name: 'IndexPage',

  components: { SearchInput, ProductListItem },

  async asyncData({ store }) {
    await store.dispatch('FETCH_PRODUCTS')
  },

  data() {
    return {
      searchKeyword: ''
    }
  },

  computed: {
    products() {
      return this.$store.state.products
    }
  },

  methods: {
    async searchProducts() {
      const keyword = this.searchKeyword
      await this.$store.dispatch('FETCH_PRODUCTS', keyword)
    },

    moveToCartPage() {
      this.$router.push('/cart')
    }
  },
  
}
</script>

<style scoped>
.cart-btn {
  position: sticky;
  right: 46px;
  bottom: 46px;
  float: right;
}
</style>
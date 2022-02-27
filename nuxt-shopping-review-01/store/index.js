import { fetchProducts, fetchProductById, fetchCartItems, addCartItem } from '../apis/index'


export const state = () => ({

  product: {},
  products: [],
  cart: [],
})

export const mutations = {

  SET_PRODUCTS(state, products) {
    state.products = products
  },

  SET_PRODUCT(state, product) {
    state.product = product
  },

  SET_CART_ITEMS(state, items) {
    state.cart = items
  },

  SET_CART_ITEM(state, item) {
    state.cart.push(item)
  }
}

export const actions = {

  async FETCH_PRODUCTS({ commit }, keyword) {
    const response = await fetchProducts(keyword)
    const products = response.data.map(item => ({
      ...item,
      imageUrl: `${item.imageUrl}?random=${Math.random()}`
    }))
    commit('SET_PRODUCTS', products)
    return response
  },

  async FETCH_PRODUCT({ commit }, pid) {
    const response = await fetchProductById(pid)
    const item = response.data
    commit('SET_PRODUCT', item)
    return response
  },

  async FETCH_CART_ITEMS({ commit }) {
    const response = await fetchCartItems()
    const items = response.data
    commit('SET_CART_ITEMS', items)
    return response
  },

  async ADD_CART_ITEM({ commit }, item) {
    const response = await addCartItem(item)
    commit('SET_CART_ITEM', item)
    return response
  }
}
import { addCartItem, getProductsInCart } from "../apis"

export const state = () => ({
  cartItemList: []
})

export const mutations = {
  SET_CART_ITEM(state, item) {
    const newItem = {
      ...item,
      imageUrl: `${item.imageUrl}?random=${Math.random()}`
    }
    state.cartItemList.push(newItem)
  },

  SET_CART_ITEMS(state, items) {
    const products = items.map(item => ({
      ...item,
      imageUrl: `${item.imageUrl}?random=${Math.random()}`
    }))
    state.cartItemList = products
  }
}

export const actions = {
  async ADD_CART_ITEM({ commit }, item) {
    const response = await addCartItem(item)
    commit('SET_CART_ITEM', item)
    return response
  },

  async GET_CART_ITEMS({ commit }) {
    const response = await getProductsInCart()
    const products = response.data
    commit('SET_CART_ITEMS', products)
    return response
  },
  // async nuxtServerInit(storeContext, nuxtContext) {
  //   await storeContext.dispatch('GET_CART_ITEMS')
  // }
}
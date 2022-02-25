export const state = () => ({
  cartItemList: []
})

export const mutations = {
  addCartItem(state, cartItem) {
    const newCartItem = {
      ...cartItem,
      imageUrl: `${cartItem.imageUrl}?random=${Math.random()}`
    }
    state.cartItemList.push(newCartItem)
  }
}
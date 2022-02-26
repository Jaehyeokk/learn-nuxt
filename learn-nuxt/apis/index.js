import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3000'
})

function getProductById(id) {
  return instance.get(`/products/${id}`)
}

function getProductsByKeyword(keyword) {
  return instance.get('/products', {
    params: {
      name_like: keyword
    }
  })
}

function getProductsInCart() {
  return instance.get('/carts')
}

function addCartItem(item) {
  return instance.post('/carts', item)
}

export { getProductById, getProductsByKeyword, addCartItem, getProductsInCart }
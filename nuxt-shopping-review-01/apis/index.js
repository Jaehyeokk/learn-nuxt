import axios from 'axios'


const instance = axios.create({
  baseURL: 'http://localhost:3000'
})

function fetchProducts(keyword) {
  return keyword ? instance.get('/products', {
    params: {
      name_like: keyword
    }
  }) : instance.get('/products')
}

function fetchProductById(id) {
  return instance.get(`/products/${id}`)
}

function fetchCartItems() {
  return instance.get('/carts')
}

function addCartItem(item) {
  return instance.post('/carts', item)
}

export { fetchProducts, fetchProductById, fetchCartItems, addCartItem }
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

export { getProductById, getProductsByKeyword }
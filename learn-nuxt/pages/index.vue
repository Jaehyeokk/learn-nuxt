<template>
  <div>
    {{ products }}
    hi
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'IndexPage',
  async asyncData() {
    const response = await axios.get('http://localhost:3000/products')
    const products = response.data;
    return { products }
  }
}
</script>

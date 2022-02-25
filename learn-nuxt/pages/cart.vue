<template>
  <div class="container">
    <h2 class="list-title">cart page</h2>
    <ul class="list-wrapper">
      <li v-for="item in $store.state.cartItemList" :key="item.id" class="list-item">
        <img class="thumbnail" :src="item.imageUrl" :alt="item.name">
        <div class="description">
          <p>{{ item.name }}</p>
          <p>{{ item.price }}</p>
        </div>
      </li>
    </ul>
    <div class="extra-panel">
      <button>Buy</button>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.container {
  margin: 2rem 10rem;
}
.list-title {
  font-weight: 700;
  font-size: 1.4rem;
}
.list-wrapper {
  margin: 0.4rem 0;
}
.list-item {
  display: flex;
}
.thumbnail {
  width: 100px;
  height: 100px;
}
.description {
  padding: 2rem 1rem;
}
.extra-panel {
  text-align: right;
  padding: 0.2rem 0;
}
</style>
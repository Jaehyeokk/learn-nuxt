<template>
  <div>
    <h1>
      <NuxtLink to='/'>
        Nuxt Shopping
      </NuxtLink>
    </h1>
    <Nuxt />
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
h1 > a {
  text-decoration: none;
  color: #333;
}
</style>
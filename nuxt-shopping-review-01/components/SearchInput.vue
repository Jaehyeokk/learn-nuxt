<template>
  <div>
    <input type="text" :value="value" @input="$emit('input', $event.target.value)" @keyup.enter="$emit('search')">
    <button @click="$emit('search')">Search</button>
  </div>
</template>

<script>

export default {
  props: {
    value: {
      type: String,
      required: true 
    },
  },
}
</script>

<style>

</style>
<template>
  <h1 class="text-3xl md:text-6xl leading-tight text-center">{{ title }}</h1>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>
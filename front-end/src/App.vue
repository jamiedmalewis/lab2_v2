<template>
  <menuBar />
  <router-view></router-view>
</template>

<script>
import menuBar from '@/components/menuBar.vue'
export default {
  name: 'App',
  components: { menuBar}
}
</script>

<style>
</style>

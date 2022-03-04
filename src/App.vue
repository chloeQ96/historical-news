<template>
  <NewsHeader />
  <div class="w-full">
    <div class="max-w-6xl mx-auto md:px-8 px-4">
      <router-view />
    </div>
  </div>
</template>

<script>
import NewsHeader from './components/NewsHeader.vue';

export default {
  name: 'App',
  components: {
    NewsHeader,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #212121;
}
</style>

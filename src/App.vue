<template>
  <div id="app">
    <keep-alive exclude="Detail"><router-view></router-view></keep-alive>
    
   <MainTabBar></MainTabBar>
  </div>
</template>

<script>
import MainTabBar from '@/components/content/MainTabbar.vue'

export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
@import url("./assets/css/base.css");
</style>

<template>
  <div id="app">
    <Nav />
    <router-view />
    <Play></Play>
  </div>
</template>

<script>
import Nav from './components/nav/nav'
import Play from './components/playmusic/play'
export default {
  name: 'App',
  components:{
    Play,
    Nav
  }
}
</script>

<style>


</style>

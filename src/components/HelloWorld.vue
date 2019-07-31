<template>
    
    <div id="HelloWorld">
      <Banner></Banner>
      <Home></Home>
    </div>
</template>

<script>
import Home from './home/home'
import Banner from './banner/banner'
export default {
  data () {
    return {
    }
  },
  components:{
    Home,
    Banner
  }
}
</script>
<style scoped>

</style>

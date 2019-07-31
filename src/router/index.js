import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import playlist from '@/components/playlist/playlist'
import toplist from '@/components/toplist/toplist'
import topListDetail from '@/components/toplist/topListDetail'
import catlist from '@/components/catlist/catlist'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/playlist',
      name:'playlist',
      component: playlist
    },
    {
      path:'/toplist',
      name:'toplist',
      component: toplist,
      children:[
        {
          path:"topListDetail",
          name:"topListDetail",
          component:topListDetail
        }
      ]
    },
    {
      path:'/catlist',
      name:'catlist',
      component: catlist
    }
  ]
})

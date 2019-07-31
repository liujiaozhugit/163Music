<template>
  <div>
    <div class="container">
      <h3>
      热门推荐
      </h3>
      <hr>
      <div class="row">
        <div class="col-lg-3 hoth" v-for="(items,key) in hotList" v-if="key < 8">
          <router-link :to="{path:'/playlist',query:{id:items.id}}">
            <img :src=items.picUrl class="img-responsive">
          </router-link>
          <h5>{{items.name}}</h5>
        </div>
      </div>
    </div>

    <div class="container">
      <h3>最新上架</h3>
      <hr>
      <div class="row">
        <div class="col-lg-2 toph" v-for="(items,key) in top" v-if="key < 6">
          <router-link :to="{path:'/playlist',query:{id:items.id}}">
            <img :src=items.blurPicUrl alt="" class="img-responsive">
          </router-link>
          <h5>{{items.name}}</h5>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  
  data(){
    return{
      songurl:{
        id:''
      },
      song:{
        title:'',
        pic:'',
        anchor:''
      },
      hotList:[],
      top:[]
    }
  },
  methods:{
    // 热门推荐
    getHotplaylist(){
      this.$axios({
        method:'post',
        url:"/api/personalized",
        withCredentials: true,
      }).then((res)=>{
        // console.log("热门推荐");
        // console.log(res.data.result);
        this.hotList = res.data.result;
      }).catch((err)=>{
        console.log(err);
      });
    },
    // 最新上架
    getTop(){
      this.$axios({
        method:'post',
        url:"/api/top/album",
        withCredentials: true,
      }).then((res)=>{
        // console.log("最新上架");
        console.log(res.data.albums);
        this.top = res.data.albums;
      }).catch((err)=>{
        console.log(err);
      });
    }
  },
  mounted(){
    this.getHotplaylist();
    this.getTop();
  }
}
</script>

<style>
.toph{
  height: 260px;
}
.hoth{
  height: 360px;
}
</style>

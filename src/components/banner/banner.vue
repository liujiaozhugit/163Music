<template>
    <div id="banner">
        <div id="carousel-example-generic" class=" carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carousel-example-generic" :class="key == 0 ? 'active': ''" :data-slide-to="key" v-for="(items,key) in bannerlist" v-if="key < 2"></li>
            </ol>
            <div class="carousel-inner " role="listbox">
              <div :class="key == 0 ? 'item active' : 'item'" v-for="(items,key) in bannerlist" v-if="key < 2">
                <img :src=items.imageUrl alt="..." class="img-responsive container" width="100%">
              </div>
            </div>
            <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
              <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
              <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            bannerlist:[]
        }
    },
     methods:{
        getBanner(){
        let params = {
            type:0
        };
        this.$axios({
            method:'post',
            url:"/api/banner",
            withCredentials: true,
            data:{
            type:this.qs.stringify(params)
            }
        }).then((res)=>{
            // console.log("banner");
            // console.log(res);
            this.bannerlist = res.data.banners;
        }).catch((err)=>{
            console.log(err);
        });
        }
  },
  mounted(){
    this.getBanner();
  }
}
</script>
<style>

</style>


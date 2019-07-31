<template>
    <div id="top">
        
        <div class="container" style="margin-top:20px;">
            <div class="row">
                <div class="col-lg-3 col-lg-offset-1">
                    <h4>云音乐特色榜</h4>

                    <ul>
                        <li class="media active" v-for="(item,index) in topList">
                            <router-link :to="{path:'/toplist/topListDetail',query:{idx:index}}">
                                <div class="media-left">
                                    <img class="media-object" width="45" :src='item.coverImgUrl' alt="...">
                                </div>
                                <div class="media-body">
                                    <h5 class="media-heading">{{item.name}}</h5>
                                    <span class="text-muted">{{item.updateFrequency}}</span>
                                </div>
                            </router-link>
                        </li>
                    </ul>
                    
                </div>
                <div class="col-lg-7">
                    <router-view />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            topList:[]
        }
    },
    methods:{
        // 获取 排行榜 榜单信息
        getTopListDetail(){
            this.$axios({
                methods:'post',
                url:'/api/toplist',
                withCredentials: true
            }).then(res=>{
                console.log(res);
                this.topList = res.data.list;
            }).catch(err=>{
                console.log(err);
            });
        },
    },
    mounted(){
        this.getTopListDetail();
    }
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
}
</style>


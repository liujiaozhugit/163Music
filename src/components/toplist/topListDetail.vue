<template>
    <div id="topListDetail">
        <div class="media">
            <div class="media-left">
                <a href="#">
                    <img class="media-object" width="150"  :src="listDetail.coverImgUrl">
                </a>
            </div>
            <div class="media-body">
                <h4 class="media-heading">{{listDetail.name}}</h4>
                <p class="text-muted">
                    {{listDetail.description}}
                </p>
                <p class="text-muted">
                    <span class="glyphicon glyphicon-time"></span>
                    更新时间: {{new Date(listDetail.updateTime).toLocaleString()}}
                </p>
                <button class="btn btn-primary"><span class="glyphicon glyphicon-play"></span> 播放</button>
                <button class="btn btn-info"><span class="glyphicon glyphicon-download-alt"></span> 下载</button>
                <button class="btn btn-danger"><span class="glyphicon glyphicon-comment"></span> 评论</button>
            </div>
        </div>
        <h3>歌曲列表 <small>{{listDetail.trackCount}}首歌</small></h3>
        <table class="table table-hover table-striped">
            <thead>
                <tr>
                    <td></td>
                    <td>标题</td>
                    <td>时长</td>
                    <td>歌手</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in listDetail.tracks">
                    <td>
                        <span class="glyphicon glyphicon-play"></span>
                    </td>
                    <td>
                        {{item.name}}
                    </td>
                    <td>
                        {{ timeFormat(item.dt)}}
                    </td>
                    <td>
                        {{item.ar[0].name}}
                    </td>
                </tr>
            </tbody>
        </table>

    </div>
</template>
<script>
import util from '../utils/utils.js'
export default {
    data(){
        return{
            listDetail:{
                coverImgUrl:'http://p1.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg'
            },
        }
    },
    methods:{
        getTopListDetail(idx){
            this.$axios({
                methods:'post',
                url:'/api/top/list?idx='+idx,
                withCredentials: true
            }).then(res=>{
                console.log(res);
                this.listDetail = res.data.playlist;
            }).catch(err=>{
                console.log(err);
            });
        },
        // 转换时间
        timeFormat(times){
            let m = parseInt((times % (1000*60*60)) / (1000*60));
            let s = parseInt((times % (1000*60)) / (1000));
            let mm = m >= 9 ? m : '0'+ m;
            let ss = s >= 9 ? s : '0'+ s;
            return mm+":"+ss;
        }
    },
    mounted(){
        let idx = this.$route.query.idx;
        this.getTopListDetail(idx);
    }
}
</script>
<style>

</style>


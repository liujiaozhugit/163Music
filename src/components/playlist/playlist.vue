<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-lg-10">
                    <div class="row">
                        <div class="col-lg-3">
                            <img :src=playlist.coverImgUrl class="img-responsive img-thumbnail">
                        </div>
                        <div class="col-lg-9 playlistinfo">
                            <div>
                                <h4>{{playlist.name}}</h4>
                            </div>
                            
                            <div class="tagsmargin">
                                标签:
                                <span class="label label-default" v-for="(items,key) in playlist.tags">
                                    {{items}}
                                </span>
                            </div>

                            <div>
                                <button type="button" class="btn btn-primary btn-md">
                                    <span class="glyphicon glyphicon-play-circle"></span> 播放
                                </button>
                                <button type="button" class="btn btn-default btn-md">
                                     <span class="glyphicon glyphicon-plus"></span> 收藏
                                </button>
                                <button type="button" class="btn btn-default btn-md">
                                     <span class="glyphicon glyphicon-download-alt"></span> 下载
                                </button>
                                <button type="button" class="btn btn-default btn-md">
                                     <span class="glyphicon glyphicon-comment"></span> 评论
                                </button>
                            </div>
                            <div>
                                 <p v-html="playlist.description">
                                </p>
                            </div>
                        </div>
                    </div>

                    <h4>歌曲列表 </h4>
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <td></td>
                                <td>歌曲标题</td>
                                <td>时长</td>
                                <td>歌手</td>
                                <td>专辑</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(items,key) in songlist">
                                <td>
                                    <span class="glyphicon glyphicon-play-circle" v-on:click="getUrl(items,key)"></span>
                                </td>
                                <td>
                                    {{items.name}}
                                </td>
                                <td>
                                    {{ timeFormat(items.dt)}}
                                    <!-- {{util.timeFormat(items.dt)}} -->
                                </td>
                                <td>
                                    {{items.ar[0].name}}
                                </td>
                                <td>
                                    {{items.al.name}}
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <h5 name="pl">精彩评论</h5>
                    <hr>
                </div>
                <div class="col-lg-2">
                    <!-- <h5>喜欢这个歌单的人</h5> -->

                </div>
            </div>
            
            <div class="row" v-for="(comment,index) in commentsList">
                <div class="col-lg-1">
                    <img :src="comment.user.avatarUrl"  class="img-responsive" alt="">
                </div>
                <div class="col-lg-8">
                    <p>
                        <span class="usernamecolor">{{comment.user.nickname}}:</span>
                        <span>{{comment.content}}</span>
                    </p>
                    <div class="timeandstar">
                        <div>{{new Date(comment.time).toLocaleString()}}</div>
                        <div>
                            <span class="glyphicon glyphicon-thumbs-up usernamecolor"></span> ({{comment.likedCount}})
                            |
                            回复
                        </div>
                    </div>
                    <hr>
                </div>
                
            </div>


        </div>
        
    </div>
</template>
<script>
export default {
    
    data(){
        return{
            playlist:'',// 歌曲列表
            songlist:[],// 歌曲详情
            id:'',// 歌曲id
            songurl:null, // 歌曲url
            flag:false, // 播放按钮状态
            song:'',// 歌曲信息
            commentsList:[]// 歌单评论
        }
    },
    methods:{
        // 播放歌曲
        getUrl(song,index){
            this.songurl = song;
            this.flag = !this.flag;
            console.log(this.songurl.al.id);
            
            this.$axios({
                method:'post',
                url:"/api/song/url",
                withCredentials: true,
                data:{
                    id:this.songurl.al.id
                }
            }).then(res=>{
                console.log(res);
            }).catch(err=>{
                console.log(err);
            });
        },
        // 歌单详情
        getplaylist(id){
            this.$axios({
                method:'post',
                url:"/api/playlist/detail",
                withCredentials: true,
                data:{
                    id
                }
            }).then(res=>{
                // 获取歌曲列表
                this.playlist = res.data.playlist;
                let arr = res.data.playlist.trackIds;
                let arrids = [];
                // 将歌曲id 获取
                for(let i = 0; i < arr.length;i++){
                    arrids.push(arr[i].id);
                }
                // 通过多个id获取所有 歌曲详情
                this.getSongInfo(arrids.join(','));

            }).catch(err=>{
                console.log(err);
            });
        },
        // 获取歌曲详情
        getSongInfo(id){
            this.$axios({
                method:'post',
                url:"/api/song/detail",
                withCredentials: true,
                data:{
                    ids:id
                }
            }).then(res=>{
                this.songlist = res.data.songs;
            }).catch(err=>{
                console.log(err);
            });
        },
        // 毫秒转换时间
        timeFormat(times){
            let m = parseInt((times % (1000*60*60)) / (1000*60));
            let s = parseInt((times % (1000*60)) / (1000));
            let mm = m >= 9 ? m : '0'+ m;
            let ss = s >= 9 ? s : '0'+ s;
            return mm+":"+ss;
        },
        // 获取歌单 评论
        getComment(id){
            this.$axios({
                method:'post',
                url:"/api/comment/playlist",
                withCredentials: true,
                data:{
                    id
                }
            }).then(res=>{
                
                this.commentsList = res.data.comments;
                console.log(this.commentsList);
            }).catch(err=>{
                console.log(err);
            });
        }
    },
    mounted(){
        // 上个页面传过来的 歌单id 参数
        this.id = this.$route.query.id;
        this.getplaylist(this.id);
        this.getComment(this.id);
    }
}
</script>
<style>
.tagsmargin span{
    margin: 0 3px;
}
.playlistinfo>div{
    margin-bottom:15px; 
}
.timeandstar{
    display: flex;
    justify-content:space-between;
}
.usernamecolor{
    color:deepskyblue;
}
</style>



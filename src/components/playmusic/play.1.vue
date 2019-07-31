<template>
    <div>
        <div class="all" >
            <div class="playbar" @mouseover="hover" @mouseout="clearH">
            <!-- 鼠标经过的部分 -->
                <div class="hand"></div>
                <div class="wrap">
                    <span class="btnSuo glyphicon glyphicon-lock" @click="setHeight"></span>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <keep-alive>
                                    <aplayer :showLrc='true' autoplay :music="songurl" theme='#F0F' v-if="flag"></aplayer>
                                </keep-alive>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Aplayer from 'vue-aplayer'

export default {
    components:{
        Aplayer
    },
    data(){
        return{
            hf:false,
            flag:false,
            songurl:{
                id:'',
                title:'',
                url:'',
                author:'',
                pic:''
            }
        }
    },
    props:['playsong','songinfo'],
    methods:{
        // 获取歌曲
        getlyric(id){
            console.log("获取歌词"+id);
            this.$axios({
                method:'get',
                dataType:'json',
                url:"http://music.163.com/api/song/lyric",
                withCredentials: true,
                data:{
                    id
                }
            }).then(res=>{
                console.log(res);
            }).catch(err=>{
                console.log(err);
            });
        },
        setHeight(){
            this.hf = !this.hf;
            if(this.hf){
                document.getElementsByClassName("playbar")[0].style.top = "-126px";
            }else{
                document.getElementsByClassName("playbar")[0].style.top = "-10px";
            }
        },
        hover(){
            document.getElementsByClassName("playbar")[0].style.position = "absolute";
            document.getElementsByClassName("playbar")[0].style.top = "-126px";
        },
        clearH(){
            if(this.hf){
                document.getElementsByClassName("playbar")[0].style.top = "-126px";
            }else{
                document.getElementsByClassName("playbar")[0].style.top = "-10px";
            }
        }
        
    },
    mounted(){
     console.log("播放器");   
    },
    watch: {
        songinfo:{
            handler(newValue, oldValue) {
                this.songurl.author = newValue.ar[0].name;
                this.songurl.pic = newValue.al.picUrl;
                this.songurl.title = newValue.name;
                this.songurl.id = newValue.id;
                console.log("歌曲id"+newValue.id);
                //this.getlyric(newValue.id);
            },
            deep:true
        },
        playsong: {
    　　　　handler(newValue, oldValue) {
    　　　　　　console.log(newValue.id)
                this.$axios({
                    method:'post',
                    url:"/api/song/url",
                    withCredentials: true,
                    data:{
                        id:newValue.id,
                    }
                }).then(res=>{
                    console.log(res);
                    this.songurl.url = res.data.data[0].url;
                    this.flag = true;
                }).catch(err=>{
                    console.log(err);
                });
    　　　　},
    　　　　deep:true
    　　}
    }
}
</script>

<style>
.all{
    width: 100%;
    height: 0px;
    bottom: 0px;
    background: rgb(22, 0, 0);
    position: fixed;
    z-index: 999;
}
.hand{
    position: absolute;
    top:-50px;
}
.playbar{
    position: absolute;
    width: 100%;
    height: 150px;
    top: -10px;
}
.wrap{
    width:100%;
    background: #000;
    margin-top: 10px;
    height: 140px;
    box-shadow: 0px -3px 5px;
}
.btnSuo:hover{
    color: #fff;
    transition: 2s;
}
.btnSuo{
    transition: 2s;
    cursor: pointer;
    display: inline-block;
    position: absolute;
    top:-10px;
    width: 45px;
    height: 22px;
    line-height: 22px;
    background: #000;
    color: rgb(116, 113, 113);
    right: 50px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    box-shadow: 1px 1px 5px #000;
    text-align: center;
}
</style>


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
                                <!-- <keep-alive>
                                    <aplayer :music='song' autoplay theme='#F0F' v-if="flag"></aplayer>
                                </keep-alive> -->
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
            flag:true,
            song:'',// 获取 vuex 中的属性值
            songInfo:[]
        }
    },
    methods:{
        // 音乐播放器 特效
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
     console.log(this.song);
    //  this.songInfo = this.song;
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


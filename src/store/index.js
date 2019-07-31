import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// 定义 数据
const state = {
    songUrl:null,
    count:10
}

// 改变数据的 方法
const mutations = {
    mutationsChange(n){
        console.log("vuex 执行了");
        return state.count += n;
    }
}
// 获取 数据
const getters= {
    gettersSong(state){
        return (state.songUrl);
    },
    getCount(){
        return state.count;
    }
}

// 导出 数据和 方法 
export default new Vuex.Store({
    state,
    mutations,
    getters
})
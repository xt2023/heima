<template>
<div class="home-container">
<!--  头部区域-->
  <van-nav-bar title="黑马头条" fixed/>
  <van-pull-refresh v-model="loading" @refresh="onRefresh">
  <van-list
    v-model:loading="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <ArticleInfo
      v-for="(item,i) in artist"
      :key="item.i"
      :title="item.goods_name"
      :author="item.goods_price"
      :cmtCount="item.goods_price"
    ></ArticleInfo>
  </van-list>
  </van-pull-refresh>
</div>
</template>

<script>
import {getListAPI} from '@/api/listAPI.js'

import ArticleInfo from "@/components/Article/ArticleInfo";
export default {
  name: "Home",
  data (){
    return {
      page:1,
      count:10,
      //文章数组
      artist:[],
      loading:true,
      //
      finished:false,
      isloading:true
    }
  },
  created() {
    this.initArticlesList()
    console.log()
  },

  //封装获取文章数据的方法
  methods :{
    async initArticlesList (isRefresh){
     const {data:res}= await getListAPI()
      if (isRefresh){
        this.artist=[...res.data,...this.artist]
        this.loading=false
      }else {
        this.artist=[...this.artist,...res.data]

        this.loading=false
      }
    },
    onLoad (){
      console.log('触发了onload事件')
      this.initArticlesList()
    },
    onRefresh(){
      console.log('触发了下拉刷新')
      this.initArticlesList(true)
    }
  },
  //注册组件
  components:{
    ArticleInfo
  },

}
</script>

<style scoped lang="less">
.home-container {
  padding: 46px 0 50px 0;


}

</style>

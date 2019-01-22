<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="img in images" :key="img">
                <img :src="img" alt="轮播图"/>
            </mt-swipe-item>
        </mt-swipe>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newsList">
                <span class="mui-icon-extra mui-icon-extra-trend"></span>
                <div class="mui-media-body">新闻资讯</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon-extra mui-icon-extra-heart"></span>
                <div class="mui-media-body">图片分享</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon-extra mui-icon-extra-cart"></span>
                <div class="mui-media-body">商品购买</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon-extra mui-icon-extra-notice"></span>
                <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon-extra mui-icon-extra-computer"></span>
                <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon-extra mui-icon-extra-custom"></span>
                <div class="mui-media-body">联系我们</div></a></li>
        </ul>
    </div>
</template>

<script>
    const images = [
        'http://unsplash.it/300/200?image=1',
        'http://unsplash.it/300/200?image=2',
        'http://unsplash.it/300/200?image=3'
    ];
    export default {
        name: "Home",
        data(){
            return{
                images:images
            };
        },
        methods: {
            send() {
                window.console.log("试试！");
                // GET /someUrl
                this.$http.get('http://localhost:8081/test').then(response => {
                    this.someData = response.body;
                    window.console.log(this.someData.msg);
                });
            }
        }
    }
</script>

<style lang="less" scoped>
    .mint-swipe {
        height: 200px;
        img{
            width: 100%;
        }
    }
</style>
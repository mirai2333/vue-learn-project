<template>
    <div>
        <div class="mui-card" v-for="item in news" :key="item.docid">
            <router-link :to="'/home/newsInfo/'+item.source+'/'+item.docid">
                <!--页眉，放置标题-->
                <div class="mui-card-header mui-card-media"
                     :style="'height:40vw;background-image:url('+item.picInfo[0].url+')'"></div>
                <div class="mui-card-content">
                    <p class='mui-ellipsis' v-text="item.digest">~(￣▽￣)~*</p>
                </div>
                <!--页脚，放置补充信息或支持的操作-->
                <div class="mui-card-footer">
                    <b v-text="item.source">O(∩_∩)O</b>
                    <span>{{item.tcount}}&nbsp;👁</span>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NewsList",
        created() {
            this.getNewsList();
        },
        data() {
            return {
                news: []
            };
        },
        methods: {
            getNewsList() {
                this.$http.jsonp("http://3g.163.com/touch/jsonp/sy/recommend/0-9.html").then(resource => {
                    this.news = resource.body.news;
                });
            }
        }
    }
</script>

<style scoped>
    .mui-ellipsis {
        margin: 5px;
    }
</style>
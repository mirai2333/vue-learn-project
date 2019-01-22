<template>
    <div id="newsInfo">
        <a :href="'https://3g.163.com/all/article/'+articleID+'.html'">
            <button type="button" class="btn btn-primary btn-lg checkNews">新闻：{{articleSource}}</button>
        </a>
        <hr/>
        <comment-box></comment-box>
    </div>
</template>

<script>
    import comment from '../subcomponent/comment';
    export default {
        name: "NewsInfo",
        components:{
            'comment-box':comment
        },
        created(){
        },
        data() {
            return {
                articleID:this.$route.params.id,
                articleSource:this.$route.params.source
            };
        },
        methods:{
        }
    }
</script>

<style lang="less" scoped>
    .checkNews{
        margin: 5%;
        width: 90%;
    }
</style>
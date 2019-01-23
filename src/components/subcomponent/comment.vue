<template>
    <div id="comment">
        <button class="btn btn-light" type="button" data-toggle="collapse" data-target="#commentText" aria-expanded="false" aria-controls="commentText">
            添加评论
        </button>
        <div class="collapse" id="commentText" ref="commentText">
            <mt-field placeholder="添加评论" type="textarea" rows="4" v-model="content"></mt-field>
            <button type="button" class="btn btn-primary form-control" @click="submitComment">提交评论</button>
        </div>
        <hr/>
        <div class="card bg-light mb-3">
            <div class="card-header">
                <strong>张三</strong>
                <span>10:13&nbsp;&nbsp;2019年1月23日</span>
            </div>
            <div class="card-body">
                <p class="card-text">
                    我觉得所谓邪神倒不如说是三维生物视角下的超维生物 假设三维生物是txt文档 超维生物是视频格式 用文档打开视频就会得到一堆不可名状的乱码 而且庞大的数据量会撑爆txt文档 这就是所谓的掉san 精神污染
                </p>
                <div class="float-right floor">1&nbsp;楼</div>
            </div>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery'
    export default {
        name: "comment",
        data(){
            return{
                content:''
            };
        },
        methods:{
            submitComment(){
                let commentNode = $(this.$refs.commentText);
                commentNode.collapse('hide');
            }
        }
    }
</script>

<style lang="less" scoped>
#comment{
    margin: 10px;
    #commentText{
        margin-top: 5px;
        button{
            margin-top: 5px;
        }
    }
    .card{
        span{
            font-size: 0.2rem;
        }
        .card-header{
            display: flex;
            justify-content: space-between;
        }
        .floor{
            font-size: 0.1rem;
        }
        p{
            margin-bottom: 0;
        }
    }
}
</style>
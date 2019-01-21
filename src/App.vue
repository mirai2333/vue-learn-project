<template>
    <div id="app">
        <!--头部-->
        <mt-header fixed title="固定在顶部"></mt-header>
        <!--身体-->
        <router-view/>
        <!--腿部-->
        <mt-tabbar v-model="selected">
            <mt-tab-item id="1">
                <img slot="icon" src="./assets/logo.png" alt="首页">首页
            </mt-tab-item>
            <mt-tab-item id="2">
                <img slot="icon" src="./assets/logo.png" alt="会员">会员
            </mt-tab-item>
            <mt-tab-item id="3">
                <img slot="icon" src="./assets/logo.png" alt="购物车">购物车
            </mt-tab-item>
            <mt-tab-item id="4">
                <img slot="icon" src="./assets/logo.png" alt="搜索">搜索
            </mt-tab-item>
        </mt-tabbar>


    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                selected: 1
            };
        },
        watch:{
            selected(newValue){
                this.routerChange(newValue);
            }
        },
        methods: {
            routerChange(selected) {
                let temPath;
                switch (selected) {
                    case '1':
                        temPath = 'home';
                        break;
                    case '2':
                        temPath = 'user';
                        break;
                    case '3':
                        temPath = 'cart';
                        break;
                    case '4':
                        temPath = 'search';
                        break;
                    default:
                        temPath = 'home';
                }
                this.$router.push({name: temPath, params: {my_data: selected}});
            }
        },
        computed: {}
    }
</script>

<style>
    #app {
        padding-top: 40px;
    }
</style>

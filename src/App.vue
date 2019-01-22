<template>
    <div id="app">
        <!--头部-->
        <mt-header fixed title="黑马程序员-成就IT黑马！"></mt-header>
        <!--身体-->
        <transition>
            <router-view/>
        </transition>
        <!--腿部-->
        <mt-tabbar v-model="selected" :fixed="true">
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
        watch: {
            selected(newValue) {
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
                        temPath = 'member';
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
        overflow-x: hidden;
    }

    .v-enter {
        opacity: 0;
        transform: translateX(100%);
    }
    .v-leave-to {
        opacity: 0;
        transform: translateX(-100%);
        position: absolute;
    }

    .v-enter-active,
    .v-leave-active {
        transition: all 0.5s ease;
    }
</style>

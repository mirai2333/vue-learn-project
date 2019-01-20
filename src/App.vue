<template>
    <div id="app" class="container-fluid">
        <div class="card bg-light mb-3">
            <div class="card-header">添加品牌</div>
            <div class="card-body">
                <form>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <input type="number" class="form-control" v-model="id" placeholder="品牌ID">
                        </div>
                        <div class="form-group col-md-6">
                            <input type="text" class="form-control" v-model="name" placeholder="品牌名称">
                        </div>
                    </div>
                    <div class="form-group">
                        <button type="button" class="btn btn-primary btn-lg btn-block" @click="add">添加</button>
                    </div>
                </form>
            </div>
        </div>
        <table class="table">
            <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">NAME</th>
                <th scope="col">CTIME</th>
                <th scope="col">OPERATION</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, index) in items" :key="item.id">
                <th v-text="item.id" scope="row">1</th>
                <td v-text="item.name"></td>
                <td v-text="item.createTime"></td>
                <td><a href="#" @click.prevent="del(index,item.id)">删除</a></td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    const items = [
        {id: 1, name: '红旗', createTime: new Date().toLocaleString()},
        {id: 2, name: '奔驰', createTime: new Date().toLocaleString()},
        {id: 3, name: '宝马', createTime: new Date().toLocaleString()}
    ];
    export default {
        name: 'app',
        data() {
            return {
                id: '',
                name: '',
                items: items
            };
        },
        methods: {
            add() {
                let item = {id: this.id, name: this.name, createTime: new Date().toLocaleString()};
                this.items.push(item);
                this.id = this.name = '';
            },
            del(index, id) {
                window.console.log(id);
                this.items.splice(index, 1);
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin: 0;
    }
</style>

<template>
    <div>
        <button type="button" class="btn btn-primary btn-lg btn-block" @click="send">{{$route.params.my_data || '按钮'}}</button>
    </div>
</template>

<script>
    export default {
        name: "Home",
        methods:{
            send(){
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

<style scoped>

</style>
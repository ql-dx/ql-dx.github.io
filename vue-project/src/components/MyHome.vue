<template>
  <h1>{{result}}</h1>
</template>

<script>
import axios from 'axios'

export default {
    name:'MyHome',
    data() {
        return {
            result:''
        }
    },
    mounted() {
        axios({
            method:'post',
            url:'https://api.apiopen.top/recommendPoetry'
        }).then(
            ({data:res}) => {
                const {result} = res;
                this.result = result;
                console.log(res);
            }
        )
    },
}
</script>

<style>

</style>
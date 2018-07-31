<template>
    <div class="demo">
      <p @click="fn1">这是子组件</p>
      <p>输出：{{msg}}</p>
    </div>
</template>

<script>
  export default {
    // name: 'demo.vue',
    props: {
      msg: String
    },
    data(){
      return{
        hello:'hello'
      }
    },
    methods: {
      outPut () {
        console.log('我依旧是帅哥磊')
      },
      fn1 () {
        this.$emit("tongxin", 'dddd')
      }
    }
  }
</script>

<style scoped>
  .demo{
    width: 400px;
    margin: 0 auto;
    margin-top: 50px;
    border: 1px solid red;
  }
  p {
    line-height: 50px;
  }
</style>

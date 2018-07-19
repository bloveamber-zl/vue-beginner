<template>
    <div class="demo">
      <p @click="fn1">这是子组件</p>
      <p>{{msg}}</p>
    </div>
</template>

<script>
  export default {
    // name: 'demo.vue',
    props: {
      msg: String
    },
    methods: {
      fn1 () {
        this.$emit("tongxin", '帅哥磊')
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

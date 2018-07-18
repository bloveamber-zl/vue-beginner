<template>
    <div class="demo">
      <p>这是子组件</p>
      <p>{{msg}}</p>
    </div>
</template>

<script>
  export default {
    name: 'demo.vue',
    props: {
      msg: String
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

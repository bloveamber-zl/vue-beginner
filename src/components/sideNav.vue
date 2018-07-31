
<template>
  <div>
    <div class="nav" v-for="item in list">
      <div class="navC" @click="jump(item)">{{item}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return{
        list: ['one', 'two', 'three', 'four']
      }
    },
    methods: {
      jump (item) {
        this.$router.push({path: `/${item}`})
      }
    }
  }
</script>

<style scoped>
  .nav{
    width: 200px;
    /*float: left;*/
    background: aqua;
  }
  .navC{
    display: block;
    width: 100%;
    height: 50px;
    border: 1px solid #000;
  }
</style>

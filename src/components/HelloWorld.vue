<template>
  <div>
    <input v-model="inputVal" type="text">
    <demo :msg="inputVal"></demo>
  </div>
</template>

<script>
  import demo from './demo'


export default {
  name: 'HelloWorld',
  components: {
    demo
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      inputVal: ' '
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

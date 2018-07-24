<template>
  <div>
    <input v-model="inputVal" type="text">
    <demo @tongxin="demo" :msg="inputVal"></demo>
  </div>
</template>

<script>
  import demo from './demo'
  import Demo from '../api/Demo'
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
  },
  methods: {
    demo (val) {
      console.log(val)
    }
  },
  created () {
    // Demo.getUser().then(function (res) {
    //   console.log(`res: ${JSON.stringify(res)}`)
    // })
    let obj = {
      flowtype:"基本流程",
      personid:"yuxinyi",
      flowDeptId:""
    }
    Demo.createdFlowType(obj).then(function (res) {
      console.log(`res : ${JSON.stringify(res.data.data)}`)
    })
    Demo.getUser().then(function (res) {
      console.log(`res : ${JSON.stringify(res.data.data)}`)
    })
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

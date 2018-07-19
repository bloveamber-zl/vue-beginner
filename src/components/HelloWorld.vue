<template>
  <div>
    <input v-model="inputVal" type="text">
    <demo @tongxin="demo" :msg="inputVal"></demo>
  </div>
</template>

<script>
  import demo from './demo'
  import axios from 'axios'
export
default {
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
    axios.get('http://124.128.225.21:7181/xdl/getUflowNodeByFidAndIid.do?flowid=IPYKQS&instanceid=fedbb286094d406db6a42535a84c27ab&loginid=yuxinyi&id').then(function (res) {
      console.log(`res: ${res}`)
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

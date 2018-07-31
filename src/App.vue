<template>
  <div id="app">
  <side-nav></side-nav>
    <router-view/>
  </div>
</template>

<script>
import Sidenav from './components/sideNav'
export default {
  name: 'App',
  components: {
    'side-nav': Sidenav
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

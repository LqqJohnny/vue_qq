<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style src="./assets/css/aui.css"></style>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.float_l{
    float:left;
}
.float_r{
    float: right;
}
.clearfix{
    zoom:1;
}
.clearfix:after{
    content: '';
    display: block;
    height: 0;
    clear: both;
}
</style>

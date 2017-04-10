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

<style>
* {
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: Microsoft Yahei, 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 12px;
  background-color: #dce6f1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #0f1317;
  line-height: normal;
}
</style>

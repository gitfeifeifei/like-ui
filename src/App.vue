<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <li-button>点我-傲夫靠斯</li-button>
  </div>
</template>

<script>
import HelloWorld from './components/li-hello-world'
import LiButton from "./components/li-button";

export default {
  name: 'App',
  components: {
    LiButton,
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

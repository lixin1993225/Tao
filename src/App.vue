<template>
    <div id="app">
        <router-view />
        <bottomTabs />
    </div>
</template>

<script>
    import  bottomTabs from './components/Tabs.vue'
    export default {
        name: 'App',
        components:{
            bottomTabs,
        }
    }
</script>
<style>
#app {
  position:absolute;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width:100%;
  height:100%;
  background-color: rgb(248,248,248);
}
</style>

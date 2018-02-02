<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
}
</script>

<style lang="scss">
  *{
    margin: 0;
    padding: 0;
  }
  html,body{
    width: 100%;
    height: 100%;
    #app{
      width: 100%;
      height: 100%;
      .ivu-poptip-popper{
        max-height: 500px;
        overflow: scroll;
      }
    }
  }
</style>

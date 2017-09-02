<template>
  <div id="app">
    <vue-progress-bar></vue-progress-bar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="scss">
  @import 'assets/scss/vars.scss';
  @import '~bulma';  
  @import 'assets/scss/reset.scss';
</style>

<template>
  <div id="app">
    <base-layout></base-layout>
  </div>
</template>

<script>
import baseLayout from '@/layout/base';
export default {
  name: 'app',
  components: {
    baseLayout,
  },
};
</script>

<style lang="scss">
  @import '~bulma';
</style>
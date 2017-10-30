<template>
  <div>
    <v-header></v-header>
    <router-view></router-view>
  </div>
</template>
<script>
  import VHeader from '@/layout/header';

  export default{
    components: {
      VHeader,
    },
  };
</script>
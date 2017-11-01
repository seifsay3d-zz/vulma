<template>
  <div>
    <v-header></v-header>
    <router-view></router-view>
    <v-footer></v-footer>
  </div>
</template>
<script>
  import VHeader from '@/layout/header';
  import VFooter from '@/layout/footer';

  export default{
    components: {
      VHeader,
      VFooter,
    },
  };
</script>
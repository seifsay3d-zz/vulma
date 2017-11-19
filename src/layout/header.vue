<template>
  <div class="container">
    <nav class="navbar ">
      <div class="navbar-brand">
        <a class="navbar-item" href="http://bulma.io">
          <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
        </a>
        

        <div class="navbar-burger burger" data-target="navMenubd-example">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navMenubd-example" class="navbar-menu">
        <div class="navbar-end">
          <a class="navbar-item"
          @click="changeLanguage">
          {{ $t('utils.locale') }}
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
  export default{
    methods:{
      changeLanguage: function() {
        let locale = 'en'
        if (this.$store.getters.locale == 'en') {
          locale = 'ar';
        };
        return this.$store.commit('setLocale', locale);
      }
    },
  };
</script>
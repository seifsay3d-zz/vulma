// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import directives from './directives';
import plugins from './plugins';
import translation from './translations';

Vue.config.productionTip = false;
Vue.http.options.root = 'https://jsonplaceholder.typicode.com/';
Vue.http.options.emulateJSON = true;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});

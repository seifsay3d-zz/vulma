// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueResource from 'vue-resource';
import VueProgressBar from 'vue-progressbar';
import VueResourceProgressBarInterceptor from 'vue-resource-progressbar-interceptor';
import VueLazyImage from 'vue-lazy-images';
import VueCarousel from 'vue-carousel';
import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon';
import Vue2Filters from 'vue2-filters';
import App from './App';
import router from './router';

Vue.component('icon', Icon);
Vue.use(VueResource);
Vue.use(VueProgressBar, {
  color: 'green',
  failedColor: 'red',
  thickness: '3px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300,
  },
  autoRevert: true,
  location: 'top',
  inverse: false,
});
Vue.use(VueResourceProgressBarInterceptor);
Vue.use(VueLazyImage);
Vue.use(VueCarousel);
Vue.use(Vue2Filters);
Vue.config.productionTip = false;
Vue.http.options.root = 'http://ecaffe.nbhood.com/api/';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});

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
import VueAnalytics from 'vue-analytics';
import * as VueGoogleMaps from 'vue2-google-maps';
import SocialSharing from 'vue-social-sharing';
import App from './App';
import router from './router';

Vue.use(SocialSharing);
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBvWE_sIwKbWkiuJQOf8gSk9qzpO96fhfY',
    libraries: 'places',
  },
});
Vue.use(VueAnalytics, {
  id: 'UA-XXX-X',
  router,
});
Vue.component('icon', Icon);
Vue.use(VueResource);
Vue.use(VueProgressBar);
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

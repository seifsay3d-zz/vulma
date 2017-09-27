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
import FlagIcon from 'vue-flag-icon';
import { directive as onClickaway } from 'vue-clickaway';
import Vue2Filters from 'vue2-filters';
import VueAnalytics from 'vue-analytics';
import * as VueGoogleMaps from 'vue2-google-maps';
import SocialSharing from 'vue-social-sharing';
import Paginate from 'vuejs-paginate';
import VueTimeago from 'vue-timeago';
import VueI18n from 'vue-i18n';
import VueScrollTo from 'vue-scrollto';
import Vuex from 'vuex';
import createPersist from 'vuex-localstorage';
import App from './App';
import router from './router';
import store from './store';
import translation from './translations';

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
Vue.use(VueResource);
Vue.use(VueProgressBar);
Vue.use(VueResourceProgressBarInterceptor);
Vue.use(VueLazyImage);
Vue.use(VueCarousel);
Vue.use(Vue2Filters);
Vue.component('paginate', Paginate);
Vue.component('icon', Icon);
Vue.use(Vuex);
Vue.use(VueI18n);
Vue.use(FlagIcon);
Vue.use(VueScrollTo, {
     container: "body",
     duration: 500,
     easing: "ease",
     offset: 0,
     cancelable: true,
     onDone: false,
     onCancel: false,
     x: false,
     y: true
 });
Vue.directive('onClickaway', onClickaway);

Vue.directive('background', {
  inserted: function created(el, value) {
    const element = el;
    element.style.backgroundImage = `url(${value.value})`;
    element.style.backgroundSize = 'cover';
    element.style.backgroundRepeat = 'none';
    element.style.backgroundPosition = 'center';
  },
});
Vue.use(VueTimeago, {
  name: 'timeago', // component name, `timeago` by default
  locale: 'en-US',
  locales: {
    // you will need json-loader in webpack 1
    'en-US': require('vue-timeago/locales/en-US.json')
  }
});
let app = {};

// Create VueI18n instance with options
const translations = new VueI18n({
  locale: store.getters.locale, // set locale
  translation, // set locale messages
});

Vue.config.productionTip = false;
Vue.http.options.root = 'http://placeholder.com/api/';
Vue.http.options.emulateJSON = true;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});

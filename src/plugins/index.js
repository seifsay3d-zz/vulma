import Vue from 'vue';
import VueResource from 'vue-resource';
import VueProgressBar from 'vue-progressbar';
import VueResourceProgressBarInterceptor from 'vue-resource-progressbar-interceptor';
import VueLazyImage from 'vue-lazy-images';
import VueCarousel from 'vue-carousel';
import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon';
import FlagIcon from 'vue-flag-icon';
import Vue2Filters from 'vue2-filters';
import VueAnalytics from 'vue-analytics';
import * as VueGoogleMaps from 'vue2-google-maps';
import SocialSharing from 'vue-social-sharing';
import Paginate from 'vuejs-paginate';
import VueTimeago from 'vue-timeago';
import VueI18n from 'vue-i18n';
import VueScrollTo from 'vue-scrollto';
import createPersist from 'vuex-localstorage';
import router from '../router';

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

Vue.use(VueTimeago, {
  name: 'timeago', // component name, `timeago` by default
  locale: 'en-US',
  locales: {
    // you will need json-loader in webpack 1
    'en-US': require('vue-timeago/locales/en-US.json')
  }
});

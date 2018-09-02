import Vue from 'vue';
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
import vMediaQuery from 'v-media-query';
import checkView from 'vue-check-view'
import axios from 'axios';
import VueAxios from 'vue-axios';
import VTooltip from 'v-tooltip'
import Buefy from 'buefy'
import vueSlider from 'vue-slider-component';
import VeeValidate from 'vee-validate';
import Notifications from 'vue-notification'
import { VueAuthenticate } from 'vue-authenticate';
import ReadMore from 'vue-read-more';

Vue.use(ReadMore);
Vue.use(Notifications)
Vue.use(VeeValidate);
Vue.component('vue-slider',vueSlider);
Vue.use(Buefy);
Vue.use(VueAxios, axios);
Vue.use(checkView)
Vue.use(VTooltip);
Vue.use(SocialSharing);
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBvWE_sIwKbWkiuJQOf8gSk9qzpO96fhfY',
    libraries: 'places',
  },
});
Vue.use(vMediaQuery, {
  variables: {
    tablet: '770px',
    miniLaptop: '990px',
  },
});
Vue.use(VueAnalytics, {
  id: 'UA-XXX-X',
  router,
});
Vue.use(VueLazyImage);
Vue.use(VueCarousel);
Vue.use(Vue2Filters);
Vue.component('paginate', Paginate);
Vue.component('icon', Icon);
Vue.use(VueI18n);
Vue.use(FlagIcon);
Vue.use(VueScrollTo, {
     container: "body",
     duration: 800,
     easing: "ease",
     offset: -70,
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

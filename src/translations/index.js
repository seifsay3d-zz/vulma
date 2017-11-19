import Vue from 'vue';
import store from '../store';
import messages from './messages';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: store.getters.locale, // set locale
  messages: messages, // set locale messages
});

export default i18n;
import createPersist from 'vuex-localstorage';
import translations from '@/translations';

const state = {
    locale: 'en',
  };
const getters = {
    locale: function getLocale(state) {
          return state.locale;
    },
  };
const mutations = {
    setLocale(state, locale) {
      state.locale = locale;
      translations.locale = locale;
    },
  };
const plugins = [createPersist({
    namespace: 'namespace-for-state',
    initialState: {},
    expires: 7 * 24 * 60 * 60 * 1e3,
  })];

export default {
    state,
    mutations,
    getters,
    plugins
}
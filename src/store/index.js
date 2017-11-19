import Vue from 'vue';
import Vuex from 'vuex';
import translation from './modules/translation';
import consumeRest from './modules/consumeRest';

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        translation,
        consumeRest,
    },
})
import Vue from 'vue';
import { directive as onClickaway } from 'vue-clickaway';

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
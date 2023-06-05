import './lib/replacePublicPath';

import Vue from 'vue';

import './styles/main.less';
import './blocks';
import router from './router';
import App from './app.vue';

import store from './store';
import getUser from './lib/getUser';
import './mixins/global';

store.commit('setBunker', window.BUNKER);
store.commit('setServerTime', window.SERVER_TIME);
if (window.USER) {
  store.commit('setUser', getUser(window.USER));
}

Vue.config.productionTip = false;

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  store,
  router,
  render: (h) => h(App),
});

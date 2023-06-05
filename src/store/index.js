import Vue from 'vue';
import Vuex from 'vuex';
import { clone } from '@/lib/tools';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bunker: {},
    windowWidth: 0,
    windowHeight: 0,
    lessVars: null,
    serverTime: null,
    user: null,
  },
  mutations: {
    setBunker(state, bunker) {
      state.bunker = clone(bunker);
    },
    setServerTime(state, time) {
      state.serverTime = time;
    },
    setUser(state, user) {
      state.user = clone(user);
    },
    setLessVars(state, vars) {
      state.lessVars = clone(vars);
    },
    setWindowSize(state, { width, height }) {
      state.windowWidth = width;
      state.windowHeight = height;
    },
  },
  getters: {
    isAuthorized(state) {
      return !!state.user.isAuthorized;
    },
    hasSubscription(state) {
      return !!state.user.integrations?.items?.some(
        (item) => item.service === 'yandex' && item.subscription
      );
    },
    currentYear(state) {
      return new Date(state.serverTime * 1000).getFullYear();
    },
    isDesktopOnly(state) {
      return !!window.matchMedia(state.cssVars.desktopOnly).matches;
    },
    isTablet(state) {
      return !!window.matchMedia(state.cssVars.tablet).matches;
    },
    isMobile(state) {
      return !!window.matchMedia(state.cssVars.mobile).matches;
    },
    isMobileSmall(state) {
      return !!window.matchMedia(state.cssVars.mobileSmall).matches;
    },
  },
});

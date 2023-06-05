<template>
  <div class="app">
    <page-main />
  </div>
</template>

<script>
import lessVars from '@/styles/vars.less';
import PageMain from '@/pages/main/page-main.vue';

export default {
  components: {
    PageMain,
  },
  created() {
    this.onWindowResize();
    window.addEventListener('resize', this.onWindowResize);
  },
  destroyed() {
    window.removeEventListener('resize', this.onWindowResize);
  },
  methods: {
    onWindowResize() {
      this.$store.commit('setLessVars', lessVars);
    },
  },
};
</script>

<style src="./app.less" lang="less" />

<template>
  <div class="page-main container">
    <header-block :menu="menu" />
    <main-block
      :slider="slider"
      :films="films"
      :podcasts="podcasts"
      :materials="materials"
      :recommendations="recommendations"
    />
    <footer-block />
  </div>
</template>

<script>
export default {
  name: 'page-main',
  computed: {
    menu() {
      return this.$store.state.bunker.menu;
    },
    slider() {
      return this.$store.state.bunker.slider;
    },
    films() {
      return this.$store.state.bunker.films;
    },
    podcasts() {
      return this.$store.state.bunker.podcasts;
    },
    materials() {
      return this.$store.state.bunker.materials;
    },
    recommendations() {
      return this.$store.state.bunker.recommendations;
    },
  },
};
</script>

<style src="./page-main.less" lang="less" />

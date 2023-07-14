<template>
  <div class="main">
    <about-block />
    <afisha-block />
    <about-partner-block />
    <event-block :slider="slider" />
    <films-block :films="films" />
    <podcasts-block :podcasts="podcasts" />
    <afisha-event-block />
    <materials-block :materials="materials" />
    <recommendations-block :recommendations="recommendations" />
  </div>
</template>

<script>
export default {
  name: 'main-block',
  props: {
    slider: {
      type: Array,
      required: true,
    },
    films: {
      type: Array,
      required: true,
    },
    podcasts: {
      type: Array,
      required: true,
    },
    materials: {
      type: Array,
      required: true,
    },
    recommendations: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style src="./main-block.less" lang="less" />

<template>
  <main class="main">
    <about-block />
    <afisha-block />
    <about-partner-block />
    <event-block :events="events" />
    <films-block :films="films" />
    <podcasts-block :podcasts="podcasts" />
    <afisha-event-block :afisha-event="afishaEvent" />
    <materials-block :materials="materials" />
    <recommendations-block :recommendations="recommendations" />
  </main>
</template>

<script>
export default {
  name: 'main-block',
  props: {
    events: {
      type: Object,
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
    afishaEvent: {
      type: Object,
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

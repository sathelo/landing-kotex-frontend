<template>
  <div class="page-main container">
    <header-block :menu="menu" />
    <main-block
      :events="events"
      :films="films"
      :podcasts="podcasts"
      :afisha-event="afishaEvent"
      :materials="materials"
      :recommendations="recommendations"
    />
    <footer-block />
  </div>
</template>

<script>
import menu from '@/data/menu';
import events from '@/data/events';
import films from '@/data/films';
import podcasts from '@/data/podcasts';
import afishaEvent from '@/data/afisha-event';
import materials from '@/data/materials';
import recommendations from '@/data/recommendations';

export default {
  name: 'page-main',
  data() {
    return {
      menu,
      events,
      films,
      podcasts,
      afishaEvent,
      materials,
      recommendations,
    };
  },
};
</script>

<style src="./page-main.less" lang="less" />

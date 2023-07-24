<template>
  <section class="podcasts">
    <podcasts-info-block />
    <podcasts-cards-block :podcasts="slides" :slides-per-view="slidesPerView" />
  </section>
</template>

<script>
export default {
  name: 'podcasts-block',
  props: {
    podcasts: {
      type: Array,
      required: true,
    },
  },
  data() {
    return { slidesPerView: 3 };
  },
  computed: {
    slides() {
      const requiredSlidesLength = this.slidesPerView * 2;
      if (this.podcasts.length >= requiredSlidesLength) return this.podcasts;
      const list = Array.from(Array(requiredSlidesLength))
        .map(() => [...this.podcasts])
        .flat();
      return list.slice(0, requiredSlidesLength);
    },
  },
};
</script>

<style src="./podcasts-block.less" lang="less" />

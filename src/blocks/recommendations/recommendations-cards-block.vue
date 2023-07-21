<template>
  <section class="recommendations-cards">
    <a
      v-for="(recommendation, recommendationIndex) in recommendations"
      :key="recommendationIndex"
      :href="recommendation.link"
      :target="recommendation.target"
      class="recommendations-cards-card btn"
    >
      <img
        :src="getStaticUrl(recommendation.image)"
        alt="photo"
        class="recommendations-cards-card__photo"
      />

      <div class="recommendations-cards-card-info">
        <div class="recommendations-cards-card-info__title" v-html="recommendation.title" />
        <reviews-drops-block
          :rating="recommendation.rating"
          :max-rating="recommendation.maxRating"
        />
      </div>
    </a>
  </section>
</template>

<script>
export default {
  name: 'recommendations-cards-block',
  props: {
    recommendations: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style src="./recommendations-cards-block.less" lang="less" />

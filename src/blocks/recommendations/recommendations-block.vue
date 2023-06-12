<template>
  <div class="recommendations">
    <div class="recommendations-info">
      <div class="recommendations-info__header">
        Kotex<sup class="reg">&reg;</sup> рекомендует при первой менструации
      </div>
    </div>

    <div class="recommendations-cards">
      <div v-for="(item, id) in recommendations" :key="id" class="recommendations-cards-card">
        <img
          :src="getStaticUrl(item.item.image)"
          alt="photo"
          class="recommendations-cards-card__photo"
        />

        <div class="recommendations-cards-card-info">
          <div class="recommendations-cards-card-info__title">{{ item.item.title }}</div>
          <reviews-drops-block :rating="item.item.rating" :max-rating="item.item.maxRating" />
        </div>
      </div>
    </div>

    <a href="#" target="_blank" class="recommendations-btn btn">
      <div class="recommendations-btn__text">Все продукты</div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'recommendations-block',
  computed: {
    recommendations() {
      return this.$store.state.bunker.recommendations;
    },
  },
};
</script>

<style src="./recommendations-block.less" lang="less"></style>

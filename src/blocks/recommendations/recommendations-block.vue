<template>
  <section class="recommendations">
    <recommendations-info-block />
    <recommendations-cards-block :recommendations="recommendations" />
    <a href="#" target="_blank" class="recommendations-btn btn">
      <div class="recommendations-btn__text">Все продукты</div>
    </a>
  </section>
</template>

<script>
export default {
  name: 'recommendations-block',
  props: {
    recommendations: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style src="./recommendations-block.less" lang="less" />

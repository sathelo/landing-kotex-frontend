<template>
  <div class="calendar-card" :class="{ 'calendar-card--active': isActive }">
    <div class="calendar-card-info">
      <div class="calendar-card-info__title">{{ title }}</div>
      <div class="calendar-card-info__subtitle">{{ subtitle }}</div>
    </div>

    <a :href="link.href" :target="link.target" class="calendar-card-btn">
      <img
        :src="getStaticUrl('btn-gradient-more.png')"
        alt="more"
        class="calendar-card-btn__more btn"
      />
    </a>
  </div>
</template>

<script>
export default {
  name: 'afisha-event-calendar-card-block',
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    link: {
      type: Object,
      required: true,
      validator(value) {
        return (
          Object.keys(value).includes('href') &&
          Object.keys(value).includes('target') &&
          Object.keys(value).length === 2
        );
      },
    },
    isActive: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style src="./afisha-event-calendar-card-block.less" lang="less"></style>

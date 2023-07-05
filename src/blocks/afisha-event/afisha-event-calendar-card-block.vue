<template>
  <div class="calendar-card">
    <div class="calendar-card-info">
      <div class="calendar-card-info__title">{{ title }}</div>
      <div class="calendar-card-info__subtitle">{{ titleType }}</div>
    </div>

    <a :href="link" target="_blank" class="calendar-card-btn">
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
    type: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      types: [
        {
          id: 'cinema',
          title: 'Кино',
          type: 'cinema',
        },
        {
          id: 'show',
          title: 'Шоу',
          type: null,
        },
        {
          id: 'theatre',
          title: 'Театр',
          type: 'theatre',
        },
        {
          id: 'quest',
          title: 'Квесты',
          type: 'quest',
        },
        {
          id: 'excursions',
          title: 'Экскурсии',
          type: null,
        },
        {
          id: 'concert',
          title: 'Концерты',
          type: 'concert',
        },
        {
          id: 'art',
          title: 'Выставки',
          type: 'art',
        },
      ],
    };
  },
  computed: {
    titleType() {
      return this.types.filter((t) => t.type === this.$props.type)[0]?.title;
    },
  },
};
</script>

<style src="./afisha-event-calendar-card-block.less" lang="less"></style>

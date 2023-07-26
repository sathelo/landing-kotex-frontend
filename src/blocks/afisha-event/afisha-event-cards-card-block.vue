<template>
  <div class="afisha-event-cards-card">
    <div class="afisha-event-cards-card-info">
      <div class="afisha-event-cards-card-info__title">{{ title }}</div>
      <div class="afisha-event-cards-card-info__subtitle">
        {{ formatDatesToString }} / {{ type }}
      </div>
    </div>

    <a :href="link" target="_blank" class="afisha-event-cards-card-btn">
      <img
        :src="getStaticUrl('ui/btn-more--gradient.png')"
        alt="more"
        class="afisha-event-cards-card-btn__more btn"
      />
    </a>
  </div>
</template>

<script>
export default {
  name: 'afisha-event-cards-card-block',
  props: {
    title: {
      type: String,
      required: true,
    },
    dates: {
      type: Array,
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
  computed: {
    formatDatesToString() {
      return this.$props.dates
        .map((date) => {
          const data = new Date(date);
          const day = data.getDate();
          const month = data.getMonth();
          return `${day}.${this.defineMonth(month)}`;
        })
        .join(', ');
    },
  },
  methods: {
    /**
     * Возвращает строковое представление месяца с ведущим нулем, если номер месяца меньше 10.
     * @param {number} month - Номер месяца.
     * @returns {string} - Строковое представление месяца с ведущим нулем, если номер месяца меньше 10.
     */
    defineMonth(month) {
      return month < 10 ? `0${month}` : month;
    },
  },
};
</script>

<style src="./afisha-event-cards-card-block.less" lang="less" />

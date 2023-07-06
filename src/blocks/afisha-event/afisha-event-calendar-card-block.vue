<template>
  <div class="calendar-card">
    <div class="calendar-card-info">
      <div class="calendar-card-info__title">{{ title }}</div>
      <div class="calendar-card-info__subtitle">{{ datesString }} / {{ titleType }}</div>
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
  data() {
    return {
      days: ['Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье', 'Понедельник', 'Вторник'],
    };
  },
  computed: {
    titleType() {
      return this.$store.state.bunker.calendar.types.filter((t) => t.type === this.$props.type)[0]
        ?.title;
    },
    datesString() {
      return this.$props.dates
        .map((date) => {
          const data = new Date(date);
          const day = data.getDate();
          const month = data.getMonth();
          return `${day} ${this.defineMonth(month).toLowerCase()}, ${this.getWeekDay(
            data
          ).toLowerCase()}`;
        })
        .join('; ');
    },
  },
  methods: {
    defineMonth(month) {
      return this.$store.state.bunker.calendar.months.genitive[month];
    },
    getWeekDay(date) {
      return this.days[date % 7];
    },
  },
};
</script>

<style src="./afisha-event-calendar-card-block.less" lang="less"></style>

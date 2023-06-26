<template>
  <div class="calendar">
    <div class="calendar-events">
      <div
        v-for="(event, eventId) in events"
        :key="eventId"
        class="calendar-events-event"
        :class="{ 'calendar-events-event--active': event.event.isActive }"
        @click="chooseEvent(eventId)"
      >
        {{ event.event.title }}
      </div>
    </div>

    <div class="calendar-months">
      <div class="calendar-months__wrapper">
        <div v-for="(month, monthId) in sortedMonths" :key="monthId" class="calendar-months-month">
          <div class="calendar-months-month__title">{{ month }}</div>
          <div class="calendar-months-month-dates">
            <div
              v-for="(date, dateId) in getDates(month)"
              :key="dateId"
              class="calendar-months-month-dates-date"
            >
              <div class="calendar-months-month-dates-date__number">{{ date }}</div>
              <div class="calendar-months-month-dates-date__name">{{ getWeekDay(date) }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="calendar-cards">
      <afisha-event-calendar-card-block
        v-for="(card, cardIndex) in cards"
        :key="cardIndex"
        :title="card.card.title"
        :subtitle="card.card.subtitle"
        :link="card.card.link"
        :is-active="card.card.isActive"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'afisha-event-calendar-block',
  data() {
    return {
      days: ['СР', 'ЧТ', 'ПТ', 'СБ', 'ВС', 'ПН', 'ВТ'],
      minMonths: 0,
      maxMonths: 3,
    };
  },
  computed: {
    cards() {
      return this.$store.state.bunker.calendar.cards;
    },
    events() {
      return this.$store.state.bunker.calendar.events;
    },
    months() {
      return this.$store.state.bunker.calendar.months;
    },
    sortedMonths() {
      return this.$store.state.bunker.calendar.months.slice(
        this.minMonths,
        this.minMonths + this.maxMonths
      );
    },
  },
  mounted() {
    this.minMonths = this.$store.getters.currentMonth - 1;
  },
  methods: {
    chooseEvent(currentEventId) {
      this.$store.state.bunker.calendar.events.forEach((e, eId) => {
        if (e.event.isActive === true && eId !== currentEventId) e.event.isActive = false;
        if (eId === currentEventId) e.event.isActive = true;
      });
    },
    getLastDay(month) {
      const year = this.$store.getters.currentYear;
      const nMonth = this.getNumberMonth(month);
      const lastDay = new Date(year, nMonth, 0).getDate();
      return lastDay;
    },
    range(start, end) {
      const arr = [];
      for (let counter = start; counter <= end; counter += 1) {
        if (counter <= end) {
          arr.push(counter);
        }
      }
      return arr;
    },
    getDates(month) {
      if (month === this.months[this.$store.getters.currentMonth - 1]) {
        const firstDay = new Date().getDate();
        const lastDay = this.getLastDay();
        return this.range(firstDay, lastDay);
      }
      const firstDay = 1;
      const lastDay = this.getLastDay(month);
      return this.range(firstDay, lastDay);
    },
    getWeekDay(date) {
      return this.days[date % 7];
    },
    getNumberMonth(month) {
      return this.$store.state.bunker.calendar.months.indexOf(month);
    },
  },
};
</script>

<style src="./afisha-event-calendar-block.less" lang="less"></style>

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
        <div v-for="(month, monthId) in months" :key="monthId" class="calendar-months-month">
          <div class="calendar-months-month__title">{{ month }}</div>
          <div class="calendar-months-month-dates">
            <div
              v-for="(date, dateId) in dates"
              :key="dateId"
              class="calendar-months-month-dates-date"
            >
              {{ date }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'afisha-event-calendar-block',
  computed: {
    events() {
      return this.$store.state.bunker.calendar.events;
    },
    months() {
      return this.$store.state.bunker.calendar.months;
    },
    dates() {
      const firstDay = new Date().getDate();
      const lastDay = this.getLastDay();
      return this.range(firstDay, lastDay);
    },
  },
  methods: {
    chooseEvent(currentEventId) {
      this.$store.state.bunker.calendar.events.forEach((e, eId) => {
        if (e.event.isActive === true && eId !== currentEventId) e.event.isActive = false;
        if (eId === currentEventId) e.event.isActive = true;
      });
    },
    getLastDay() {
      const year = this.$store.getters.currentYear;
      const month = this.$store.getters.currentMonth;
      const lastDay = new Date(year, month, 0).getDate();
      return lastDay;
    },
    range(start, end) {
      const arr = [];
      for (let counter = start; counter < end; counter += 1) {
        if (counter < end) {
          arr.push(counter);
        }
      }
      return arr;
    },
  },
};
</script>

<style src="./afisha-event-calendar-block.less" lang="less"></style>

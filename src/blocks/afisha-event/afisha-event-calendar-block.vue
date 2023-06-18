<template>
  <div class="calendar">
    <div class="calendar-events">
      <div
        v-for="(event, eventId) in events"
        :key="eventId"
        class="calendar-events-event"
        :class="{ 'calendar-events-event--active': event.event.isActive }"
      >
        {{ event.event.title }}
      </div>
    </div>

    <div class="calendar-months">
      <div class="calendar-months-month">123</div>
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
  },
};
</script>

<style src="./afisha-event-calendar-block.less" lang="less"></style>

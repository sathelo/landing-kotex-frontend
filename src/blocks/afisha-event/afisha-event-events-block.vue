<template>
  <section class="afisha-event-events">
    <div
      v-for="(event, eventIndex) in events"
      :key="eventIndex"
      class="afisha-event-events-event"
      :class="{ 'afisha-event-events-event--active': eventIndex === eventActive }"
      @click="chooseEvent(eventIndex)"
    >
      {{ event }}
    </div>
  </section>
</template>

<script>
export default {
  name: 'afisha-event-events-block',
  props: {
    events: {
      type: Array,
      required: true,
    },
    eventActive: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    chooseEvent(eventId) {
      this.$emit('chooseEvent', eventId);
    },
  },
};
</script>

<style src="./afisha-event-events-block.less" lang="less" />

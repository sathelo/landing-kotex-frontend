<template>
  <section class="afisha-event-events">
    <div
      v-for="(event, eventIndex) in events"
      :key="eventIndex"
      class="afisha-event-events-event"
      :class="{ 'afisha-event-events-event--active': event === eventActive }"
      @click="chooseEvent(event)"
    >
      {{ types[event] }}
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
      type: String,
      required: true,
    },
    types: {
      type: Object,
      required: true,
    },
  },
  methods: {
    /**
     * Выбирает событие и генерирует событие выбора.
     * @param {string} event - Выбранное событие.
     * @returns {void}
     * @emits chooseEvent
     */
    chooseEvent(event) {
      this.$emit('chooseEvent', event);
    },
  },
};
</script>

<style src="./afisha-event-events-block.less" lang="less" />

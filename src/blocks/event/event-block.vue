<template>
  <section class="event">
    <event-info-block />
    <event-broadcast-block :release-record="releaseRecord" />
    <event-slider-block :slider="slider" :photo-from-broadcast="photoFromBroadcast" />
  </section>
</template>

<script>
export default {
  name: 'event-block',
  props: {
    events: {
      type: Object,
      required: true,
    },
  },
  data() {
    const { releaseRecord, slider } = this.$props.events;
    return {
      releaseRecord,
      slider,
      photoFromBroadcast: 20,
    };
  },
};
</script>

<style src="./event-block.less" lang="less" />

<template>
  <section id="event" class="event">
    <event-info-block />
    <event-broadcast-block :release-record="releaseRecord" />
    <event-swiper-block :photo-from-broadcast="photoFromBroadcast" />
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
    const { releaseRecord, photoFromBroadcast } = this.$props.events;
    return {
      releaseRecord,
      photoFromBroadcast,
    };
  },
};
</script>

<style src="./event-block.less" lang="less" />

<template>
  <section class="event-broadcast">
    <iframe
      v-if="link"
      class="event-broadcast__video"
      :src="link"
      title="YouTube Video Player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    />

    <div v-else class="event-broadcast-close__wrapper">
      <div class="event-broadcast-live">
        <div class="event-broadcast-live__status" />
        <div class="event-broadcast-live__text">трансляция</div>
      </div>

      <div class="event-broadcast-close">
        <div class="event-broadcast-close__title">Скоро здесь появится запись трансляции</div>
        <lock-block class="event-broadcast-close__lock" s="40px" p="25px" s-image="16px" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'event-broadcast-block',
  props: {
    releaseRecord: {
      type: Object,
      required: true,
    },
  },
  data() {
    const { link } = this.$props.releaseRecord;
    return {
      link,
    };
  },
};
</script>

<style lang="less" src="./event-broadcast-block.less" />

<template>
  <section class="event-broadcast">
    <iframe
      v-if="releaseRecord"
      class="event-broadcast__video"
      :src="releaseRecord"
      title="YouTube Video Player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    />

    <div v-else class="event-broadcast-close__wrapper">
      <div v-if="!isTablet" class="event-broadcast-live">
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
import { mapGetters } from 'vuex';

export default {
  name: 'event-broadcast-block',
  props: {
    releaseRecord: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapGetters({ isTablet: 'isTablet' }),
  },
};
</script>

<style lang="less" src="./event-broadcast-block.less"></style>

<template>
  <div class="afisha-event">
    <div class="afisha-event-heart">
      <img
        :src="getStaticUrl('heart-fill.svg')"
        alt="heart-fill"
        class="afisha-event-heart__fill"
      />
      <img
        :src="getStaticUrl('heart-empty.svg')"
        alt="heart-empty"
        class="afisha-event-heart__empty"
      />
    </div>

    <div class="afisha-event-info">
      <div class="afisha-event-info__title">Афиша событий</div>
      <div class="afisha-event-info__subtitle">
        Подборка событий для совместного посещения родителями и&nbsp;подростками
      </div>
      <div class="afisha-event-info-select">
        <div class="afisha-event-info-select__text">Москва</div>
        <img
          :src="getStaticUrl('arrow-bottom-ico.svg')"
          alt="arrow-bottom"
          class="afisha-event-info-select__ico"
        />
      </div>
    </div>

    <afisha-event-calendar-block />
  </div>
</template>

<script>
// eslint-disable-next-line import/extensions
import { Event } from '../../api/afisha-event.js';

export default {
  name: 'afisha-event-block',
  methods: {
    async afishaEvent() {
      // eslint-disable-next-line no-return-await
      return await Event.getData(0);
    },
  },
};
</script>

<style src="./afisha-event-block.less" lang="less"></style>

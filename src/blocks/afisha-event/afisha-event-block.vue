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
        <div class="afisha-event-info-select__text">{{ afishaEvent().items }}</div>
        <img
          :src="getStaticUrl('arrow-bottom-ico.svg')"
          alt="arrow-bottom"
          class="afisha-event-info-select__ico"
        />
      </div>
    </div>

    <afisha-event-calendar-block />

    <a href="#" target="_blank" class="afisha-event-btn btn">
      <div class="afisha-event-btn__text">Показать больше</div>
    </a>
  </div>
</template>

<script>
// eslint-disable-next-line import/extensions
import { Event } from '../../api/afisha-event.js';

export default {
  name: 'afisha-event-block',
  data() {
    return {
      cityId: 0, // Moscow default
    };
  },
  methods: {
    async afishaEvent() {
      // eslint-disable-next-line no-return-await
      return await Event.getData(this.cityId);
    },
  },
};
</script>

<style src="./afisha-event-block.less" lang="less"></style>

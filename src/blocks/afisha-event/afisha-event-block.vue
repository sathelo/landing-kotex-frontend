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
      <div class="afisha-event-info-select" @click="openSelect">
        <div class="afisha-event-info-select__text">Москва</div>
        <img
          :src="getStaticUrl('arrow-bottom-ico.svg')"
          alt="arrow-bottom"
          class="afisha-event-info-select__ico"
        />

        <div v-if="isSelect" class="afisha-event-info-select--active">
          <div class="afisha-event-info-select-cities">
            <div
              v-for="(city, cityId) in testList"
              :key="cityId"
              class="afisha-event-info-select-cities-city"
            >
              <div class="afisha-event-info-select-city__name">{{ city }}</div>
            </div>
          </div>
        </div>
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
      currentCityId: 0, // Moscow default
      isSelect: false,
      testList: [
        'asd',
        '123',
        '321w',
        '9892',
        'asd',
        '123',
        '321w',
        '9892',
        'asd',
        '123',
        '321w',
        '9892',
      ],
    };
  },
  methods: {
    openSelect() {
      this.isSelect = !this.isSelect;
    },
    async afishaEvent() {
      // eslint-disable-next-line no-return-await
      return await Event.getData(this.currentCityId);
    },
  },
};
</script>

<style src="./afisha-event-block.less" lang="less"></style>

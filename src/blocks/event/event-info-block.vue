<template>
  <section class="event-info">
    <div class="event-info__header">Международный День женского здоровья</div>

    <div class="event-info__title">
      с&nbsp;Kotex<sup class="reg">&reg;</sup> на&nbsp;&laquo;Плюс Дача&raquo;
    </div>

    <div class="event-info__subtitle">
      28&nbsp;мая на&nbsp;площадке &laquo;Плюс Дача&raquo; бренд Kotex<sup class="reg">&reg;</sup>
      провёл мероприятие &laquo;Беседа о&nbsp;важном для мам и&nbsp;дочек&raquo;, посвященное
      Международному Дню женского здоровья, а&nbsp;также построению и&nbsp;укреплению отношений
      между родителями и&nbsp;подростками.
    </div>

    <a href="#" target="_blank" class="event-info-btn btn">
      <div class="event-info-btn__text">
        {{
          isTablet ? `${'Фото с&nbsp;мероприятия тут'}` : `${'Все фото с&nbsp;мероприятия ищи тут'}`
        }}
      </div>
      <img
        :src="getStaticUrl('icons/vk-ico--white.svg')"
        alt="vk-ico"
        class="event-info-btn__ico"
      />
    </a>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'event-info-block',
  computed: {
    ...mapGetters({ isTablet: 'isTablet' }),
  },
};
</script>

<style src="./event-info-block.less" lang="less" />

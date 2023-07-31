<template>
  <section id="about" class="about">
    <div class="about-info">
      <div class="about-info__title">
        &laquo;Твой первый раз&raquo; уникальный образовательный курс для родителей
        и&nbsp;подростков от&nbsp;бренда Kotex<sup class="reg">&reg;</sup> совместно с&nbsp;проектом
        Переход
      </div>

      <div class="about-info__subtitle">
        Расскажем всё об&nbsp;этапах и&nbsp;особенностях переходного возраста, поможем построить
        доверительные взаимоотношения и&nbsp;укрепить&nbsp;их, а&nbsp;также разобраться, как
        меняется поведение и&nbsp;организм в&nbsp;пубертатный период.
      </div>
    </div>

    <img
      :src="isTablet ? getStaticUrl('about/mobile-image-1.png') : getStaticUrl('about/image-1.png')"
      alt="photo"
      class="about__photo"
    />
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'about-block',
  computed: {
    ...mapGetters({ isTablet: 'isTablet' }),
  },
};
</script>

<style src="./about-block.less" lang="less" />

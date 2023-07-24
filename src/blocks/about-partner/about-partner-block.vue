<template>
  <section class="about-partner">
    <div class="about-partner-info">
      <img
        :src="getStaticUrl('logos/logo-perehod.svg')"
        alt="logo-perehod"
        class="about-partner-info__logo"
      />

      <div class="about-partner-info__title">
        Проект наставничества, который помогает Подросткам счастливо прожить переходный возраст,
        сформировать взрослую модель поведения и&nbsp;сохранить доверительные отношения
        с&nbsp;Родителями.
      </div>

      <a href="#" target="_blank" class="about-partner-info-btn btn">
        <div class="about-partner-info-btn__text">Узнать больше о&nbsp;&laquo;Переход&raquo;</div>
      </a>
    </div>

    <img
      :src="getStaticUrl('about-partner/image-1.png')"
      alt="photo"
      class="about-partner__photo"
    />
  </section>
</template>

<script>
export default {
  name: 'about-partner-block',
};
</script>

<style src="./about-partner-block.less" lang="less" />

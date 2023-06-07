<template>
  <div class="main">
    <div class="main-block">
      <div class="main-block__content">
        <div class="main-block-info">
          <div class="main-block-info__title">
            &laquo;Твой первый раз&raquo; уникальный образовательный курс для родителей
            и&nbsp;подростков от&nbsp;бренда Kotex<sup class="reg">&reg;</sup> совместно
            с&nbsp;проектом Переход
          </div>

          <div class="main-block-info__subtitle">
            Расскажем всё об&nbsp;этапах и&nbsp;особенностях переходного возраста, поможем построить
            доверительные взаимоотношения и&nbsp;укрепить&nbsp;их, а&nbsp;также разобраться, как
            меняется поведение и&nbsp;организм в&nbsp;пубертатный период.
          </div>
        </div>

        <img :src="getStaticUrl('photo-block-1.png')" alt="photo" class="main-block__photo" />
      </div>
    </div>

    <div class="main-block-2">
      <div class="main-block-2__content">
        <div class="main-block-2-info">
          <img
            :src="getStaticUrl('logo-perehod.svg')"
            alt="logo-perehod"
            class="main-block__logo"
          />

          <div class="main-block-2-info__title">
            Проект наставничества, который помогает Подросткам счастливо прожить переходный возраст,
            сформировать взрослую модель поведения и&nbsp;сохранить доверительные отношения
            с&nbsp;Родителями.
          </div>

          <div class="main-block-2-info__btn">
            Расскажем всё об&nbsp;этапах и&nbsp;особенностях переходного возраста, поможем построить
            доверительные взаимоотношения и&nbsp;укрепить&nbsp;их, а&nbsp;также разобраться, как
            меняется поведение и&nbsp;организм в&nbsp;пубертатный период.
          </div>
        </div>

        <img :src="getStaticUrl('photo-block-1.png')" alt="photo" class="main-block__photo" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'main-block',
};
</script>

<style src="./main-block.less" lang="less" />

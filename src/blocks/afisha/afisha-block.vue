<template>
  <div class="afisha">
    <img
      :src="
        $store.getters.isTablet
          ? getStaticUrl('photo-block-for-mobile-2.png')
          : getStaticUrl('photo-block-2.png')
      "
      alt="photo"
      class="afisha__photo"
    />

    <div class="afisha-info">
      <img :src="getStaticUrl('logo-kotex-white.svg')" alt="logo-kotex" class="afisha-info__logo" />

      <div class="afisha-info__title">C&nbsp;заботой о&nbsp;каждой с&nbsp;первых месячных</div>

      <a href="#" target="_blank" class="afisha-info-btn btn">
        <div class="afisha-info-btn__text">Календарь месячных</div>
        <img :src="getStaticUrl('vk-ico-black.svg')" alt="vk-ico" class="afisha-info-btn__ico" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'afisha-block',
};
</script>

<style src="./afisha-block.less" lang="less"></style>

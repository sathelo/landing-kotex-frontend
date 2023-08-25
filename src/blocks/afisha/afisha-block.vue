<template>
  <section id="afisha" class="afisha">
    <img
      :src="getStaticUrl(isTablet ? 'afisha/mobile-image-1.png' : 'afisha/image-1.png')"
      alt="photo"
      class="afisha__photo"
    />

    <div class="afisha-info">
      <img
        :src="getStaticUrl('logos/logo-kotex--white.svg')"
        alt="logo-kotex"
        class="afisha-info__logo"
      />

      <div class="afisha-info__title">C&nbsp;заботой о&nbsp;каждой с&nbsp;первых месячных</div>

      <a href="#" target="_blank" class="afisha-info-btn btn">
        <div class="afisha-info-btn__text">Календарь месячных</div>
        <img
          :src="getStaticUrl('icons/vk-ico--black.svg')"
          alt="vk-ico"
          class="afisha-info-btn__ico"
        />
      </a>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'afisha-block',
  computed: {
    ...mapGetters({ isTablet: 'isTablet' }),
  },
};
</script>

<style src="./afisha-block.less" lang="less" />

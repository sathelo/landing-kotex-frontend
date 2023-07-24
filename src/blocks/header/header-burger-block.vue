<template>
  <section v-if="isVisible || !isTablet" class="header-burger-menu">
    <div :class="{ 'header-burger-menu-nav--active': isVisible }" class="header-burger-menu-nav">
      <a
        v-for="(items, itemsIndex) in menu"
        :key="itemsIndex"
        :href="items.item.link"
        :target="items.item.target"
        class="header-burger-menu-nav__item"
        v-html="items.item.title"
      />
      <a href="#" target="_blank" class="header-burger-menu-btn-calendar btn">
        <div class="header-burger-menu-btn-calendar__text">Календарь месячных</div>
        <img
          :src="getStaticUrl('icons/vk-ico--black.svg')"
          alt="vk-ico"
          class="afishaheader-burger-menu-btn-calendar__ico"
        />
      </a>
      <a href="#" target="_blank" class="header-burger-menu-btn__more btn"
        >Узнать больше о&nbsp;Kotex<sup class="reg">&reg;</sup></a
      >
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'header-burger-block',
  props: {
    menu: {
      type: Array,
      required: true,
    },
    isVisible: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    ...mapGetters({ isTablet: 'isTablet' }),
  },
  mounted() {
    document.body.style.overflow = 'hidden';
  },
  destroyed() {
    document.body.style.overflow = '';
  },
};
</script>

<style lang="less" src="./header-burger-block.less" />

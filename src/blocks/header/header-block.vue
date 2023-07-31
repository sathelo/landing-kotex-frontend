<template>
  <header class="header">
    <div class="header__content">
      <div class="header-logos">
        <a href="#" target="_blank" class="header-logos-logo">
          <img
            class="header-logos-logo__kotex"
            :src="getStaticUrl('logos/logo-kotex--red.svg')"
            alt="logo-kotex"
          />
        </a>

        <a href="#" target="_blank" class="header-logos-logo">
          <img
            class="header-logos-logo__perehod"
            :src="getStaticUrl('logos/logo-perehod.svg')"
            alt="logo-perehod"
          />
        </a>
      </div>

      <div class="header-menu">
        <div v-for="(menuItem, menuItemId) in menu" :key="menuItemId" class="header-menu-items">
          <a
            :href="menuItem.item.href"
            class="header-menu-items__item"
            v-html="menuItem.item.title"
          />
        </div>
      </div>

      <div
        class="header__btn"
        :class="{ 'header__btn--active': isBurgerMenu }"
        @click="changeVisibleBurgerMenu"
      >
        <span />
      </div>
    </div>

    <header-burger-block
      v-if="isTablet && isBurgerMenu"
      :menu="menu"
      :is-visible="isBurgerMenu"
      @changeVisibleBurgerMenu="changeVisibleBurgerMenu"
    />
  </header>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'header-block',
  props: {
    menu: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isBurgerMenu: false,
    };
  },
  computed: {
    ...mapGetters({ isTablet: 'isTablet' }),
  },
  methods: {
    changeVisibleBurgerMenu() {
      this.isBurgerMenu = !this.isBurgerMenu;
    },
  },
};
</script>

<style src="./header-block.less" lang="less" />

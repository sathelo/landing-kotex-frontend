<template>
  <div class="header">
    <div class="header__content">
      <div class="header-logos">
        <a href="#" target="_blank" class="header-logos-logo">
          <img
            class="header-logos-logo__kotex"
            :src="getStaticUrl('logo-kotex-red.svg')"
            alt="logo-kotex"
          />
        </a>

        <a href="#" target="_blank" class="header-logos-logo">
          <img
            class="header-logos-logo__perehod"
            :src="getStaticUrl('logo-perehod.svg')"
            alt="logo-perehod"
          />
        </a>
      </div>

      <div class="header-menu">
        <div v-for="(menuItem, menuItemId) in menu" :key="menuItemId" class="header-menu-item">
          <a
            :href="menuItem.item.link"
            :target="menuItem.item.target"
            class="header-menu-item__link"
            v-html="menuItem.item.title"
          />
        </div>
      </div>

      <div
        v-if="$store.getters.isTablet"
        class="header-menu-btn"
        :class="{ 'header-menu-btn--active': sideMenu }"
        @click="showSideMenu"
      >
        <span />
      </div>
    </div>

    <header-burger-block
      v-if="$store.getters.isTablet && sideMenu"
      :side-menu="sideMenu"
      :menu="menu"
    />
  </div>
</template>

<script>
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
      sideMenu: false,
    };
  },
  methods: {
    showSideMenu() {
      this.sideMenu = !this.sideMenu;
    },
  },
};
</script>

<style src="./header-block.less" lang="less" />

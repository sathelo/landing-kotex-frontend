<template>
  <div class="header">
    <div class="header__decs">
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
    </div>

    <div v-if="$store.getters.isTablet" class="header__mob">
      <div class="header-burger-menu" @click="showSideMenu">
        <div class="header-burger-menu__block">
          <div
            :class="{ 'header-burger-menu-nav--active': sideMenu }"
            class="header-burger-menu-nav"
          >
            <a
              v-for="(menuItem, menuItemId) in menu"
              :key="menuItemId"
              :href="menuItem.item.link"
              :target="menuItem.item.target"
              class="header-burger-menu-nav__item"
              v-html="menuItem.item.title"
            />
          </div>
          <div class="header-burger-menu-btn">
            <span />
          </div>
        </div>
      </div>
    </div>
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

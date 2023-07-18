<template>
  <div v-if="sideMenu" class="header-burger-menu">
    <div class="header-burger-menu__block">
      <div :class="{ 'header-burger-menu-nav--active': sideMenu }" class="header-burger-menu-nav">
        <a
          v-for="(menuItem, menuItemId) in menu"
          :key="menuItemId"
          :href="menuItem.item.link"
          :target="menuItem.item.target"
          class="header-burger-menu-nav__item"
          v-html="menuItem.item.title"
        />
        <a href="#" target="_blank" class="header-burger-menu-btn-calendar btn">
          <div class="header-burger-menu-btn-calendar__text">Календарь месячных</div>
          <img
            :src="getStaticUrl('vk-ico-black.svg')"
            alt="vk-ico"
            class="afishaheader-burger-menu-btn-calendar__ico"
          />
        </a>
        <a href="#" target="_blank" class="header-burger-menu-btn__more btn"
          >Узнать больше о&nbsp;Kotex<sup class="reg">&reg;</sup></a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header-burger-block',
  props: {
    menu: {
      type: Array,
      required: true,
    },
    sideMenu: {
      type: Boolean,
      required: true,
    },
  },
  mounted() {
    document.body.style.overflow = 'hidden';
  },
  destroyed() {
    document.body.style.overflow = '';
  },
};
</script>

<style lang="less" src="./header-burger-block.less"></style>

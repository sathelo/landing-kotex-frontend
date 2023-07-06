<template>
  <div class="header">
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
      <div v-for="(section, sectionId) in menu" :key="sectionId" class="header-menu-item">
        <a
          :href="section.item.link"
          :target="section.item.target"
          class="header-menu-item__link"
          v-html="section.item.title"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header-block',
  computed: {
    menu() {
      return this.$store.state.bunker.menu;
    },
  },
};
</script>

<style src="./header-block.less" lang="less" />

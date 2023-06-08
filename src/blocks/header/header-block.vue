<template>
  <div class="header">
    <div class="header-logos">
      <div class="header-logos-logo">
        <img
          class="header-logos-logo__kotex"
          :src="getStaticUrl('logo-kotex-red.svg')"
          alt="logo-kotex-red"
        />
      </div>
      <div class="header-logos-logo">
        <img
          class="header-logos-logo__perehod"
          :src="getStaticUrl('logo-perehod.svg')"
          alt="logo-perehod"
        />
      </div>
    </div>

    <div class="header-nav">
      <a
        v-for="(section, id) in menu"
        :key="id"
        :href="section.item.link"
        :target="section.item.target"
        class="header-nav-item"
      >
        {{ section.item.title }}
      </a>
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

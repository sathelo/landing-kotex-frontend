<template>
  <div :style="{ width: s, height: s, padding: p }" class="lock">
    <img
      :style="{ maxWidth: sImage }"
      :src="getStaticUrl('lock-ico.svg')"
      alt="lock-ico"
      class="lock__ico"
    />
  </div>
</template>

<script>
export default {
  name: 'lock-block',
  props: {
    s: {
      type: String,
      required: false,
      default: '120px',
    },
    p: {
      type: String,
      required: false,
      default: '40px 44px',
    },
    sImage: {
      type: String,
      required: false,
      default: 'auto',
    },
  },
};
</script>

<style src="./lock-block.less" lang="less"></style>

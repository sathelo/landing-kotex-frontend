<template>
  <div class="lock">
    <img :src="getStaticUrl('lock-ico.svg')" alt="lock-ico" class="lock__ico" />
  </div>
</template>

<script>
export default {
  name: 'lock-block',
};
</script>

<style src="./lock-block.less" lang="less"></style>

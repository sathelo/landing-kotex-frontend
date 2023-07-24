<template>
  <section class="materials-box">
    <materials-box-cards-block
      v-for="(materials, materialsIndex) in materialsBox"
      :key="materialsIndex"
      :materials="materials"
    />
  </section>
</template>

<script>
export default {
  name: 'materials-box-block',
  props: {
    materialsBox: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style src="./materials-box-block.less" lang="less" />

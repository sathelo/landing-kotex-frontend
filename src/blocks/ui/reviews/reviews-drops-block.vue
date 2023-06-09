<template>
  <div class="drops">
    <div v-for="(maxR, id) in maxRating" :key="id" class="drops-drop">
      <img v-if="checkRating(maxR)" :src="getStaticUrl('drop-filled.svg')" alt="drop-filled" />
      <img v-else :src="getStaticUrl('drop-empty.svg')" alt="drop-empty" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'reviews-drops-block',
  props: {
    rating: {
      type: String,
      required: true,
      validator(value) {
        return Number.isInteger(value) && value >= 0;
      },
    },
    maxRating: {
      type: String,
      required: true,
      validator(value) {
        return Number.isInteger(value) && value >= 0;
      },
    },
  },
  methods: {
    checkRating(number) {
      return this.$props.rating - number >= 0;
    },
  },
};
</script>

<style src="./reviews-drops-block.less" lang="less"></style>

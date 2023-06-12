<template>
  <div class="drops">
    <div v-for="(rat, id) in maxRating" :key="id" class="drops-drop">
      <img
        :src="checkRating(rat) ? getStaticUrl('drop-filled.svg') : getStaticUrl('drop-empty.svg')"
        alt="drop-filled"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'reviews-drops-block',
  props: {
    rating: {
      type: Number,
      required: true,
      validator(value) {
        return Number.isInteger(value) && value >= 0;
      },
    },
    maxRating: {
      type: Number,
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

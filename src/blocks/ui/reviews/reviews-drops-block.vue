<template>
  <section class="drops">
    <div v-for="(rat, ratIndex) in maxRating" :key="ratIndex" class="drops-drop">
      <img
        :src="
          isFilled(rat)
            ? getStaticUrl('icons/drop-filled--pink.svg')
            : getStaticUrl('icons/drop-empty--pink.svg')
        "
        alt="drop-filled"
        :class="isFilled(rat) ? 'drops-drop__filled' : 'drops-drop__empty'"
      />
    </div>
  </section>
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
    isFilled(number) {
      return this.$props.rating - number >= 0;
    },
  },
};
</script>

<style src="./reviews-drops-block.less" lang="less" />

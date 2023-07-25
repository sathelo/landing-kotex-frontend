<template>
  <section class="afisha-event-cards">
    <afisha-event-calendar-card-block
      v-for="(card, cardIndex) in filteredDataCity"
      :key="cardIndex"
      :title="card.title"
      :dates="card.dates"
      :type="card.type"
      :link="card.afisha_url"
      :types="types"
    />

    <button v-if="!isBtnMore" class="afisha-event-cards-btn btn" @click="addCard(4)">
      <div class="afisha-event-cards-btn__text">Показать больше</div>
    </button>
  </section>
</template>

<script>
export default {
  name: 'afisha-event-cards-block',
  props: {
    filteredDataCity: {
      type: Array,
      required: true,
    },
    types: {
      type: Array,
      required: true,
    },
    limitCard: {
      type: Number,
      required: true,
    },
    totalCards: {
      type: Number,
      required: true,
    },
  },
  computed: {
    isBtnMore() {
      return this.$props.filteredDataCity.length && this.$props.totalCards <= this.$props.limitCard;
    },
  },
  methods: {
    addCard(step) {
      this.$emit('addCard', step);
    },
  },
};
</script>

<style src="./afisha-event-cards-block.less" lang="less" />

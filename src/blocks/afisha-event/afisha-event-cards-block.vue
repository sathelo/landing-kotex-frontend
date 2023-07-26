<template>
  <section class="afisha-event-cards">
    <afisha-event-cards-card-block
      v-for="(card, cardIndex) in filteredDataCity"
      :key="cardIndex"
      class="afisha-event-cards__item"
      :title="card.title"
      :dates="card.dates"
      :type="types[card.type]"
      :link="card.afisha_url"
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
      type: Object,
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
      return this.$props.totalCards <= this.$props.limitCard;
    },
  },
  methods: {
    /**
     * Генерирует событие добавления карточки с указанным шагом.
     * @param {number} step - Шаг, увеличивает максимальное количество отображаемых карточек на странице на заданный шаг.
     * @returns {void}
     * @emits addCard
     */
    addCard(step) {
      this.$emit('addCard', step);
    },
  },
};
</script>

<style src="./afisha-event-cards-block.less" lang="less" />

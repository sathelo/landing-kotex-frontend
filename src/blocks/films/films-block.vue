<template>
  <section id="films" class="films">
    <films-info-block />
    <films-cards-block
      :films="filteredFilms"
      :limit-films="limitFilms"
      :total-films="totalFilms"
      @addFilm="addFilm"
    />
    <films-swiper-block :films="filteredFilms" :limit-films="limitFilms" />
  </section>
</template>

<script>
export default {
  name: 'films-block',
  props: {
    films: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      limitFilms: 4,
    };
  },
  computed: {
    filteredFilms() {
      return this.$props.films.slice(0, this.limitFilms).map((film) => ({
        title: film?.title,
        subtitle: `${film?.country} / ${film?.genre} / ${film?.duration} / ${film?.age}`,
        description: film?.description,
        image: film?.image,
        link: film?.link,
      }));
    },
    totalFilms() {
      return this.$props.films.length;
    },
  },
  methods: {
    /**
     * Добавляет заданное количество фильмов к текущему лимиту фильмов.
     * @param {number} step - Количество фильмов для добавления.
     * @returns {void}
     */
    addFilm(step) {
      this.limitFilms += step;
    },
  },
};
</script>

<style src="./films-block.less" lang="less" />

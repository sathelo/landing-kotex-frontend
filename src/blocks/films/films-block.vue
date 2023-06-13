<template>
  <div class="films">
    <div class="films-info">
      <div class="films-info__header">Фильмы</div>

      <div class="films-info__subtitle">
        Подборка кино для совместного просмотра родителей и&nbsp;подростков
      </div>
    </div>

    <div class="films-cards">
      <div v-for="(film, id) in films" :key="id" class="films-cards-card">
        <img :src="getStaticUrl(film.film.image)" alt="photo" class="films-cards-card__photo" />

        <div class="films-cards-card-info">
          <div class="films-cards-card-info__title">{{ film.film.title }}</div>
          <div class="films-cards-card-info__subtitle">
            {{ film.film.subtitle }}
          </div>
          <div class="films-cards-card-info__description">
            {{ film.film.description }}
          </div>
          <a :href="film.film.link" target="_blank" class="films-cards-card-info-btn">
            <img
              :src="getStaticUrl('btn-gradient.png')"
              alt="btn-watching"
              class="films-cards-card-info-btn__watching btn"
            />
          </a>
        </div>
      </div>
    </div>

    <a href="#" target="_blank" class="films-btn btn">
      <div class="films-btn__text">Показать больше</div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'films-block',
  computed: {
    films() {
      return this.$store.state.bunker.films;
    },
  },
};
</script>

<style src="./films-block.less" lang="less"></style>

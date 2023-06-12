<template>
  <div class="main">
    <div class="main-block-1">
      <div class="main-block-1__content">
        <div class="main-block-1-info">
          <div class="main-block-1-info__title">
            &laquo;Твой первый раз&raquo; уникальный образовательный курс для родителей
            и&nbsp;подростков от&nbsp;бренда Kotex<sup class="reg">&reg;</sup> совместно
            с&nbsp;проектом Переход
          </div>

          <div class="main-block-1-info__subtitle">
            Расскажем всё об&nbsp;этапах и&nbsp;особенностях переходного возраста, поможем построить
            доверительные взаимоотношения и&nbsp;укрепить&nbsp;их, а&nbsp;также разобраться, как
            меняется поведение и&nbsp;организм в&nbsp;пубертатный период.
          </div>
        </div>

        <img :src="getStaticUrl('photo-block-1.png')" alt="photo" class="main-block-1__photo" />
      </div>
    </div>

    <div class="main-block-2">
      <div class="main-block-2__content">
        <img :src="getStaticUrl('photo-block-2.png')" alt="photo" class="main-block-2__photo" />

        <div class="main-block-2-info">
          <img
            :src="getStaticUrl('logo-kotex-white.svg')"
            alt="logo-kotex-white"
            class="main-block-2-info__logo"
          />

          <div class="main-block-2-info__title">
            C&nbsp;заботой о&nbsp;каждой с&nbsp;первых месячных
          </div>

          <a href="#" target="_blank" class="main-block-2-info-btn btn">
            <div class="main-block-2-info-btn__text">Календарь месячных</div>
            <img
              :src="getStaticUrl('vk-ico-black.svg')"
              alt="vk-ico"
              class="main-block-2-info-btn__ico"
            />
          </a>
        </div>
      </div>
    </div>

    <div class="main-block-3">
      <div class="main-block-3__content">
        <div class="main-block-3-info">
          <img
            :src="getStaticUrl('logo-perehod.svg')"
            alt="logo-perehod"
            class="main-block-3-info__logo"
          />

          <div class="main-block-3-info__title">
            Проект наставничества, который помогает Подросткам счастливо прожить переходный возраст,
            сформировать взрослую модель поведения и&nbsp;сохранить доверительные отношения
            с&nbsp;Родителями.
          </div>

          <a href="#" target="_blank" class="main-block-3-info-btn btn">
            <div class="main-block-3-info-btn__text">
              Узнать больше о&nbsp;&laquo;Переход&raquo;
            </div>
          </a>
        </div>

        <img :src="getStaticUrl('photo-block-3.png')" alt="photo" class="main-block-3__photo" />
      </div>
    </div>

    <div class="main-block-4">
      <div class="main-block-4__content">
        <div class="main-block-4-info">
          <div class="main-block-4-info__header">Международный День женского здоровья</div>

          <div class="main-block-4-info__title">
            с&nbsp;Kotex<sup class="reg">&reg;</sup> на&nbsp;&laquo;Плюс Дача&raquo;
          </div>

          <div class="main-block-4-info__subtitle">
            28&nbsp;мая на&nbsp;площадке &laquo;Плюс Дача&raquo; бренд Kotex<sup class="reg"
              >&reg;</sup
            >провёл мероприятие &laquo;Беседа о&nbsp;важном для мам и&nbsp;дочек&raquo;, посвященное
            Международному Дню женского здоровья, а&nbsp;также построению и&nbsp;укреплению
            отношений между родителями и&nbsp;подростками.
          </div>

          <a href="#" target="_blank" class="main-block-4-info-btn btn">
            <div class="main-block-4-info-btn__text">Все фото с&nbsp;мероприятия ищи тут</div>
            <img
              :src="getStaticUrl('vk-ico-white.svg')"
              alt="vk-ico"
              class="main-block-4-info-btn__ico"
            />
          </a>
        </div>

        <div class="main-block-4-broadcast">
          <div class="main-block-4-broadcast-live">
            <div class="main-block-4-broadcast-live__status" />
            <div class="main-block-4-broadcast-live__text">трансляция</div>
          </div>
          <div class="main-block-4-broadcast-close">
            <div class="main-block-4-broadcast-close__title">
              Скоро здесь появится запись трансляции
            </div>
            <lock-block class="main-block-4-broadcast-close__lock" />
          </div>
        </div>

        <div class="main-block-4-slider">
          <div ref="swiper" class="main-block-4-slider__content swiper">
            <div id="slider-wrapper" class="main-block-4-slider-wrapper swiper-wrapper">
              <div
                v-for="(slide, id) in slider"
                :key="id"
                class="main-block-4-slider__slide swiper-slide"
              >
                <lock-block v-if="isEmpty(slide.slide)" />
              </div>
            </div>
          </div>

          <div class="main-block-4-slider-btn">
            <button class="main-block-4-slider-btn__left swiper-button-prev btn">
              <img
                :src="getStaticUrl('left-ico.svg')"
                alt="left-ico"
                class="main-block-4-slider-btn__ico"
              />
            </button>
            <button class="main-block-4-slider-btn__right swiper-button-next btn">
              <img
                :src="getStaticUrl('right-ico.svg')"
                alt="right-ico"
                class="main-block-4-slider-btn__ico"
              />
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="main-block-5">
      <div class="main-block-5__content">
        <div class="main-block-5-info">
          <div class="main-block-5-info__header">Фильмы</div>

          <div class="main-block-5-info__subtitle">
            Подборка кино для совместного просмотра родителей и&nbsp;подростков
          </div>

          <div class="main-block-5-info-cards">
            <div v-for="(film, id) in films" :key="id" class="main-block-5-info-cards-card">
              <img
                :src="getStaticUrl(film.film.image)"
                alt="photo"
                class="main-block-5-info-cards-card__photo"
              />

              <div class="main-block-5-info-cards-card-info">
                <div class="main-block-5-info-cards-card-info__title">{{ film.film.title }}</div>
                <div class="main-block-5-info-cards-card-info__subtitle">
                  {{ film.film.subtitle }}
                </div>
                <div class="main-block-5-info-cards-card-info__description">
                  {{ film.film.description }}
                </div>
                <a
                  :href="film.film.link"
                  target="_blank"
                  class="main-block-5-info-cards-card-info-btn btn"
                >
                  <img
                    :src="getStaticUrl('btn-gradient.png')"
                    alt="btn-watching"
                    class="main-block-5-info-cards-card-info-btn--watching"
                  />
                </a>
              </div>
            </div>
          </div>

          <a href="#" target="_blank" class="main-block-5-info-btn btn">
            <div class="main-block-5-info-btn__text">Показать больше</div>
          </a>
        </div>
      </div>
    </div>

    <div class="main-block-6">
      <div class="main-block-6__content">
        <div class="main-block-6-info">
          <div class="main-block-6-info__header">Подкасты</div>

          <div class="main-block-6-info__subtitle">
            Подкасты об&nbsp;отношениях, женском здоровье и&nbsp;первом походе к&nbsp;гинекологу.
            Слушай, когда тебе комфортно
          </div>

          <div class="main-block-6-info-cards">
            <div
              v-for="(podcast, id) in podcasts"
              :key="id"
              :class="{
                'main-block-6-info-cards-card--active': podcast.podcast.isActive,
              }"
              class="main-block-6-info-cards-card"
            >
              <img
                :src="getStaticUrl(podcast.podcast.image)"
                alt="photo"
                class="main-block-6-info-cards-card__photo"
              />

              <div class="main-block-6-info-cards-card-info">
                <div class="main-block-6-info-cards-card-info__title">
                  {{ podcast.podcast.title }}
                </div>
                <div
                  v-if="podcast.podcast.isActive"
                  class="main-block-6-info-cards-card-info__subtitle"
                >
                  {{ podcast.podcast.subtitle }}
                </div>

                <a
                  v-if="podcast.podcast.isActive"
                  :href="podcast.podcast.link"
                  target="_blank"
                  class="main-block-6-info-cards-card-info-btn btn"
                >
                  <img
                    :src="getStaticUrl('btn-text-listen-gradient.png')"
                    alt="btn-listen"
                    class="main-block-6-info-cards-card-info-btn--listen"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="main-block-8">
      <div class="main-block-8__content">
        <div class="main-block-8-info">
          <div class="main-block-8-info__header">Полезные материалы</div>

          <div class="main-block-8-info__subtitle">
            Видео и&nbsp;комиксы, которые помогут тебе немного лучше понять своё тело
          </div>

          <div
            v-for="(materialBox, materialBoxId) in materialsBox"
            :key="materialBoxId"
            class="main-block-8-info-boxes"
          >
            <div class="main-block-8-info-boxes-box">
              <materials-cards-block :material="materialBox" />
            </div>
          </div>

          <a href="#" target="_blank" class="main-block-8-info-btn btn">
            <div class="main-block-8-info-btn__text">Показать больше</div>
          </a>
        </div>
      </div>
    </div>

    <div class="main-block-9">
      <div class="main-block-9__content">
        <div class="main-block-9-info">
          <div class="main-block-9-info__header">
            Kotex<sup class="reg">&reg;</sup> рекомендует при первой менструации
          </div>

          <div class="main-block-9-info-cards">
            <div
              v-for="(item, id) in recommendations"
              :key="id"
              class="main-block-9-info-cards-card"
            >
              <img
                :src="getStaticUrl(item.item.image)"
                alt="photo"
                class="main-block-9-info-cards-card__photo"
              />

              <div class="main-block-9-info-cards-card-info">
                <div class="main-block-9-info-cards-card-info__title">{{ item.item.title }}</div>
                <div class="main-block-9-info-cards-card-info__reviews">
                  <reviews-drops-block
                    :rating="item.item.rating"
                    :max-rating="item.item.maxRating"
                  />
                </div>
              </div>
            </div>
          </div>

          <a href="#" target="_blank" class="main-block-9-info-btn btn">
            <div class="main-block-9-info-btn__text">Все продукты</div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Swiper JS
import Swiper, { Navigation } from 'swiper';
// import Swiper styles
import 'swiper/less';

export default {
  name: 'main-block',
  data() {
    return {
      materialsGroupBy: [],
      sizeMaterialsBox: 4,
    };
  },
  computed: {
    slider() {
      return this.$store.state.bunker.slider;
    },
    films() {
      return this.$store.state.bunker.films;
    },
    podcasts() {
      return this.$store.state.bunker.podcasts;
    },
    materials() {
      return this.$store.state.bunker.materials;
    },
    recommendations() {
      return this.$store.state.bunker.recommendations;
    },
    materialsBox() {
      this.groupBy();
      return this.materialsGroupBy;
    },
  },
  mounted() {
    // eslint-disable-next-line no-new
    new Swiper(this.$refs.swiper, {
      modules: [Navigation],
      spaceBetween: 24,
      slidesPerView: 'auto',
      grabCursor: true,
      mousewheel: {
        forceToAxis: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  },
  methods: {
    isEmpty(value) {
      return !Object.keys(value).length;
    },
    groupBy() {
      for (let i = 0; i < this.materials.length; i += this.sizeMaterialsBox) {
        this.materialsGroupBy.push(this.materials.slice(i, i + this.sizeMaterialsBox));
      }
    },
  },
};
</script>

<style src="./main-block.less" lang="less" />

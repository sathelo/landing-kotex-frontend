import Vue from 'vue';

/*
Названия блоков, состоящих из одного слова должны иметь постфикс Block при регистрации.
Css блоков в итоговой сборке будет иметь такой порядок, в котором блоки импортируются,
соответственно более глубокие блоки должны импортироваться выше чтобы родительские блоки
имели возможность переопределить стили корневого элемента ребёнка без использования !important
*/

/* Components */
import HeaderBlock from './header/header-block.vue';
import HeaderBurgerBlock from './header/header-burger-block.vue';
import MainBlock from './main/main-block.vue';
import AboutBlock from './about/about-block.vue';
import AfishaBlock from './afisha/afisha-block.vue';
import AboutPartner from './about-partner/about-partner-block.vue';
import EventBlock from './event/event-block.vue';
import EventInfoBlock from './event/event-info-block.vue';
import EventBroadcastBlock from './event/event-broadcast-block.vue';
import EventSwiperBlock from './event/event-swiper-block.vue';
import FilmsBlock from './films/films-block.vue';
import FilmsInfoBlock from './films/films-info-block.vue';
import FilmsCardsBlock from './films/films-cards-block.vue';
import FilmsSwiperBlock from './films/films-swiper-block.vue';
import PodcastsBlock from './podcasts/podcasts-block.vue';
import PodcastsInfoBlock from './podcasts/podcasts-info-block.vue';
import PodcastsCardsBlock from './podcasts/podcasts-cards-block.vue';
import PodcastsCardsCardBlock from './podcasts/podcasts-cards-card-block.vue';
import AfishaEventBlock from './afisha-event/afisha-event-block.vue';
import AfishaEventInfoBlock from './afisha-event/afisha-event-info-block.vue';
import AfishaEventEvents from './afisha-event/afisha-event-events-block.vue';
import AfishaEventCalendarBlock from './afisha-event/afisha-event-calendar-block.vue';
import AfishaEventCardsBlock from './afisha-event/afisha-event-cards-block.vue';
import AfishaEventCardsCardBlock from './afisha-event/afisha-event-cards-card-block.vue';
import AfishaEventPlugBlock from './afisha-event/afisha-event-plug-block.vue';
import MaterialsBlock from './materials/materials-block.vue';
import MaterialsInfoBlock from './materials/materials-info-block.vue';
import MaterialsBoxBlock from './materials/materials-box-block.vue';
import MaterialsBoxCardsBlock from './materials/materials-box-cards-block.vue';
import RecommendationsBlock from './recommendations/recommendations-block.vue';
import RecommendationsInfoBlock from './recommendations/recommendations-info-block.vue';
import RecommendationsCardsBlock from './recommendations/recommendations-cards-block.vue';
import FooterBlock from './footer/footer-block.vue';

/* UI Components */
import LockBlock from './ui/lock/lock-block.vue';
import ReviewsDropsBlock from './ui/reviews/reviews-drops-block.vue';

/* Components */
Vue.component('header-block', HeaderBlock);
Vue.component('header-burger-block', HeaderBurgerBlock);
Vue.component('main-block', MainBlock);
Vue.component('about-block', AboutBlock);
Vue.component('afisha-block', AfishaBlock);
Vue.component('about-partner-block', AboutPartner);
Vue.component('event-block', EventBlock);
Vue.component('event-info-block', EventInfoBlock);
Vue.component('event-broadcast-block', EventBroadcastBlock);
Vue.component('event-swiper-block', EventSwiperBlock);
Vue.component('films-block', FilmsBlock);
Vue.component('films-info-block', FilmsInfoBlock);
Vue.component('films-cards-block', FilmsCardsBlock);
Vue.component('films-swiper-block', FilmsSwiperBlock);
Vue.component('podcasts-block', PodcastsBlock);
Vue.component('podcasts-info-block', PodcastsInfoBlock);
Vue.component('podcasts-cards-block', PodcastsCardsBlock);
Vue.component('podcasts-cards-card-block', PodcastsCardsCardBlock);
Vue.component('afisha-event-block', AfishaEventBlock);
Vue.component('afisha-event-info-block', AfishaEventInfoBlock);
Vue.component('afisha-event-events-block', AfishaEventEvents);
Vue.component('afisha-event-calendar-block', AfishaEventCalendarBlock);
Vue.component('afisha-event-cards-block', AfishaEventCardsBlock);
Vue.component('afisha-event-cards-card-block', AfishaEventCardsCardBlock);
Vue.component('afisha-event-plug-block', AfishaEventPlugBlock);
Vue.component('materials-block', MaterialsBlock);
Vue.component('materials-info-block', MaterialsInfoBlock);
Vue.component('materials-box-block', MaterialsBoxBlock);
Vue.component('materials-box-cards-block', MaterialsBoxCardsBlock);
Vue.component('recommendations-block', RecommendationsBlock);
Vue.component('recommendations-info-block', RecommendationsInfoBlock);
Vue.component('recommendations-cards-block', RecommendationsCardsBlock);
Vue.component('footer-block', FooterBlock);

/* UI Components */
Vue.component('lock-block', LockBlock);
Vue.component('reviews-drops-block', ReviewsDropsBlock);

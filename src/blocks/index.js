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
import EventSliderBlock from './event/event-slider-block.vue';
import FilmsBlock from './films/films-block.vue';
import PodcastsBlock from './podcasts/podcasts-block.vue';
import AfishaEventBlock from './afisha-event/afisha-event-block.vue';
import AfishaEventCalendarBlock from './afisha-event/afisha-event-calendar-block.vue';
import AfishaEventCalendarCardBlock from './afisha-event/afisha-event-calendar-card-block.vue';
import MaterialsBlock from './materials/materials-block.vue';
import MaterialsCardsBlock from './materials/materials-cards-block.vue';
import RecommendationsBlock from './recommendations/recommendations-block.vue';
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
Vue.component('event-slider-block', EventSliderBlock);
Vue.component('films-block', FilmsBlock);
Vue.component('podcasts-block', PodcastsBlock);
Vue.component('afisha-event-block', AfishaEventBlock);
Vue.component('afisha-event-calendar-block', AfishaEventCalendarBlock);
Vue.component('afisha-event-calendar-card-block', AfishaEventCalendarCardBlock);
Vue.component('materials-block', MaterialsBlock);
Vue.component('materials-cards-block', MaterialsCardsBlock);
Vue.component('recommendations-block', RecommendationsBlock);
Vue.component('footer-block', FooterBlock);

/* UI Components */
Vue.component('lock-block', LockBlock);
Vue.component('reviews-drops-block', ReviewsDropsBlock);

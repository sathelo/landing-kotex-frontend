import Vue from 'vue';

/*
Названия блоков, состоящих из одного слова должны иметь постфикс Block при регистрации.
Css блоков в итоговой сборке будет иметь такой порядок, в котором блоки импортируются,
соответственно более глубокие блоки должны импортироваться выше чтобы родительские блоки
имели возможность переопределить стили корневого элемента ребёнка без использования !important
*/

import HeaderBlock from './header/header-block.vue';
import MainBlock from './main/main-block.vue';
import FooterBlock from './footer/footer-block.vue';
import MaterialsBlock from './materials/materials-cards-block.vue';

import LockBlock from './ui/lock/lock-block.vue';
import ReviewsDropsBlock from './ui/reviews/reviews-drops-block.vue';

Vue.component('header-block', HeaderBlock);
Vue.component('main-block', MainBlock);
Vue.component('footer-block', FooterBlock);
Vue.component('materials-cards-block', MaterialsBlock);

Vue.component('lock-block', LockBlock);
Vue.component('reviews-drops-block', ReviewsDropsBlock);

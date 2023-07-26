<template>
  <section class="afisha-event-calendar">
    <div class="afisha-event-calendar-months">
      <button class="afisha-event-calendar-months-btn__left" @click="scrollDays(-300)">
        <img
          :src="getStaticUrl('icons/arrow-left--white.svg')"
          alt="arrow-left-ico"
          class="afisha-event-calendar-months-btn__ico"
        />
      </button>

      <div class="afisha-event-calendar-months__content">
        <div ref="listDaysWrapper" class="afisha-event-calendar-months__wrapper">
          <div class="afisha-event-calendar-months__wrapper-scroll">
            <div
              v-for="(month, monthIndex) in sortedMonths"
              :key="monthIndex"
              class="afisha-event-calendar-months-month"
            >
              <div class="afisha-event-calendar-months-month__title">{{ month }}</div>
              <div class="afisha-event-calendar-months-month-dates">
                <div
                  v-for="(date, dateIndex) in getDates(month)"
                  :key="dateIndex"
                  :ref="`dateSelect${Number(isChooseDate(month, date))}`"
                  class="afisha-event-calendar-months-month-dates-date"
                  :class="{
                    'afisha-event-calendar-months-month-dates-date--active': isChooseDate(
                      month,
                      date
                    ),
                  }"
                  @click="chooseDate(month, date)"
                >
                  <div class="afisha-event-calendar-months-month-dates-date__number">
                    {{ date }}
                  </div>
                  <div class="afisha-event-calendar-months-month-dates-date__name">
                    {{ getWeekDay(date) }}
                  </div>
                </div>
              </div>
            </div>
            <div
              ref="listDaysRange"
              class="afisha-event-calendar-months-month-dates-date__ranged"
            />
          </div>
        </div>
      </div>

      <button class="afisha-event-calendar-months-btn__right" @click="scrollDays(300)">
        <img
          :src="getStaticUrl('icons/arrow-right--white.svg')"
          alt="arrow-right-ico"
          class="afisha-event-calendar-months-btn__ico"
        />
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'afisha-event-calendar-block',
  props: {
    months: {
      type: Object,
      required: true,
    },
    chooseDates: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      startMonths: 0,
      endMonths: 2,
      days: ['СР', 'ЧТ', 'ПТ', 'СБ', 'ВС', 'ПН', 'ВТ'],
    };
  },
  computed: {
    sortedMonths() {
      return this.$props.months.nominativeAccusative.slice(
        this.startMonths,
        this.startMonths + this.endMonths
      );
    },
  },
  watch: {
    'chooseDates.lDay': {
      handler(newChooseDates) {
        if (!this.isEmptyObj(newChooseDates)) {
          const { dateSelect1 } = this.$refs;
          setTimeout(() => {
            this.showRange(...dateSelect1);
          });
        } else {
          this.hideRange();
        }
      },
    },
  },
  mounted() {
    this.startMonths = this.$store.getters.currentMonth - 1;
  },
  methods: {
    /**
    Отображает выбранный диапазон дат на календаре.
    @param {Object} left - DOM-элемент левой границы диапазона.
    @param {Object} right - DOM-элемент правой границы диапазона.
    @returns {void}
    */
    showRange(left, right) {
      const { listDaysWrapper, listDaysRange } = this.$refs;
      let leftRect = left.getBoundingClientRect();
      let rightRect = right.getBoundingClientRect();
      if (leftRect.left > rightRect.left) {
        const tmp = leftRect;
        leftRect = rightRect;
        rightRect = tmp;
      }
      const listDaysWrapperRect = listDaysWrapper.getBoundingClientRect();
      const rangeWidth = Math.abs(leftRect.left - rightRect.left) + leftRect.width;
      listDaysRange.style.width = `${rangeWidth}px`;
      listDaysRange.style.height = `${leftRect.height + 4}px`;
      listDaysRange.style.left = `${
        leftRect.left + listDaysWrapper.scrollLeft - listDaysWrapperRect.left
      }px`;
    },

    /**
    Скрывает выбранный диапазон дат на календаре.
    @returns {void}
    */
    hideRange() {
      const { listDaysRange } = this.$refs;
      listDaysRange.style.width = 0;
    },

    /**
    Прокручивает список дней влево или вправо на заданное расстояние.
    @param {number} shift - Расстояние прокрутки в пикселях. Значение > 0 соответствует прокрутке вправо, значение < 0 - прокрутке влево.
    @returns {void}
    */
    scrollDays(shift) {
      const { listDaysWrapper } = this.$refs;
      if (listDaysWrapper) {
        this.scrollElementTo({
          element: listDaysWrapper,
          left: listDaysWrapper.scrollLeft + shift,
        });
      }
    },

    /**
    Прокручивает указанный элемент до указанной позиции.
    @param {Object} options - Объект с параметрами прокрутки.
    @param {Object} options.element - DOM-элемент, который необходимо прокрутить.
    @param {number} options.left - Количество пикселей, на которое необходимо прокрутить элемент влево.
    @returns {void}
    */
    scrollElementTo({ element, left }) {
      element.scrollTo({ left, behavior: 'smooth' });
    },

    /**
    Генерирует массив целых чисел в заданном диапазоне.
    @param {number} start - Начальное значение диапазона.
    @param {number} end - Конечное значение диапазона.
    @returns {Array} - Массив целых чисел в заданном диапазоне.
    */
    range(start, end) {
      const arr = [];
      for (let counter = start; counter <= end; counter += 1) {
        if (counter <= end) {
          arr.push(counter);
        }
      }
      return arr;
    },

    /**
    Обрабатывает выбор даты на календаре.
    @param {string} month - Название выбранного месяца.
    @param {number} day - Номер выбранного дня.
    @returns {void}
    */
    chooseDate(month, day) {
      const year = this.$store.getters.currentYear;
      const m = this.getNumberMonth(month);
      const params = { year, month: m, day };
      const resetParams = { year: null, month: null, day: null };
      if (
        this.$props.chooseDates.fDay.year === params.year &&
        this.$props.chooseDates.fDay.month === params.month &&
        this.$props.chooseDates.fDay.day === params.day &&
        this.isEmptyObj(this.$props.chooseDates.lDay)
      ) {
        this.$emit('setParamsFirstDay', resetParams);
        this.$emit('setParamsLastDay', resetParams);
        return;
      }
      if (this.isEmptyObj(this.$props.chooseDates.fDay)) {
        this.$emit('setParamsFirstDay', params);
        return;
      }
      if (this.isEmptyObj(this.$props.chooseDates.lDay)) {
        this.$emit('setParamsLastDay', params);
      } else {
        this.$emit('setParamsFirstDay', params);
        this.$emit('setParamsLastDay', resetParams);
      }
    },

    /**
    Возвращает последний день выбранного месяца.
    @param {string} month - Название выбранного месяца.
    @returns {number} - Последний день выбранного месяца.
    */
    getLastDay(month) {
      const year = this.$store.getters.currentYear;
      const nMonth = this.getNumberMonth(month);
      const lastDay = new Date(year, nMonth, 0).getDate();
      return lastDay;
    },

    /**
    Возвращает массив дней месяца.
    @param {string} month - Название месяца.
    @returns {Array} - Массив дней месяца.
    */
    getDates(month) {
      if (month === this.$props.months.nominativeAccusative[this.$store.getters.currentMonth - 1]) {
        const firstDay = new Date().getDate();
        const lastDay = this.getLastDay();
        return this.range(firstDay, lastDay);
      }
      const firstDay = 1;
      const lastDay = this.getLastDay(month);
      return this.range(firstDay, lastDay);
    },

    /**
    Возвращает название дня недели по дате.
    @param {number} date - Дата в формате Unix time.
    @returns {string} - Название дня недели.
    */
    getWeekDay(date) {
      return this.days[date % 7];
    },

    /**
    Возвращает номер месяца по его названию.
    @param {string} month - Название месяца.
    @returns {number} - Номер месяца.
    */
    getNumberMonth(month) {
      return this.$props.months.nominativeAccusative.indexOf(month);
    },

    /**
    Проверяет, выбрана ли указанная дата на календаре.
    @param {string} month - Название выбранного месяца.
    @param {number} day - Номер выбранного дня.
    @returns {boolean} - Результат проверки на выбранность даты.
    */
    isChooseDate(month, day) {
      const year = this.$store.getters.currentYear;
      const m = this.getNumberMonth(month);
      const params = { year, month: m, day };
      return (
        JSON.stringify(this.$props.chooseDates.fDay) === JSON.stringify(params) ||
        JSON.stringify(this.$props.chooseDates.lDay) === JSON.stringify(params)
      );
    },

    /**
    Проверяет, является ли переданный объект пустым (не содержит свойств) или нет.
    @param {Object} obj - Проверяемый объект.
    @returns {boolean} - true, если объект пустой или содержит только undefined или null, иначе false.
    */
    isEmptyObj(obj) {
      const values = Object.values(obj);
      if (!values.length) return true;
      return !values.filter((v) => v !== undefined && v !== null).length;
    },
  },
};
</script>

<style src="./afisha-event-calendar-block.less" lang="less" />

<template>
  <div class="calendar">
    <div class="calendar-events">
      <div
        v-for="(event, eventId) in events"
        :key="eventId"
        class="calendar-events-event"
        :class="{ 'calendar-events-event--active': event.event.isActive }"
        @click="chooseEvent(eventId)"
      >
        {{ event.event.title }}
      </div>
    </div>

    <div class="calendar-months">
      <button class="calendar-months-btn__left" @click="scrollDays(-300)">
        <img
          :src="getStaticUrl('arrow-left-ico.svg')"
          alt="arrow-left-ico"
          class="calendar-months-btn__ico"
        />
      </button>

      <div class="calendar-months__content">
        <div ref="listDaysWrapper" class="calendar-months__wrapper">
          <div class="calendar-months__wrapper-scroll">
            <div
              v-for="(month, monthId) in sortedMonths"
              :key="monthId"
              class="calendar-months-month"
            >
              <div class="calendar-months-month__title">{{ month }}</div>
              <div class="calendar-months-month-dates">
                <div
                  v-for="(date, dateId) in getDates(month)"
                  :key="dateId"
                  :ref="`dateSelect${Number(isChooseDate(month, date))}`"
                  class="calendar-months-month-dates-date"
                  :class="{ 'calendar-months-month-dates-date--active': isChooseDate(month, date) }"
                  @click="chooseDate(month, date)"
                >
                  <div class="calendar-months-month-dates-date__number">{{ date }}</div>
                  <div class="calendar-months-month-dates-date__name">{{ getWeekDay(date) }}</div>
                </div>
              </div>
            </div>
            <div ref="listDaysRange" class="calendar-months-month-dates-date__ranged" />
          </div>
        </div>
      </div>

      <button class="calendar-months-btn__right" @click="scrollDays(300)">
        <img
          :src="getStaticUrl('arrow-right-ico.svg')"
          alt="arrow-right-ico"
          class="calendar-months-btn__ico"
        />
      </button>
    </div>

    <div class="calendar-cards">
      <afisha-event-calendar-card-block
        v-for="(card, cardIndex) in cards"
        :key="cardIndex"
        :title="card.card.title"
        :subtitle="card.card.subtitle"
        :link="card.card.link"
        :is-active="card.card.isActive"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'afisha-event-calendar-block',
  data() {
    return {
      days: ['СР', 'ЧТ', 'ПТ', 'СБ', 'ВС', 'ПН', 'ВТ'],
      minMonths: 0,
      maxMonths: 2,
      chooseDates: {
        fDay: {
          year: null,
          month: null,
          day: null,
        },
        lDay: {
          year: null,
          month: null,
          day: null,
        },
      },
    };
  },
  computed: {
    cards() {
      return this.$store.state.bunker.calendar.cards;
    },
    events() {
      return this.$store.state.bunker.calendar.events;
    },
    months() {
      return this.$store.state.bunker.calendar.months;
    },
    sortedMonths() {
      return this.$store.state.bunker.calendar.months.slice(
        this.minMonths,
        this.minMonths + this.maxMonths
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
    this.minMonths = this.$store.getters.currentMonth - 1;
  },
  methods: {
    chooseEvent(currentEventId) {
      this.$store.state.bunker.calendar.events.forEach((e, eId) => {
        if (e.event.isActive === true && eId !== currentEventId) e.event.isActive = false;
        if (eId === currentEventId) e.event.isActive = true;
      });
    },
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
    hideRange() {
      const { listDaysRange } = this.$refs;
      listDaysRange.style.width = 0;
    },
    getLastDay(month) {
      const year = this.$store.getters.currentYear;
      const nMonth = this.getNumberMonth(month);
      const lastDay = new Date(year, nMonth, 0).getDate();
      return lastDay;
    },
    range(start, end) {
      const arr = [];
      for (let counter = start; counter <= end; counter += 1) {
        if (counter <= end) {
          arr.push(counter);
        }
      }
      return arr;
    },
    getDates(month) {
      if (month === this.months[this.$store.getters.currentMonth - 1]) {
        const firstDay = new Date().getDate();
        const lastDay = this.getLastDay();
        return this.range(firstDay, lastDay);
      }
      const firstDay = 1;
      const lastDay = this.getLastDay(month);
      return this.range(firstDay, lastDay);
    },
    getWeekDay(date) {
      return this.days[date % 7];
    },
    getNumberMonth(month) {
      return this.$store.state.bunker.calendar.months.indexOf(month);
    },
    scrollDays(shift) {
      const { listDaysWrapper } = this.$refs;
      if (listDaysWrapper) {
        this.scrollElementTo({
          element: listDaysWrapper,
          left: listDaysWrapper.scrollLeft + shift,
        });
      }
    },
    scrollElementTo({ element, left }) {
      element.scrollTo({ left, behavior: 'smooth' });
    },
    chooseDate(month, day) {
      const year = this.$store.getters.currentYear;
      const m = this.getNumberMonth(month);
      const params = { year, month: m, day };
      if (this.isEmptyObj(this.chooseDates.fDay)) {
        this.chooseDates.fDay = params;
        return;
      }
      if (this.isEmptyObj(this.chooseDates.lDay)) {
        this.chooseDates.lDay = params;
      } else {
        const resetParams = { year: null, month: null, day: null };
        this.chooseDates.fDay = params;
        this.chooseDates.lDay = resetParams;
      }
    },
    isEmptyObj(obj) {
      const values = Object.values(obj);
      if (!values.length) return true;
      return !values.filter((v) => v !== undefined && v !== null).length;
    },
    isChooseDate(month, day) {
      const year = this.$store.getters.currentYear;
      const m = this.getNumberMonth(month);
      const params = { year, month: m, day };
      return (
        JSON.stringify(this.chooseDates.fDay) === JSON.stringify(params) ||
        JSON.stringify(this.chooseDates.lDay) === JSON.stringify(params)
      );
    },
  },
};
</script>

<style src="./afisha-event-calendar-block.less" lang="less"></style>

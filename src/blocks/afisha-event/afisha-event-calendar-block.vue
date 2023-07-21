<template>
  <div class="calendar">
    <div class="calendar-events">
      <div
        v-for="(event, eventId) in afishaEvent.events"
        :key="eventId"
        class="calendar-events-event"
        :class="{ 'calendar-events-event--active': eventId === eventActive }"
        @click="chooseEvent(eventId)"
      >
        {{ event.event.title }}
      </div>
    </div>

    <div class="calendar-months">
      <button class="calendar-months-btn__left" @click="scrollDays(-300)">
        <img
          :src="getStaticUrl('icons/arrow-left--white.svg')"
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
          :src="getStaticUrl('icons/arrow-right--white.svg')"
          alt="arrow-right-ico"
          class="calendar-months-btn__ico"
        />
      </button>
    </div>

    <div class="calendar-cards">
      <afisha-event-calendar-card-block
        v-for="(card, cardIndex) in filteredDataCity"
        :key="cardIndex"
        :afisha-event="afishaEvent"
        :title="card.title"
        :dates="card.dates"
        :type="card.type"
        :link="card.afisha_url"
      />
    </div>

    <button v-if="isBtnMore" class="calendar-btn btn" @click="$emit('moreCard')">
      <div class="calendar-btn__text">Показать больше</div>
    </button>
  </div>
</template>

<script>
export default {
  name: 'afisha-event-calendar-block',
  props: {
    afishaEvent: {
      type: Object,
      required: true,
    },
    dataCity: {
      type: Array,
      required: true,
    },
    minCard: {
      type: Number,
      required: true,
    },
    maxCard: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      eventActive: 0,
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
    months() {
      return this.$props.afishaEvent.months.nominativeAccusative;
    },
    sortedMonths() {
      return this.$props.afishaEvent.months.nominativeAccusative.slice(
        this.minMonths,
        this.minMonths + this.maxMonths
      );
    },
    filteredDataCity() {
      const daysDifference = [];
      if (!this.isEmptyObj(this.chooseDates.fDay)) {
        const { year: fYear, month: fMonth, day: fDay } = this.chooseDates.fDay;
        const startDate = new Date(fYear, fMonth, fDay);
        daysDifference.push(
          `${startDate.getFullYear()}-${
            startDate.getMonth() + 1 < 10
              ? `0${startDate.getMonth() + 1}`
              : startDate.getMonth() + 1
          }-${startDate.getDate() < 10 ? `0${startDate.getDate()}` : startDate.getDate()}`
        );
      }
      if (!this.isEmptyObj(this.chooseDates.fDay) && !this.isEmptyObj(this.chooseDates.lDay)) {
        const { year: fYear, month: fMonth, day: fDay } = this.chooseDates.fDay;
        const { year: lYear, month: lMonth, day: lDay } = this.chooseDates.lDay;
        const startDate = new Date(fYear, fMonth, fDay);
        const endDate = new Date(lYear, lMonth, lDay);
        if (startDate > endDate) {
          while (endDate <= startDate) {
            daysDifference.push(
              `${endDate.getFullYear()}-${
                endDate.getMonth() + 1 < 10 ? `0${endDate.getMonth() + 1}` : endDate.getMonth() + 1
              }-${endDate.getDate() < 10 ? `0${endDate.getDate()}` : endDate.getDate()}`
            );
            endDate.setDate(endDate.getDate() + 1);
          }
        } else {
          while (startDate <= endDate) {
            daysDifference.push(
              `${startDate.getFullYear()}-${
                startDate.getMonth() + 1 < 10
                  ? `0${startDate.getMonth() + 1}`
                  : startDate.getMonth() + 1
              }-${startDate.getDate() < 10 ? `0${startDate.getDate()}` : startDate.getDate()}`
            );
            startDate.setDate(startDate.getDate() + 1);
          }
        }
      }

      const currentEventId = this.$props.afishaEvent.events[this.eventActive].event.id;
      const sortedByTags =
        currentEventId !== 'all'
          ? this.$props.dataCity.filter((data) => data.tags.includes(currentEventId))
          : this.$props.dataCity;
      const sortedByDate = daysDifference.length
        ? sortedByTags
            .filter((data) => this.contains(data.dates, daysDifference))
            .map((data) => ({
              ...data,
              dates: this.filteredDates(data.dates, daysDifference),
            }))
            .slice(0, this.$props.maxCard)
        : sortedByTags.slice(this.$props.minCard, this.$props.maxCard);
      return sortedByDate;
    },
    isBtnMore() {
      return this.filteredDataCity.length && this.filteredDataCity.length === this.$props.maxCard;
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
      this.eventActive = currentEventId;
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
      return this.$props.afishaEvent.months.nominativeAccusative.indexOf(month);
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
      const resetParams = { year: null, month: null, day: null };
      if (
        this.chooseDates.fDay.year === params.year &&
        this.chooseDates.fDay.month === params.month &&
        this.chooseDates.fDay.day === params.day &&
        this.isEmptyObj(this.chooseDates.lDay)
      ) {
        this.chooseDates.fDay = resetParams;
        this.chooseDates.lDay = resetParams;
        return;
      }
      if (this.isEmptyObj(this.chooseDates.fDay)) {
        this.chooseDates.fDay = params;
        return;
      }
      if (this.isEmptyObj(this.chooseDates.lDay)) {
        this.chooseDates.lDay = params;
      } else {
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
    contains(where, what) {
      return where.some((el) => {
        return what.includes(el);
      });
    },
    filteredDates(where, what) {
      return where.filter((el) => {
        return what.indexOf(el) !== -1;
      });
    },
  },
};
</script>

<style src="./afisha-event-calendar-block.less" lang="less" />

<template>
  <div>
    <div class="afisha-event">{{ afishaEvent() }}</div>
  </div>
</template>

<script>
// eslint-disable-next-line import/extensions
import { Event } from '../../api/afisha-event.js';

export default {
  name: 'afisha-event-block',
  methods: {
    async afishaEvent() {
      // eslint-disable-next-line no-return-await
      return await Event.getData(0);
    },
  },
};
</script>

<style src="./afisha-event-block.less" lang="less"></style>

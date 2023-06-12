<template>
  <div class="cards">
    <div class="cards-card">
      <div v-if="isEmpty(material[0].material)" class="cards-card-close">
        <div class="cards-card-close__content">
          <lock-block class="cards-card-close__lock" />
        </div>
      </div>
    </div>
    <div class="cards__wrapper">
      <div class="cards-card">
        <div v-if="isEmpty(material[1].material)" class="cards-card-close">
          <div class="cards-card-close__content">
            <lock-block class="cards-card-close__lock" />
          </div>
        </div>
      </div>

      <div class="cards-card">
        <div v-if="isEmpty(material[2].material)" class="cards-card-close">
          <div class="cards-card-close__content">
            <lock-block class="cards-card-close__lock" />
          </div>
        </div>
      </div>

      <div class="cards-card">
        <div v-if="isEmpty(material[3].material)" class="cards-card-close">
          <div class="cards-card-close__content">
            <lock-block class="cards-card-close__lock" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'materials-cards-block',
  props: {
    material: {
      type: Array,
      required: true,
    },
  },
  methods: {
    isEmpty(value) {
      return !Object.keys(value).length;
    },
  },
};
</script>

<style src="./materials-cards-block.less" lang="less"></style>

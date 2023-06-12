<template>
  <div class="materials">
    <div class="materials-info">
      <div class="materials-info__header">Полезные материалы</div>

      <div class="materials-info__subtitle">
        Видео и&nbsp;комиксы, которые помогут тебе немного лучше понять своё тело
      </div>

      <div
        v-for="(materialBox, materialBoxId) in materialsBox"
        :key="materialBoxId"
        class="materials-info-boxes"
      >
        <div class="materials-info-boxes-box">
          <materials-cards-block :material="materialBox" />
        </div>
      </div>

      <a href="#" target="_blank" class="materials-info-btn btn">
        <div class="materials-info-btn__text">Показать больше</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'materials-block',
  data() {
    return {
      materialsGroupBy: [],
      sizeMaterialsBox: 4,
    };
  },
  computed: {
    materials() {
      return this.$store.state.bunker.materials;
    },
    materialsBox() {
      this.groupBy();
      return this.materialsGroupBy;
    },
  },
  methods: {
    groupBy() {
      for (let i = 0; i < this.materials.length; i += this.sizeMaterialsBox) {
        this.materialsGroupBy.push(this.materials.slice(i, i + this.sizeMaterialsBox));
      }
    },
  },
};
</script>

<style src="./materials-block.less" lang="less"></style>

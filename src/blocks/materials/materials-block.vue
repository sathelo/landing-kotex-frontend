<template>
  <section id="materials" class="materials">
    <materials-info-block />
    <materials-box-block :materials-box="filteredMaterials" />
    <a href="#" target="_blank" class="materials-btn btn">
      <div class="materials-btn__text">Показать больше</div>
    </a>
  </section>
</template>

<script>
export default {
  name: 'materials-block',
  props: {
    materials: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      sizeOneBoxes: 4,
      limitBox: 1,
    };
  },
  computed: {
    filteredMaterials() {
      return this.slicedArray.slice(0, this.limitBox);
    },
    slicedArray() {
      const res = [];
      for (let i = 0; i < this.materials.length; i += this.sizeOneBoxes) {
        res.push(this.$props.materials.slice(i, i + this.sizeOneBoxes));
      }
      return res;
    },
  },
};
</script>

<style src="./materials-block.less" lang="less" />

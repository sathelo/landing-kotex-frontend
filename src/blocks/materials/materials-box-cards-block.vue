<template>
  <section class="materials-box-cards">
    <div class="materials-box-cards-card">
      <div v-if="isEmpty(material1)" class="materials-box-cards-card-close">
        <div class="materials-box-cards-card-close__content">
          <lock-block
            class="materials-box-cards-card-close__lock"
            s="64px"
            p="20px"
            s-image="20px"
          />
        </div>
      </div>
    </div>

    <div class="materials-box-cards__wrapper">
      <div class="materials-box-cards-card">
        <div v-if="isEmpty(material2)" class="materials-box-cards-card-close">
          <div class="materials-box-cards-card-close__content">
            <lock-block
              class="materials-box-cards-card-close__lock"
              s="64px"
              p="20px"
              s-image="20px"
            />
          </div>
        </div>
      </div>

      <div class="materials-box-cards-card">
        <div v-if="isEmpty(material3)" class="materials-box-cards-card-close">
          <div class="materials-box-cards-card-close__content">
            <lock-block
              class="materials-box-cards-card-close__lock"
              s="64px"
              p="20px"
              s-image="20px"
            />
          </div>
        </div>
      </div>

      <div class="materials-box-cards-card">
        <div v-if="isEmpty(material4)" class="materials-box-cards-card-close">
          <div class="materials-box-cards-card-close__content">
            <lock-block
              class="materials-box-cards-card-close__lock"
              s="64px"
              p="20px"
              s-image="20px"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'materials-box-cards-card-block',
  props: {
    materials: {
      type: Array,
      required: true,
    },
  },
  data() {
    const [material1, material2, material3, material4] = this.$props.materials;
    return {
      material1,
      material2,
      material3,
      material4,
    };
  },
  methods: {
    /**
     * Проверка на пустоту содержимого объекта.
     * @param {object} obj - Объект, содержащий свойства и методы.
     * @returns {boolean} Возвращает `true`, если хотя бы 1-о свойство объекта имеет значение, иначе `false`.
     */
    isEmpty(obj) {
      return !Object.keys(obj).length;
    },
  },
};
</script>

<style src="./materials-box-cards-block.less" lang="less" />

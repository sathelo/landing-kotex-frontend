<template>
  <div class="footer">
    <div class="footer-logo">
      <img :src="getStaticUrl('vk-ico-grey.svg')" alt="vk-ico" class="footer-logo__ico" />
    </div>

    <div class="footer-info">
      <div class="footer-info__text">
        Срок проведения акции с&nbsp;23.03.2023&nbsp;г.&nbsp;по&nbsp;06.04.2023&nbsp;г. Подробности
        об&nbsp;организаторе акции, правилах ее&nbsp;проведения, количестве подарков, сроках, месте
        и&nbsp;порядке их&nbsp;получения&nbsp;см.&nbsp;по&nbsp;ссылке https://wwwwwwwww.ru
      </div>

      <div class="footer-info-copyrights">
        <div class="footer-info-copyrights__text">&copy;2023&nbsp;КОТЕКС</div>
        <div class="footer-info-copyrights__rating">12+</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footer-block',
};
</script>

<style src="./footer-block.less" lang="less" />

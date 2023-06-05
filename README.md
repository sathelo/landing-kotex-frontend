# Спецпроект Кинопоиска

## Команды
- `dev` - запуск локальной сборки
- `dev-kp` - запуск локальной сборки на домене dev.kinopoisk.ru, полезно использовать если какие-то клиентские библиотеки не работают на стороннем домене. Также необходимо добавить в hosts `127.0.0.1 dev.kinopoisk.ru`
- `build` - продовая сборка

## Скрипты
- `./scripts/createBlock name` - создание заготовки для БЭМ блока, вместо `name` необходимо указать название блока. Потом необходимо блок прописать в `src/blocks/index.js`
- `./scripts/createPage name` - создание заготовки страницы, вместо `name` необходимо указать название страницы. Потом страницу необходимо добавить в конфиг роутера и в файл `webpack/htmlPlugins.js`

## Рекомендации

### БЭМ блоки
Названия блоков, состоящих из одного слова должны иметь постфикс `block` при регистрации.
Поряок css в итоговой сборке будет иметь такой порядок, в котором блоки импортируются, соответственно более глубокие блоки должны импортироваться выше чтобы родительские блоки имели возможность переопределить стили корневого элемента ребёнка без использования !important

### Картинки
Картинки в шаблонах можно подключать через стандартные инструменты вебпака, в js `import fileUrl from 'path/to/image.jpg';`, в шаблоне `<img src="path/to/image">`, [список поддерживаемых html атрибутов, которые преобразуются в импорты](https://vue-loader.vuejs.org/ru/guide/asset-url.html#обработка-вnоженных-url)

Также любые файлы можно поместить в папку `static` и получать путь до файла через функцию `this.getStaticUrl('image.jpg')`, функция доступна в каждом компоненте.

Использование svg инлайново
```vue
<template>
  <div>
    <logo-svg />
  </div>
</template>

<script>
import LogoSvg from 'path/to/logo.svg?inline';

export default {
  components: {
    LogoSvg,
  },
};
</script>
```

### Авторизация
Чтобы включить авторизацию необхоидмо в файле `src/index.html` выставить переменную `hasAuth` в `true`. Данные юзера хранятся в сторе в переменой user. По умолчанию юзер считается неавторизованным, в дев режиме можно подменить состояние добавив гет параметр `_subscription`:

- `_subscription=0` - залогин неплюсовик
- `_subscription=1` - залогин плюсовик

### Метрика
Если известен только номер счётчика, тогда нужно использовать такой код, заменив при этом номер счётчика `12345678` в двух местах:
```html
<!-- Yandex.Metrika counter -->
<script type="text/javascript">
(function (m, e, t, r, i, k, a) {
  m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments) };
  m[i].l = 1 * new Date(); k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
}) (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

ym(12345678, "init", {
  clickmap: true,
  trackLinks: true,
  accurateTrackBounce: true
});
</script>
<noscript>
  <div><img src="https://mc.yandex.ru/watch/12345678" style="position:absolute; left:-9999px;" alt="" /></div>
</noscript>
<!-- /Yandex.Metrika counter -->
```

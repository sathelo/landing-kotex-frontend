#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');

const pageName = process.argv[2];

if (!pageName) {
  console.log('Необходимо указать название страницы');
  process.exit(1);
}

const pagePath = path.resolve(__dirname, `../src/pages/${pageName}`);
const blockName = `page-${pageName}`;

if (fs.existsSync(pagePath)) {
  console.log('Такая страница уже существует');
  process.exit(1);
}

fs.mkdirSync(pagePath);

function renderVue() {
  return `<template>
  <div class="${blockName}"></div>
</template>

<script>
export default {
  name: '${blockName}',
};
</script>

<style src="./${blockName}.less" lang="less" />
`;
}

function renderLess() {
  return `@import '../../styles/helpers';

.${blockName} {
}
`;
}

const vueFilePath = path.join(pagePath, `${blockName}.vue`);
const lessFilePath = path.join(pagePath, `${blockName}.less`);

fs.writeFileSync(vueFilePath, renderVue());
fs.writeFileSync(lessFilePath, renderLess());

try {
  childProcess.execSync(`open ${vueFilePath}`, { stdio: 'ignore' });
} catch (e) {
  console.log(
    'Страница создана. Чтобы открыть её автоматически в IDE, настройте в системе программу по умолчанию для .vue файлов'
  );
}

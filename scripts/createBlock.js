#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');

const blockName = process.argv[2];

if (!blockName) {
  console.log('Необходимо указать название блока');
  process.exit(1);
}

const blockPath = path.resolve(__dirname, `../src/blocks/${blockName}`);

if (fs.existsSync(blockPath)) {
  console.log('Такой блок уже существует');
  process.exit(1);
}

const componentName = /\w-\w/.test(blockName) ? blockName : `${blockName}-block`;

fs.mkdirSync(blockPath);

function renderVue() {
  return `<template>
  <div class="${blockName}"></div>
</template>

<script>
export default {
  name: '${componentName}',
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

const vueFilePath = path.join(blockPath, `${blockName}.vue`);
const lessFilePath = path.join(blockPath, `${blockName}.less`);

fs.writeFileSync(vueFilePath, renderVue());
fs.writeFileSync(lessFilePath, renderLess());

try {
  childProcess.execSync(`open ${vueFilePath}`, { stdio: 'ignore' });
} catch (e) {
  console.log(
    'Блок создан. Чтобы открыть его автоматически в IDE, настройте в системе программу по умолчанию для .vue файлов'
  );
}

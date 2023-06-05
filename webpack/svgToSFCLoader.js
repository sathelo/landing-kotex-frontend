module.exports = function (svg) {
  const template = svg.replace('<svg', '<svg v-on="$listeners"');
  return `<template>${template}</template>`;
};

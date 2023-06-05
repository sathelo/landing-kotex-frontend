function normalizeAssetName(name) {
  return name.replace(/\?.+/, '');
}

function getUniqueArrayItem(array) {
  return array.filter((value, index) => array.indexOf(value) === index);
}

module.exports = {
  normalizeAssetName,
  getUniqueArrayItem,
};

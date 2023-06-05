const path = require('path');
const fs = require('fs');

module.exports = () => {
  const gitIgnore = path.resolve('.gitignore');
  const content = fs.readFileSync(gitIgnore, 'utf-8');
  const re = /\/?dist/;

  if (re.test(content)) {
    throw new Error('dist необходимо убрать из .gitignore');
  }
};

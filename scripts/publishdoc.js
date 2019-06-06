var ghpages = require('gh-pages');

ghpages.publish('docsDist', {
  repo: 'git@github.com:liuyuan6088/naruto-ui.git'
}, (err) => {
  if (err) {
    console.log(err)
  }
});
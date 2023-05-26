const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ]
})

module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Home Page',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    about: {
      entry: 'src/about.js',
      template: 'public/about.html',
      filename: 'about.html',
      title: 'About Page',
      chunks: ['chunk-vendors', 'chunk-common', 'about']
    },
    applePie: {
      entry: 'src/applePie.js',
      template: 'public/applePie.html',
      filename: 'applePie.html',
      title: 'Apple Pie',
      chunks: ['chunk-vendors', 'chunk-common', 'apple-pie']
    },
    chickenAlfredo: {
      entry: 'src/chickenAlfredo.js',
      template: 'public/chickenAlfredo.html',
      filename: 'chickenAlfredo.html',
      title: 'Chicken Alfredo',
      chunks: ['chunk-vendors', 'chunk-common', 'chicken-alfredo']
    },
    chickenNoodleSoup: {
      entry: 'src/chickenNoodle.js',
      template: 'public/chickenNoodle.html',
      filename: 'chikenNoodle.html',
      title: 'Chicken Noodle Soup',
      chunks: ['chunk-vendors', 'chunk-common', 'chicken-noodle']
    },
  }
};


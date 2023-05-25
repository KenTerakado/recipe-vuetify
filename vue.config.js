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
    
  }
};


# vue-starter-pack

> Webpack Vuejs starter kit

## Included
Vue Resource https://github.com/pagekit/vue-resource
Font Awesome https://github.com/Justineo/vue-awesome
Progress Bar https://github.com/hilongjw/vue-progressbar
Progress Bar interceptor https://github.com/staskjs/vue-resource-progressbar-interceptor
Lazy Image https://github.com/yyh1102/vue-lazyload-images
Carousel https://github.com/SSENSE/vue-carousel
Webpack Favicons https://github.com/jantimon/favicons-webpack-plugin
Click Away https://github.com/simplesmiler/vue-clickaway
Config Setup
Vue.http.options.root = '/root';
Vue.use(VueProgressBar, {
  color: 'green',
  failedColor: 'red',
  thickness: '3px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300,
  },
  autoRevert: true,
  location: 'top',
  inverse: false,
});


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

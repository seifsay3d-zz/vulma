# Vulma

> An opinionated starter code based on Vue [JS] - Bulma [CSS] - Webpack [Bundler]

### Why use Vulma
Vulma is created in order to shorten start up time for new projects. Typically most single page applications do the same functionality where they consume a REST API, manipulate and render data. Vulma tries to optimize the process for developers so they can dive straight in and write application specific code.

###Application structure
Vulma uses [Vuejs webpack template](https://github.com/vuejs-templates/webpack) and an opinionated folder structure on top of it.
```
+-- api
|   +-- axios  -- axios request interceptor
+-- assets
|   +-- img  -  static images
|   +-- scss  - sass files 
+-- components
|   +-- moduleA  - components for 'moduleA'
|   +-- utils    - shared components 
+-- directives 
+-- layout
|   +-- pages   - where top level page component lies
|   +-- base 
|   +-- header 
|   +-- footer
+-- plugins
+-- router
+-- store
|   +-- modules 
|   +-- |   +-- consumeRest   // example for consuming rest api
|   +-- |   +-- translation   // handle translations
|   +-- index combines all modules and export store obj
```


### Included
* Core 
  * [vuex](https://github.com/vuejs/vuex)
  * [vue-router](https://github.com/vuejs/vue-router)
  * [vue-local-storage](https://github.com/pinguinjkeke/vue-local-storage)
  * [vue-i18n](https://github.com/kazupon/vue-i18n)
  * [vuex-rest-api](https://github.com/christianmalek/vuex-rest-api)
* Plugins
  * [vue-awesome](https://github.com/Justineo/vue-awesome)
  * [vue-carousel](https://github.com/SSENSE/vue-carousel)
  * [favicons-webpack-plugin](https://github.com/jantimon/favicons-webpack-plugin)
  * [vue-social-sharing](https://github.com/nicolasbeauvais/vue-social-sharing)
  * [vue-google-maps](https://github.com/xkjyeah/vue-google-maps)
  * [vue-time-ago](https://github.com/egoist/vue-timeago)
  * [vue2-filters](https://github.com/freearhey/vue2-filters)
  * [vue-paginate](https://github.com/TahaSh/vue-paginate)
  * [vue-analytics](https://github.com/MatteoGabriele/vue-analytics)
  * [vue-multiselect](https://github.com/monterail/vue-multiselect)
* Directives
  * [vue-scrollto](https://github.com/rigor789/vue-scrollTo)
  * background 
* Components
  * Application loading
  * Loading
  * Page Header

### Build Setup
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

###Todo:
* Authentication 
* Animations
* Validation
* SEO
* Dropzone File upload
* Breadcrumbs
* Bugsnag

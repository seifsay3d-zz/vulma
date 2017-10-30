<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Vue + Bulma ++ 
          </h1>
          <h2 class="subtitle">
            Dive straight in!
          </h2>
        </div>
      </div>
    </section>
    <div class="section">
      <div class="columns">
        <div class="column">
          <h1>Included</h1>
          <ol>
            <li> VueResource </li>
            <li> VueProgressBar </li>
            <li> VueResourceProgressBarInterceptor </li>
            <li> VueLazyImage </li>
            <li> VueCarousel </li>
            <li> 'vue-awesome/icons';</li>
            <li> Icon </li>
            <li> FlagIcon </li>
            <li> { directive as onClickaway } </li>
            <li> Vue2Filters </li>
            <li> VueAnalytics </li>
            <li> * as VueGoogleMaps </li>
            <li> SocialSharing </li>
            <li> Paginate </li>
            <li> VueTimeago </li>
            <li> VueI18n </li>
            <li> VueScrollTo </li>
            <li> Vuex </li>
            <li> createPersist </li>
            <li> App </li>
            <li> router </li>
            <li> translation </li>
          </ol>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="columns">
        <div class="column">
          <h1>To Do</h1>
          <ol>
            <li>File Upload</li>
            <li>Mega Menu</li>
            <li>Page Section Component</li>
            <li>More Vue-Bulma Componenets</li>
            <li>Validation</li>
            <li>Vue Router Animations</li>
            <li>Meta Tags</li>
            <li>Break points</li>
            <li>Reset File</li>
            <li>Authentication</li>
            <li>Bread crumbs</li>
            <li>Vue Bugsnag</li>
            <li>Server Side Renderings</li>
          </ol>
        </div>
      </div>
    </div>
    <section class="section">
      <div class="columns">
        <div class="column image is-5">
          <h1>Code Examples</h1>
          <lazy-image 
          :src="'http://via.placeholder.com/500x500'"
          :placeholder="'http://via.placeholder.com/600x600'"
          />
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <div class="hello">
            <h1>{{ msg }} <span>{{ 20000 | currency('EGP',0)}}</span> </h1>
          </div>
        </div>
        <div class="column">
          <carousel  v-on-clickaway="away">
            <slide>
              Slide 1 Content
            </slide>
            <slide>
              Slide 2 Content
            </slide>
            <slide>
              Slide 2 Content
            </slide>
            <slide>
              Slide 2 Content
            </slide>
          </carousel>
        </div>
      </div>
    </section>
     <social-sharing url="https://vuejs.org/"
                      title="The Progressive JavaScript Framework"
                      description="Intuitive, Fast and Composable MVVM for building interactive interfaces."
                      quote="Vue is a progressive framework for building user interfaces."
                      hashtags="vuejs,javascript,framework"
                      twitter-user="vuejs"
                      inline-template>
  <div>
      <network network="email">
          <i class="fa fa-envelope"></i> Email
      </network>
      <network network="facebook">
        <i class="fa fa-facebook"></i> Facebook
      </network>
      <network network="googleplus">
        <i class="fa fa-google-plus"></i> Google +
      </network>
      <network network="line">
        <i class="fa fa-line"></i> Line
      </network>
      <network network="linkedin">
        <i class="fa fa-linkedin"></i> LinkedIn
      </network>
      <network network="odnoklassniki">
        <i class="fa fa-odnoklassniki"></i> Odnoklassniki
      </network>
      <network network="pinterest">
        <i class="fa fa-pinterest"></i> Pinterest
      </network>
      <network network="reddit">
        <i class="fa fa-reddit"></i> Reddit
      </network>
      <network network="skype">
        <i class="fa fa-skype"></i> Skype
      </network>
      <network network="telegram">
        <i class="fa fa-telegram"></i> Telegram
      </network>
      <network network="twitter">
        <i class="fa fa-twitter"></i> Twitter
      </network>
      <network network="vk">
        <i class="fa fa-vk"></i> VKontakte
      </network>
      <network network="weibo">
        <i class="fa fa-weibo"></i> Weibo
      </network> 
      <network network="whatsapp">
        <i class="fa fa-whatsapp"></i> Whatsapp
      </network>
  </div>
</social-sharing>

<gmap-map
  :center="{lat:10, lng:10}"
  :zoom="7"
  map-type-id="terrain"
  style="width: 500px; height: 300px"
></gmap-map>

  </div>

</template>

<script>
  import { Carousel, Slide } from 'vue-carousel';
  import { mixin as clickaway } from 'vue-clickaway';

  export default {
    name: 'hello',
    mixins: [clickaway],
    components: {
      Carousel,
      Slide,
    },
    methods: {
      away: function away() {
        console.log('clicked away');
      },
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
      };
    },
    created: function created() {
      const resource = this.$resource('categories/');
      resource.get().then((response) => {
        this.products = response.body.results;
      });
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>

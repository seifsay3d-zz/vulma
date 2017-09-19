<template>
  <div>
    <nav class="navbar ">
      <div class="navbar-brand">
        <a class="navbar-item" href="http://bulma.io">
          <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
        </a>


        <div class="navbar-burger burger" data-target="navMenubd-example">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navMenubd-example" class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link  is-active" href="/documentation/overview/start/">
              Docs
            </a>
            <div class="navbar-dropdown ">
              <a class="navbar-item " href="/documentation/overview/start/">
                Overview
              </a>
              <a class="navbar-item " href="http://bulma.io/documentation/modifiers/syntax/">
                Modifiers
              </a>
              <a class="navbar-item " href="http://bulma.io/documentation/columns/basics/">
                Columns
              </a>
              <a class="navbar-item " href="http://bulma.io/documentation/layout/container/">
                Layout
              </a>
              <a class="navbar-item " href="http://bulma.io/documentation/form/general/">
                Form
              </a>
              <a class="navbar-item " href="http://bulma.io/documentation/elements/box/">
                Elements
              </a>

              <a class="navbar-item is-active" href="http://bulma.io/documentation/components/breadcrumb/">
                Components
              </a>

              <hr class="navbar-divider">
              <div class="navbar-item">
                <div>
                  <p class="is-size-6-desktop">
                    <strong class="has-text-info">0.5.1</strong>
                  </p>

                  <small>
                    <a class="bd-view-all-versions" href="/versions">View all versions</a>
                  </small>

                </div>
              </div>
            </div>
          </div>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link " href="http://bulma.io/blog/">
              Blog
            </a>
            <div id="blogDropdown" class="navbar-dropdown " data-style="width: 18rem;">

              <a class="navbar-item" href="/2017/08/03/list-of-tags/">
                <div class="navbar-content">
                  <p>
                    <small class="has-text-info">03 Aug 2017</small>
                  </p>
                  <p>New feature: list of tags</p>
                </div>
              </a>

              <a class="navbar-item" href="/2017/08/01/bulma-bootstrap-comparison/">
                <div class="navbar-content">
                  <p>
                    <small class="has-text-info">01 Aug 2017</small>
                  </p>
                  <p>Bulma / Bootstrap comparison</p>
                </div>
              </a>

              <a class="navbar-item" href="/2017/07/24/access-previous-bulma-versions/">
                <div class="navbar-content">
                  <p>
                    <small class="has-text-info">24 Jul 2017</small>
                  </p>
                  <p>Access previous Bulma versions</p>
                </div>
              </a>

              <a class="navbar-item" href="http://bulma.io/blog/">
                More posts
              </a>
              <hr class="navbar-divider">
              <div class="navbar-item">
                <div class="navbar-content">
                  <div class="level is-mobile">
                    <div class="level-left">
                      <div class="level-item">
                        <strong>Stay up to date!</strong>
                      </div>
                    </div>
                    <div class="level-right">
                      <div class="level-item">
                        <a class="button bd-is-rss is-small" href="http://bulma.io/atom.xml">
                          <span class="icon is-small">
                            <i class="fa fa-rss"></i>
                          </span>
                          <span>Subscribe</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="navbar-item has-dropdown is-hoverable">
            <div class="navbar-link">
              More
            </div>
            <div id="moreDropdown" class="navbar-dropdown ">
              <a class="navbar-item " href="http://bulma.io/extensions/">
                <div class="level is-mobile">
                  <div class="level-left">
                    <div class="level-item">
                      <p>
                        <strong>Extensions</strong>
                        <br>
                        <small>Side projects to enhance Bulma</small>
                      </p>
                    </div>
                  </div>
                  <div class="level-right">
                    <div class="level-item">
                      <span class="icon has-text-info">
                        <i class="fa fa-plug"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <a class="navbar-item " href="http://bulma.io/expo/">
            <span class="bd-emoji">⭐️</span>
            Expo
          </a>
          <a class="navbar-item " href="http://bulma.io/love/">
            <span class="bd-emoji">❤️</span>
            Love
          </a>
        </div>


      </div>
    </nav>
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
          <h1>To Do</h1>
          <ol>
            <li>Local Storage</li>
            <li>Translation</li>
            <li>File Upload</li>
            <li>Mega Menu</li>
            <li>Page Section Component</li>
            <li>More Vue-Bulma Componenets</li>
            <li>Validation</li>
            <li>Scroll To</li>
            <li>Vue Router Animations</li>
            <li>Google Maps</li>
            <li>Google Analytics</li>
            <li>Meta Tags</li>
            <li>Break points</li>
            <li>Reset File</li>
            <li>Social Sharing</li>
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

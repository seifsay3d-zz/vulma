<template>
  <div>
    <section class="hero is-info" id="scrollTo">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-2">
            <b>Dive straight in</b>
          </h1>
          <h2 class="subtitle">
            A Vue-Bulma opinionated bolier plate code for peeps with tight deadlines :)
          </h2>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <h1 class="is-size-2">Included</h1>
            <div class="columns">
              <div class="column">
                <ul>
                  <li>
                    <b>Core</b>
                    <ul>
                      <li>Vue Resource</li>
                      <li>Vue Router</li>
                      <li>Google Analytics</li>
                      <li>Vuex</li>
                      <li>Vuex Local Storage</li>
                      <li>VueI18n [translation]</li>
                    </ul>
                  </li>
                  <li> 
                    <b>Componenets</b>
                    <ul>
                      <li>Vue Time Ago</li>
                      <li>Vue Awesome</li>
                      <li>Flag Icon</li>
                      <li>Pagination</li>
                      <li>Filters</li>
                      <li>Carousel</li>
                      <li>Social Sharing</li>
                      <li>Google Maps</li>
                      <li>Vue Progress Bar</li>
                    </ul>
                  </li>
                  <li>
                    <b>Directives</b>
                    <ul>
                      <li>Click Away</li>
                      <li>Background</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="column">
                <ul>
                  <li><b>ToDo</b></li>
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
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column image">
            <h1 class="title is-3">Components</h1>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <h3 class="subtitle is-4"># Time Ago</h3>
            <timeago since="7/6/1993"></timeago>
            <code>
              &lt;timeago since="7/6/1993"&gt;&lt;/timeago&gt;
            </code>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <h3 class="subtitle is-4"># Vue Awesome</h3>
            <icon name="facebook" scale="1"></icon>
            <icon name="facebook" scale="1.5"></icon>
            <icon name="facebook" scale="2"></icon>
            <code>
              &lt;icon name="facebook" scale="1"&gt;&lt;/icon&gt;
              &lt;icon name="facebook" scale="1.5"&gt;&lt;/icon&gt;
              &lt;icon name="facebook" scale="2"&gt;&lt;/icon&gt;
            </code>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <h3 class="subtitle is-4"># Flag Icon</h3>
            <flag iso="eg" />
            <flag iso="nl" />
            <flag iso="ca" />
            <code>
              &lt;flag iso="eg" /&gt;
              &lt;flag iso="nl" /&gt;
              &lt;flag iso="ca" /&gt;
            </code>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <h3 class="subtitle is-4"># Scroll To</h3>
            <a href="#" v-scroll-to="'#scrollTo'">Click Me</a>
            <code>
              &lt;a href="#" v-scroll-to="'#scrollTo'"&gt;Click Me&lt;/a&gt;
            </code>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <h3 class="subtitle is-4"># Pagination</h3>
            <div class="columns">
              <div class="column is-2">
                <paginate
                :page-count="20"
                :click-handler="paginationCallback"
                prev-text="Previous"
                next-text="Next Page"
                :container-class="'pagination is-small is-centered'"
                :page-link-class="'pagination-link'"
                active-class="is-current"
                prev-link-class="pagination-previous"
                next-link-class="pagination-next"
                >
              </paginate>
              </div>
            </div>
          <code>
            &lt;paginate :page-count="20" :click-handler="paginationCallback"
            prev-text="Previous" next-text="Next Page"
            :container-class="'pagination is-small is-centered'"
            :page-link-class="'pagination-link'"
            active-class="is-current"
            prev-link-class="pagination-previous"
            next-link-class="pagination-next"
            &gt;
          </code>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <h3 class="subtitle is-4"># Filters</h3>
            <span>{{ 20000 | currency('$',0)}}</span>
          </div>
        </div>
        <div class="columns">
          <div class="column">
          <h3 class="subtitle is-4"># Carousel</h3>
            <carousel>
              <slide>
                Slide 1 Content
              </slide>
              <slide>
                Slide 2 Content
              </slide>
              <slide>
                Slide 3 Content
              </slide>
              <slide>
                Slide 4 Content
              </slide>
            </carousel>
          </div>
        </div>
        <div class="columns">
          <div class="column">
          <h3 class="subtitle is-4"># Social Sharing</h3>
            <social-sharing url="https://vuejs.org/"
            title="The Progressive JavaScript Framework"
            description="Intuitive, Fast and Composable MVVM for building interactive interfaces."
            quote="Vue is a progressive framework for building user interfaces."
            hashtags="vuejs,javascript,framework"
            twitter-user="vuejs"
            inline-template>
            <div>
              <network network="email">
                <icon name="envelope"></icon>
              </network>
              <network network="facebook">
                <icon name="facebook"></icon>
              </network>
              <network network="googleplus">
                <icon name="google-plus"></icon>
              </network>
              <network network="line">
                <icon name="line"></icon>
              </network>
              <network network="linkedin">
                <icon name="linkedin"></icon>
              </network>
              <network network="odnoklassniki">
                <icon name="odnoklassniki"></icon>
              </network>
              <network network="pinterest">
                <icon name="pinterest"></icon>
              </network>
              <network network="reddit">
                <icon name="reddit"></icon>
              </network>
              <network network="skype">
                <icon name="skype"></icon>
              </network>
              <network network="telegram">
                <icon name="telegram"></icon>
              </network>
              <network network="twitter">
                <icon name="twitter"></icon>
              </network>
              <network network="vk">
                <icon name="vk"></icon>
              </network>
              <network network="weibo">
                <icon name="weibo"></icon>
              </network> 
              <network network="whatsapp">
                <icon name="whatsapp"></icon>
              </network>
            </div>
          </social-sharing>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <h3 class="subtitle is-4">Google Maps</h3>
            <gmap-map
            :center="{lat:10, lng:10}"
            :zoom="7"
            map-type-id="terrain"
            style="width:100%; height: 300px"
            ></gmap-map>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <h3 class="subtitle is-4">Progress Bar</h3>
            <button @click="fetchData" class="button is-primary">Trigger resource</button>
            <vue-progress-bar></vue-progress-bar>
          </div>
        </div>
      </div>

    </section>




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
    paginationCallback: (page) => {
      console.log('pageNumber' + page);
    },
    fetchData: function(){
      const resource = this.$resource('posts/1');
      resource.get().then((response) => {
        this.products = response.body.results;
      });
    }
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      timeAgo:'<timeago since="7/6/1993"></timeago>',
    };
  },
  created: function created() {

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  ul{
    ul{
      padding-left:10px;
    }
  }
</style>

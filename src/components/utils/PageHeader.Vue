<template>
  <section class="hero is-header">
    <div class="hero-body" :class="bodystyles">
      <div class="container">
        <slot>
          This will only be displayed if there is no content
          to be distributed.
        </slot>      
      </div>
    </div>
  </section>
</template>
<script>
  export default{
    props: {
      backgroundImages: {
      },
      background: {
        type: Array,
      },
      fade: {
        type: String,
      },
      size: {
        type: String,
      },
      sticky: {
        type: String,
      },
      bodystyles: {
        type: String,
        default: ''
      },
    },
    mounted: function mounted() {
      if (this.backgroundImages) {
        if (this.backgroundImages.length > 0) {
          this.$el.style.backgroundImage = `url(${this.backgroundImages[0]})`;
          this.$el.style.backgroundSize = 'cover';
          this.$el.style.backgroundRepeat = 'none';
          this.$el.style.backgroundPosition = 'center';
        }
      }
    },
  };
</script>
<style lang="scss" scoped>
  @import '../assets/scss/vars.scss';
  // background directive
  .hero-body{
    padding:4.5rem 1.5rem;
  }
  .has-dark-layer{
    position: relative;
    &:after{
      content: "";
      z-index:1;
      position: absolute;
      top:0;
      left:0;
      width:100%;
      height:100%;
      background: rgba(0,0,0,0.3);
    }
    .hero-body{
      z-index:2;
      p{
        color:white;
      }
    }
  }
  .has-light-layer{
    position: relative;
    &:after{
      content: "";
      z-index:1;
      position: absolute;
      top:0;
      left:0;
      width:100%;
      height:100%;
      background: rgba(255,255,255,0.3);
    }
    .hero-body{
      z-index:2;
      p{
        color:gray;
      }
    }
  }
// end background directive
.hero{
  &.is-info{
    background: $info;
  }
  // background: url('https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif');
  background-size: cover;
  background-position: center center;
}
</style>
<template>
  <div>
    <div class="wrapper has-text-centered" v-if="pending || error">
      <div v-if="pending">
        <div class="loading style-1"></div>
      </div>
      <div v-if="error">
        smthing went wrong
      </div>  
    </div>
  </div>
</template>
<script>
  export default{
    props:{
      error: {
        default: false,
      },
      pending:{
        default: true,
      },
    },
  };
</script>
<style lang="scss" scoped>
@import '../../assets/scss/vars';
  .wrapper{
    margin:0 auto;
    width:250px;
  }  
  .loading {
  display: inline-block;
  border-width: 10px;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  }

.style-1 {
  border-style: solid;
  border-color: $primary transparent;
  }

@-webkit-keyframes spin {
  100% { -webkit-transform: rotate(359deg); }
  }

@-moz-keyframes spin {
  100% { -moz-transform: rotate(359deg); }
  }

@-o-keyframes spin {
  100% { -moz-transform: rotate(359deg); }
  }

@keyframes spin {
  100% {  transform: rotate(359deg); }
  }
</style>

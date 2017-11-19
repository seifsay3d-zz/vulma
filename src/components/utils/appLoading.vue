<template>
  <div>
    <div class="wrapper">
      <div class="loading style-1"></div>  
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '../../assets/scss/vars';
.wrapper{
  text-align:center;
  width:100%;
  height:100%;
}
.loading {
  position: relative;
  top:48vh;
  display: inline-block;
  border-width: 30px;
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

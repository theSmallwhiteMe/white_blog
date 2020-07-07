<template>
  <div id="app">
    <router-view :scrollHeight="scrollHeight"></router-view>
  </div>
</template>

<script>
let vueElement;
function map_callback(el) {
  vueElement = el
}
export default {
  name: 'App',
  data(){
    return {
      scrollHeight:0,
    }
  },
  mounted() {
    map_callback(this)
  },
  components: {

  }
}

function getScrollTop() {
  let scrollPos;
  if (window.pageYOffset) {
    scrollPos = window.pageYOffset;
  } else if (document.compatMode && document.compatMode != 'BackCompat') {
    scrollPos = document.documentElement.scrollTop;
  } else if (document.body) {
    scrollPos = document.body.scrollTop;
  }
  //console.log( scrollPos )
  vueElement.scrollHeight = scrollPos
  //return scrollPos;
}


if(document.addEventListener){
  document.addEventListener('mousewheel',getScrollTop,false);
} else {
  document.attachEvent("onmousewheel",getScrollTop);
}

</script>

<style>
#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  font-weight: bold !important;
  font-family: 'Lato' !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

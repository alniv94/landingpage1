<!-- index.vue -->

<template>
  <div>
    <h1 class="title">Hello World</h1>
  </div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js';
anime({
  targets: '.title .el',
  left: '240px',
  backgroundColor: '#FFF',
  borderRadius: ['0%', '50%'],
  easing: 'easeInOutQuad'
});
</script>


<style>
.title{
  height: 200px;
  width: 200px;
  border-color: aqua;
}

</style>

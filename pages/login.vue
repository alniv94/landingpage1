<!-- index.vue -->

<template>
  <div>
    <h1 class="title">Hello World</h1>
  </div>
</template>

<script>
  export default {
    mounted() {
      this.setAnimation()
    },

    methods: {
      setAnimation() {
        this.$anime({
          targets: '.title',
          translateX: 250,
          rotate: '1turn',
          backgroundColor: '#FFF',
          duration: 2000,
          loop: true
        })
      }
    }
  }
</script>

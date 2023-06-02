<template>
  <v-container  class="pa-0 ma-0 bg-background" fluid >
    <Hero />
    <Products/>
    <About/>
    <WhyUs/>
    <Client/>
    <Testimonials/>
    <Contact/>
    <Subfooter/>

 

  </v-container>
</template>

<script>
export default {
  computed: {
    component() {
      switch (this.$route.params.component) {
        case 'a':
          return ComponentA
        case 'b':
          return ComponentB
        default:
          return null
      }
    }
  }
}
</script>


<style scoped>
 
</style>
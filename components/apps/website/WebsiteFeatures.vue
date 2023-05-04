<template>
  <v-container class="mb-10">
    <p class="text-center text-accent mb-10 text-h4 font-weight-bold">Our Features</p>
    <v-row align="start" justify="space-between" data-aos="fade-up"
          data-aos-duration="500">
      <v-col v-for="(feature, index) in features" :key="index" cols="12" md="6" lg="4">
        <v-card class="mx-auto">
          <v-card-text class="text-center">
            <Icon :name="feature.icon" size="3em" />
            <h3 class="mt-6 text-accent" >{{ feature.title }}</h3>
            <p class="subtitle-1 mt-3">{{ feature.description }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>

     const features = [
        {
          icon: 'mdi-web',
          title: 'Drag-and-Drop Website Editor',
          description: 'Create and customize your website design and layout with ease using our user-friendly website editor.'
        },
        {
          icon: 'mdi-view-grid',
          title: 'Template Library',
          description: 'Choose from a wide range of customizable website templates to get started quickly and easily.'
        },
        {
          icon: 'mdi-shopping',
          title: 'E-commerce Integration',
          description: 'Our website builder ERP offers built-in support for online stores with shopping carts, payment gateways, and order management.'
        },
        {
          icon: 'mdi-web-clock',
          title: 'Domain Management',
          description: 'Register and manage your domain names directly from our platform, with easy DNS configuration and domain forwarding.'
        },
        {
          icon: 'mdi-magnify',
          title: 'SEO Optimization',
          description: 'Optimize your website for search engines with tools for keyword research, meta tags, and analytics integration.'
        },
        {
          icon: 'mdi-chart-areaspline',
          title: 'Analytics and Reporting',
          description: 'Track the performance uilt-in analytics and reporting tools, with detailed insights and reporting dashboards.'
        }
      ]
 
</script>

<style>

.subtitle-1 {
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
}
</style>

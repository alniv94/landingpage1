<template>
    <div class="tab-component">
      <v-card>
        <v-card-title>{{ tabTitle }}</v-card-title>
        <v-card-text>{{ tabContent }}</v-card-text>
      </v-card>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      tabTitle: String,
      tabContent: String,
    },
  };
  </script>
  
  <style scoped>
  .tab-component {
    margin-top: 16px;
  }
  </style>
  
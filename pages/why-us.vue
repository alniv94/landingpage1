<template>
    <v-container class="text-center mt-15">
      <h2>Why Choose Apollo System?</h2>
      <v-row class="my-8">
        <v-col cols="12" md="4">
          <v-card  class="why-choose-card">
            <v-card-text>
              <v-icon size="48" color="primary">mdi-clock-time-eight</v-icon>
              <h3>Save Time</h3>
              <p>Our ERP solutions automate many business processes, freeing up time for your team to focus on more important tasks.</p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card class="why-choose-card">
            <v-card-text>
              <v-icon size="48" color="primary">mdi-cash-check</v-icon>
              <h3>Save Money</h3>
              <p>Our ERP solutions help reduce costs by improving efficiency and accuracy, and providing valuable insights into your business operations.</p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card class="why-choose-card">
            <v-card-text>
              <v-icon size="48" color="primary">mdi-chart-line</v-icon>
              <h3>Drive Growth</h3>
              <p>Our flexible and scalable ERP solutions can easily adapt to changing business needs, enabling you to expand your operations and reach new heights.</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-btn color="primary" class="white--text mx-auto">Get Started</v-btn>
    </v-container>
  </template>
  
  <style>
  .why-choose-card:hover {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transform: translateY(-2px);
  }
</style>
<template>
  <v-container class="my-15 ">
    <div
      v-motion
      :initial="{
        opacity: 0,
        y: 100,
      }"
      :visible="{
        opacity: 1,
        y: 0,
      }"
    >
      <span class="py-5 text-accent text-h4"> Who We Are</span>
      <v-row>
        <v-col cols="12" sm="6">
          <h1>
            Empowering businesses to succeed through innovative ERP solutions.
          </h1>
        </v-col>
        <v-col cols="12" sm="6">
          <p class="">
           Apollo System  provides <strong class="text-accent">customizable and user-friendly</strong>  ERP software
            solutions that streamline business operations and help organizations
            achieve their goals. With <strong class="text-accent">flexible and scalable solutions,</strong>  we help
            companies grow their operations. Our commitment to excellence and
            innovation is evidenced by numerous industry awards. Join businesses
            who partner with Apollo System to <strong class="text-accent">optimize processes, reduce costs,</strong> 
            and <strong class="text-accent">increase productivity.</strong> 
          </p>
        </v-col>
      </v-row>
      <v-btn color="warning" class="white--text mx-auto">Learn More</v-btn>
    </div>
  </v-container>
</template>

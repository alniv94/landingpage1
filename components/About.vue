<template>
  <section class="bg-light-blue-lighten-4 my-10">
    <v-container class="py-15  content">
      <div>
        <span class="py-5 text-accent text-h4"> Who We Are</span>
        <v-row class="mt-4">
          <v-col
            cols="12"
            sm="6"
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
          >
            <h1>
              Empowering businesses to succeed through innovative ERP solutions.
            </h1>
          </v-col>
          <v-col cols="12" sm="6"
          data-aos="fade-left"
            data-aos-easing="ease-in-sine">
            <p style="line-height: 1.5">
              <span class="text-accent text-h6 font-weight-bold"> Apollo System </span>provides
              <strong class="text-accent"
                >customizable and user-friendly</strong
              >
              ERP software solutions that streamline business operations and
              help organizations achieve their goals. With
              <strong class="text-accent"
                >flexible and scalable solutions,</strong
              >
              we help companies grow their operations. Our commitment to
              excellence and innovation is evidenced by numerous industry
              awards. Join businesses who partner with Apollo System to
              <strong class="text-accent"
                >optimize processes, reduce costs,</strong
              >
              and <strong class="text-accent">increase productivity.</strong>
            </p>
          </v-col>
        </v-row>
        <v-btn color="warning" class="white--text mx-auto" data-aos="fade-up">Learn More</v-btn>
      </div>
    </v-container>
  </section>
</template>

<style scoped>
section{
  transform: skewY(-4deg);
}
.content{
  transform: skewY(4deg);
}
</style>
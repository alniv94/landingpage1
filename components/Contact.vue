<template>
  <v-container class="my-10">
    <div>
      <p
        class="text-white text-h4 mb-5 font-weight-bold"
        data-aos="zoom-in-up"
        data-aos-easing="ease-out-cubic"
        data-aos-delay="200"
      >
        Connect With Us
      </p>
    </div>

    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.2900800927937!2d121.05951037516382!3d14.582539577518462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c8140f9db0af%3A0x338e44c1d6850a40!2sMutual%20Success%20Lighting%20Fixture%20Inc.!5e0!3m2!1sen!2sph!4v1681885827220!5m2!1sen!2sph"
      width="100%"
      height="350"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      data-aos="zoom-in-up"
      data-aos-easing="ease-out-cubic"
      data-aos-delay="200"
    ></iframe>

    <v-row class="mt-5">
      <v-col
        cols="12"
        md="4"
        data-aos="zoom-in-up"
        data-aos-easing="ease-out-cubic"
        data-aos-delay="200"
      >
        <v-list class="bg-background">
          <v-list-item>
            <v-list-item-title class="text-white font-weight-bold py-5">
              Location
            </v-list-item-title>
            <v-icon>mdi-map-marker</v-icon>

            Unit E-3003A, 30 Exchange Road Ortigas Center, San Antonio, Pasig,
            Metro Manila
          </v-list-item>
          <v-list-item>
            <v-list-item-title class="text-white font-weight-bold py-5">
              Call
            </v-list-item-title>
            <v-icon>mdi-phone</v-icon>

            (555) 555-5555
          </v-list-item>
          <v-list-item>
            <v-list-item-title class="text-white font-weight-bold py-5">
              Email
            </v-list-item-title>
            <v-icon>mdi-email</v-icon>

            info@apollosystem.com
          </v-list-item>
        </v-list>
      </v-col>
      <v-col
        cols="12"
        md="8"
        data-aos="zoom-in-up"
        data-aos-easing="ease-out-cubic"
        data-aos-delay="200"
      >
        <v-form>
          <div class="d-flex">
            <v-text-field
              label="Name"
              required
              variant="outlined"
            ></v-text-field>
            <v-text-field
              label="Email"
              required
              variant="outlined"
            ></v-text-field>
          </div>

          <v-text-field
            label="Subject"
            required
            variant="outlined"
          ></v-text-field>
          <v-textarea label="Message" required variant="outlined"></v-textarea>
          <v-btn class="mr-4 bg-accent" size="large"> Send Message </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup></script>

<style scoped></style>

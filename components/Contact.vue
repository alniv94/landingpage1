<template>
  <v-container class="my-16">
    
    <v-row>
      <v-col cols="12" md="6">
        <v-card
          class="d-flex h-100 flex-column justify-space-between pa-5"
          outlined
          color=""
        >
          <v-card-title> Contact Details </v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item>
                <v-icon>mdi-map-marker</v-icon>

                Unit E-3003A, 30 Exchange Road Ortigas Center, San Antonio,
                Pasig, Metro Manila
              </v-list-item>
              <v-list-item>
                <v-icon>mdi-phone</v-icon>

                (555) 555-5555
              </v-list-item>
              <v-list-item>
                <v-icon>mdi-email</v-icon>

                info@apollosystem.com
              </v-list-item>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.2900800927937!2d121.05951037516382!3d14.582539577518462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c8140f9db0af%3A0x338e44c1d6850a40!2sMutual%20Success%20Lighting%20Fixture%20Inc.!5e0!3m2!1sen!2sph!4v1681885827220!5m2!1sen!2sph"
                width="400"
                height="300"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card
          class="d-flex h-100 flex-column justify-space-between pa-5"
          outlined
          color=""
        >
          <v-card-title> Send Us an Email </v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field v-model="name" label="Name" required></v-text-field>
              <v-text-field
                v-model="email"
                label="Email"
                required
              ></v-text-field>
              <v-text-field
                v-model="subject"
                label="Subject"
                required
              ></v-text-field>
              <v-textarea
                v-model="message"
                label="Message"
                required
              ></v-textarea>
              <v-btn color="primary" class="mr-4" @click="sendEmail">
                Send
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const name = ref("");
const email = ref("");
const subject = ref("");
const message = ref("");

function sendEmail() {
  // send email code
}
</script>

<style>
.v-list-item__content,
.v-text-field__details {
  font-size: 14px;
}

.v-card__title {
  font-weight: bold;
}

.v-text-field {
  width: 100%;
}
</style>

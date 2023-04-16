<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" sm="7" class="banner">
        <div>
          <v-img src="/images/logo.png" class="w-25"></v-img>
        </div>
      </v-col>
      <v-col cols="12" sm="5" class="bg-grey-lighten-5">
        <div class="ml-10 pa-5 d-flex justify-center flex-column">
          <h1>Apollo Lightings</h1>
          <p>Enterprise Resource Planning</p>
          <v-form >
            <v-card class="mt-8 pa-10" flat max-width="450">
              <v-card-title class="mb-5">
                <span class="text-h6">Login</span>
              </v-card-title>
              <v-card-text class="pa-5">
                <v-text-field
                  class="rounded-pill"
                  density="comfortable"
                  label="Username"
                  variant="outlined"
                  required
                  max-width="374"
                >
                </v-text-field>

                <v-text-field
                  class="rounded-b-lg"
                  density="comfortable"
                  label="Password"
                  variant="outlined"
                  required
                ></v-text-field>
              </v-card-text>

              <v-card-actions>
                <v-btn class="mt-10" color="blue-darken-1" variant="tonal" size="large">
                  Sign In
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-form>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script></script>

<style scoped>

.banner {
  background: rgb(165, 214, 167);
  background: radial-gradient(
    circle,
    rgba(165, 214, 167, 1) 18%,
    rgba(56, 185, 36, 1) 100%,
    rgba(36, 185, 61, 1) 100%
  );
}
</style>

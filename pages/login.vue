<template>
  <v-container class="pa-0 fill-height" fluid>
    <v-row justify="center" class="container">
      <v-col cols="12" sm="7" class="banner hidden-sm-and-down">
        <div class="d-flex flex-column justify-center align-center">
          <v-img src="/images/hero.png" class="w-25"></v-img>
          <span class=""
            >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid,
            dolores!</span
          >
          <v-btn
            class="mt-5"
            color="indigo-darken-3"
            size="large"
          >
            Visit page
          </v-btn>
        </div>
      </v-col>
      <v-col cols="12" sm="5" class="bg-grey-lighten-5">
        <div class="ml-10 pa-5 d-flex flex-column">
          <v-layout class="flex-column justify-center align-center">
            <v-img src="/images/logo.png" class="w-25 h-25"></v-img>
            <span>Enterprise Resource Planning</span>
          </v-layout>
          <v-form>
            <v-card class="mt-8 pa-10" flat max-width="450">
              <v-card-title class="mb-5">
                <span class="text-h6">Login</span>
              </v-card-title>
              <v-card-text class="pa-5">
                <v-text-field
                  :rules="rules"
                  density="comfortable"
                  label="Username"
                  variant="underlined"
                  required
                  max-width="374"
                  prepend-icon="mdi-email"
                >
                </v-text-field>

                <v-text-field
                  :rules="rules"
                  density="comfortable"
                  label="Password"
                  variant="underlined"
                  required
                  prepend-icon="mdi-key"
                ></v-text-field>
              </v-card-text>

              <v-card-actions class="d-flex flex-column">
                <v-btn
                  type="submit"
                  block
                  class="mt-5"
                  color="blue-darken-1"
                  variant="tonal"
                  size="large"
                >
                  Login
                </v-btn>
                <v-btn variant="text" class="ma-5">Forgot Password?</v-btn>
              </v-card-actions>
            </v-card>
          </v-form>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const rules = [
  (value) => {
    if (value) return true;

    return "All fields must be filled.";
  },
];
</script>

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

.container {
  height: 100vh;
}
</style>

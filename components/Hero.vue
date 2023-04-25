<template>
  
    <v-container class="pa-15 bg-primary" fluid>
      <v-row justify="center">
        <v-col cols="12" sm="7" lg="6" class="d-flex align-center">
          <div class="text-sm-left text-center">
            <span class="font-weight-bold text-white text-lg-h3 ">
              Elevate Your Business with Apollo System's ERP
            </span>
            <h4 class="text-white font-weight-regular">
              Streamline operations and increase productivity with Apollo
              System's customizable and user-friendly ERP solutions for
              businesses of all sizes.
            </h4>
          </div>
        </v-col>
        <v-col cols="12" sm="5" lg="6">
          <v-btn class="rounded-circle play-btn" elevation="4" size="x-large"  color="green-lighten-3" v-ripple.center>
            <v-icon icon="mdi-play"/>
          <v-dialog
          v-model="dialog"
        activator="parent"
        width="auto">

          <HeroModal/>
          
          </v-dialog>
          </v-btn>
          <v-img src="../images/logo.png"> </v-img>
        </v-col>
      </v-row>
    </v-container>
  
</template>

<script setup>
import { ref } from 'vue';

const dialog =ref(false);

</script>

<style scoped>

.play-btn{
  position:relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
}


</style>

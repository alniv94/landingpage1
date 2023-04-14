<template>
  
    <v-dialog v-model="dialog" width="500px" >
      <template v-slot:activator="{ props }">
        <v-btn color="secondary" v-bind="props"> Login </v-btn>
      </template>
      <v-card class="ma-2">
        <v-card-title>
          <span class="text-h5">Login</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row class="d-flex">
              <v-col cols="12">
                <v-text-field label="Username" required> </v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Password" required></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="blue-darken-1" variant="text"> Login </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  
</template>

<script>
export default {
  data: () => ({
    dialog: false,
  }),
};
</script>

<template>
  <v-container class="h-screen cover">
    <div class="d-flex justify-space-between  mt-15 pa-5">
      <div class="px-4 d-flex flex-column justify-center">
        <p class="text-h6 text-accent">Create a</p>
        <p class="text-h3 text-accent pb-3 font-weight-bold">Professional Business Website</p>
        <p class="text-subtitle-1">
          Create a stunning, professional website in minutes with our easy-to-use drag-and-drop builder.
        </p>
        <!-- <v-list class="bg-grey-lighten-5">
          <v-list-item v-for="list in lists">
            <Icon
              name="material-symbols:check"
              size="1.5em"
              class="text-secondary"
            />
            <p class="text-subtitle-2 d-inline pa-2 text-accent">
              {{ list.content }}
            </p>
          </v-list-item>
        </v-list> -->
      </div>

      <div class="d-flex flex-column justify-center align-center px-5">
        <v-img
          src="../images/accounting/hero.png"
          width="550"
          class="rounded-lg"
        ></v-img>
       
      </div>
    </div>
  </v-container>
</template>

<script setup>
const lists = [
  {
    content:
      "Optimize your inventory management and streamline operations with our ERP system",
  },
  {
    content:
      "Easily track and monitor your stock levels with real-time inventory tracking",
  },
  {
    content:
      "Boost warehouse productivity with our system's forecasting tools for stock optimization",
  },
  {
    content:
      "Manage inventory across multiple locations and warehouses with multi-location support",
  },
  {
    content:
      "Track items quickly and accurately using our built-in barcode scanning functionality",
  },
];
</script>


<style scoped>
/* .cover{
  background-image: url('../images/websitehero.png');
  background-size: contain;
} */
</style>
<template>
  <v-app-bar flat>
    <nav class="d-flex justify-space-between">
      <div class="d-flex justify-space-between">
        <v-app-bar-title>Apollo Systems</v-app-bar-title>
      </div>
      <div >
        <v-menu class="d-flex justify-space-between">
          <template v-slot:activator="{ props }">
            <v-btn color="primary" v-bind="props" flat append-icon="mdi-chevron-down"> Apps </v-btn>
          </template>
       
        </v-menu>
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn color="primary" v-bind="props" flat append-icon="mdi-chevron-down"> Apps </v-btn>
            <Dropdown :items="items"/>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in items"
              :key="index"
              :value="index"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </nav>
  </v-app-bar>
</template>

<script>
import Dropdown from './Dropdown.vue'
export default {
  data: () => ({
    items: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" },
    ],
  }),
  
};
</script>

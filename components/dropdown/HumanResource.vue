<template>
    
      <v-list class="ma-3">
        <v-list-subheader>
          <span class="text-h6 text-purple-lighten-1">Human Resources</span>
        </v-list-subheader>
        <v-divider></v-divider>

        <v-list-item
          v-for="(resource, i) in resources"
          :key="i"
          link
          :to="resource.link"
        >
          <v-list-item-title link>
            {{ resource.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    
</template>

<script setup>
const resources = [
  {
    title: "Employees",
    value: 1,
    link: "/apps/employee",
  },
  {
    title: "Recruitment",
    value: 2,
    link: "/apps/recruitment",
  },
  {
    title: "Employee",
    value: 3,
    link: "/apps/employee",
  },
];
</script>
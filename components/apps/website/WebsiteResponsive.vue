<template>
  <v-container class="mb-10 py-10 bg-tertiary" fluid>
    <div data-aos="zoom-in" data-aos-duration="3000">
      <p class="text-h4 text-accent font-weight-bold text-center pa-5">
        Responsive to any device
      </p>
      <p class="text-subtitle-1 text-accent text-center">
        Seamless browsing, anytime, anywhere - our website is always responsive
        to any device!
      </p>
      <div class="d-flex justify-space-evenly mt-5">
        <div v-for="item in items">
          <Icon :name="item.icon" size="7em" />
          <p class="text-center text-light-blue-accent-2">{{ item.caption }}</p>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script setup>
const items = [
  {
    caption: "Smartphone",
    icon: "material-symbols:smartphone",
  },
  {
    caption: "Tablet",
    icon: "material-symbols:aod-tablet",
  },
  {
    caption: "Laptop",
    icon: "material-symbols:laptop-mac-outline",
  },
  {
    caption: "Desktop",
    icon: "material-symbols:desktop-mac-outline",
  },
];
</script>

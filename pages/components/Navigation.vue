<template>
  <v-card>
    <v-layout>
      <v-app-bar color="" flat>
        <v-app-bar-title>Apollo System</v-app-bar-title>
        <v-app-bar-title>
          <v-btn @click.stop="drawer = !drawer" variant="text" append-icon="mdi-chevron-down">Apps</v-btn>
        </v-app-bar-title>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" location="top" temporary>
        <v-list :items="items"></v-list>
      </v-navigation-drawer>

      <v-main style="height: 50px"> </v-main>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    items: [
      {
        title: "Foo",
        value: "foo",
      },
      {
        title: "Bar",
        value: "bar",
      },
      {
        title: "Fizz",
        value: "fizz",
      },
      {
        title: "Buzz",
        value: "buzz",
      },
    ],
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

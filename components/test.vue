<template>
	<v-navigation-drawer v-model="drawer" app clipped overlay location="top">
		<!-- Content for the drawer -->
	
	</v-navigation-drawer>

	<v-app-bar app>
		<v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
		<v-toolbar-title>
			<v-icon left>mdi-graphql</v-icon>
			Apollo
		</v-toolbar-title>
		<v-spacer></v-spacer>
		<v-toolbar-title>
			Apps
			<Icon name="mdi:chevron-down" />
		</v-toolbar-title>
		

		<v-spacer></v-spacer>
		<v-btn text>Sigin</v-btn>
	</v-app-bar>
</template>

<script>
export default {
	data() {
		return {
			drawer: false,
			apps: ['App 1', 'App 2', 'App 3'],
		}
	},
}
</script>

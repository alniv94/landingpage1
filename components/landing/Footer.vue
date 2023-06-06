<template>
	<v-footer class="d-block footer">
		<v-container>
			<v-row>
				<v-col cols="12" sm="6">
					<p class="text-white ma-2 text-h5">Apollo System</p>
					<v-btn v-for="(icon, i) in icons" :key="i" class="mx-2" variant="text">
						<Icon :name="icon" size="1.5em" class="text-white" />
					</v-btn>
				</v-col>
				<v-col cols="12" sm="6">
					<v-list class="list">
						<v-list-item v-for="(item, i) in items" :key="i">
							<v-list-item-title class="text-white">{{ item.title }}</v-list-item-title>
						</v-list-item>
					</v-list>
				</v-col>
			</v-row>

			<div class="text-center text-white">
				<v-divider />
				<p>Apollo System All rights reserved</p>
			</div>
		</v-container>
	</v-footer>
</template>

<script setup lang="ts">
const items = ref([
	{
		title: 'About Us',
	},
	{
		title: 'Contact Us',
	},
	{
		title: 'Terms of Service',
	},
	{
		title: 'Privacy Policy',
	},
])

const icons = ['mdi:facebook', 'mdi:twitter', 'mdi:linkedin', 'mdi:instagram']
</script>
<style scoped>
.footer {
	background-color: #012a4a;
}

.list {
	background-color: #012a4a;
}
</style>

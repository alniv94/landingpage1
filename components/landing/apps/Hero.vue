<template>
	<section class="banner bg-landingHero">
		<v-container class="h-screen fill-height">
			<v-row justify="center" align="center">
				<v-col>
					<p class="text-h6 text-white">Product</p>
					<p class="text-h3 text-light-blue-accent-2 pb-3">{{ title }}</p>
					<p class="text-subtitle-1 text-white">
						{{ subtitle }}
					</p>
					<v-card outlined color="transparent" flat>
						<v-card-item v-for="(list, i) in lists" :key="i">
							<Icon
								name="material-symbols:check"
								size="1.5em"
								class="text-light-blue-accent-2"
							/>
							<p class="text-subtitle-2 d-inline pa-2 text-white">
								{{ list.content }}
							</p>
						</v-card-item>
					</v-card>
				</v-col>
				<v-col class="hidden-sm-and-down">
					<v-img :src="image" max-height="450" class="rounded-lg" />

					<v-btn class="bg-green text-capitalize text-white d-block mt-5" size="large">
						Start Demo
					</v-btn>
				</v-col>
			</v-row>
		</v-container>
	</section>
</template>

<script setup lang="ts">
defineProps<{
	title: string
	subtitle: string
	image: string
	lists: { content: string }[]
}>()
</script>
<style scoped>
.banner {
	border-radius: 0 0 50%;
}
</style>

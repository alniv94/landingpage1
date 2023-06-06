<template>
	<v-container class="my-10">
		<p v-slide-up class="text-center text-white mb-10 text-h4 font-weight-bold">{{ title }}</p>
		<v-row align="start" justify="space-between">
			<v-col v-for="(feature, index) in features" :key="index" cols="12" md="6" lg="4">
				<v-card v-stagger-up class="mx-auto card" min-height="250">
					<v-card-text class="text-center text-white">
						<Icon :name="feature.icon" size="3em" />
						<p class="text-h6 mt-6 text-light-blue-accent-2">{{ feature.title }}</p>
						<p class="subtitle-1 mt-3">{{ feature.description }}</p>
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script lang="ts" setup>
const { vSlideUp, vStaggerUp } = useAnimation()
defineProps<{
	title: String
	features: { title: String; description: String; icon: string }[]
}>()
</script>

<style scoped>
.card {
	background-color: #18273f;
}
</style>

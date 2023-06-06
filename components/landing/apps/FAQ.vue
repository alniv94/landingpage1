<template>
	<v-container v-slide-up:duration="800" class="mb-10">
		<p class="text-white text-h4 text-center py-8">{{ title }}</p>
		<v-expansion-panels variant="accordion">
			<v-expansion-panel v-for="(faq, i) in faqs" :key="i" class="panel text-white">
				<v-expansion-panel-title class="text-h6">
					{{ faq.title }}
				</v-expansion-panel-title>
				<v-expansion-panel-text class="text-body-1">
					{{ faq.text }}
				</v-expansion-panel-text>
			</v-expansion-panel>
		</v-expansion-panels>
	</v-container>
</template>

<script setup lang="ts">
defineProps<{
	title: String
	faqs: { title: string; text: string }[]
}>()

const { vSlideUp } = useAnimation()
</script>

<style scoped>
.panel {
	background-color: #18273f;
}
</style>

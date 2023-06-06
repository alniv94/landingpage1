<template>
	<section class="bg-landingSecondary py-15">
		<v-container>
			<v-row v-for="(testimonial, i) in testimonials" :key="i" justify="space-evenly">
				<v-col v-fade-right cols="12" sm="6">
					<p class="text-h5 text-light-blue-accent-2 py-5 font-weight-bold">{{ title }}</p>
					<p class="text-body-1 text-white">
						{{ testimonial.content }}
					</p>
				</v-col>
				<v-col v-fade-left cols="12" sm="6">
					<Icon name="mingcute:quote-left-fill" size="2em" class="text-secondary" />
					<p class="text-white py-12 d-inline font-italic text-body-1">
						{{ testimonial.quote }}
					</p>
					<Icon name="mingcute:quote-right-fill" size="2em" class="text-secondary" />
					<div class="d-flex justify-center align-center ma-5">
						<v-avatar image="testimonial.avatar" size="80" />
						<div class="mx-8">
							<p class="text-white text-h6">
								<strong>{{ testimonial.name }}</strong>
							</p>
							<p class="text-white">{{ testimonial.company }}</p>
						</div>
					</div>
				</v-col>
			</v-row>
		</v-container>
	</section>
</template>

<script setup lang="ts">
defineProps<{
	title: String
	testimonials: { content: String; quote: String; avatar: String; name: String; company: String }[]
}>()
const { vFadeRight, vFadeLeft } = useAnimation()
</script>

<template>
	<v-container class="my-10">
		<p class="text-white text-h4 my-10 font-weight-bold">Connect With Us</p>
		<iframe
			v-slide-up
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.2900800927937!2d121.05951037516382!3d14.582539577518462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c8140f9db0af%3A0x338e44c1d6850a40!2sMutual%20Success%20Lighting%20Fixture%20Inc.!5e0!3m2!1sen!2sph!4v1681885827220!5m2!1sen!2sph"
			width="100%"
			height="350"
			style="border: 0"
			allowfullscreen
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
		/>

		<v-row class="mt-5">
			<v-col v-fade-right cols="12" md="5">
				<v-list class="contact">
					<v-list-item v-for="(contact, i) in contacts" :key="i">
						<v-list-item-title
							class="text-light-blue-accent-2 font-weight-bold mb-5 text-h6 text-white"
						>
							{{ contact.title }}
						</v-list-item-title>
						<Icon :name="contact.icon" size="1.5em" class="text-white" />
						<p class="text-white">{{ contact.info }}</p>
					</v-list-item>
				</v-list>
			</v-col>
			<v-col v-fade-left cols="12" md="7">
				<v-form>
					<v-row no-gutters>
						<v-col cols="12" sm="6">
							<v-text-field label="Name" required variant="outlined" class="text-white" />
						</v-col>
						<v-col cols="12" sm="6">
							<v-text-field label="Email" required variant="outlined" class="text-white" />
						</v-col>
					</v-row>

					<v-text-field label="Subject" required variant="outlined" class="text-white" />
					<v-textarea label="Message" required variant="outlined" class="text-white" />
					<v-btn
						class="mt-10 text-capitalize text-white"
						size="large"
						color="orange"
						variant="outlined"
					>
						Send Message
					</v-btn>
				</v-form>
			</v-col>
		</v-row>
	</v-container>
</template>
<script setup lang="ts">
const { vFadeLeft, vFadeRight, vSlideUp } = useAnimation()

const contacts = [
	{
		title: 'Location',
		info: 'Unit E-3003A, 30 Exchange Road Ortigas Center, San Antonio, Pasig, Metro Manila',
		icon: 'mdi:map-marker',
	},
	{
		title: 'Call',
		info: '	(555) 555-5555',
		icon: 'mdi:phone',
	},
	{
		title: 'Email',
		info: 'info@apollosystem.com',
		icon: 'mdi:email',
	},
]
</script>

<style scoped>
.contact {
	background-color: #151f32;
}
</style>

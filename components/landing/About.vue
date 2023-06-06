<template>
	<section class="my-10 overflow-hidden">
		<v-container class="py-15 content">
			<span class="mt-5 text-white text-h4 font-weight-bold">Who We Are</span>
			<v-row class="mt-4">
				<v-col v-fade-right cols="12" sm="6">
					<p class="text-h5 text-white">
						Empowering businesses to succeed through innovative ERP solutions.
					</p>
					<v-btn color="orange" class="text-white mx-auto text-capitalize mt-8" size="large">
						Learn More
					</v-btn>
				</v-col>
				<v-col v-fade-left cols="12" sm="6">
					<p style="line-height: 1.5" class="text-white">
						<span class="text-light-blue-accent-2 text-h6 font-weight-bold">Apollo System</span>
						provides
						<strong class="text-light-blue-accent-2">customizable and user-friendly</strong>
						ERP software solutions that streamline business operations and help organizations
						achieve their goals. With
						<strong class="text-light-blue-accent-2">flexible and scalable solutions,</strong>
						we help companies grow their operations. Our commitment to excellence and innovation
						is evidenced by numerous industry awards. Join businesses who partner with Apollo
						System to
						<strong class="text-light-blue-accent-2">optimize processes, reduce costs,</strong>
						and
						<strong class="text-light-blue-accent-2">increase productivity.</strong>
					</p>
				</v-col>
			</v-row>
		</v-container>
	</section>
</template>
<script setup lang="ts">
const { vFadeRight, vFadeLeft } = useAnimation()
</script>

<style scoped>
section {
	transform: skewY(-3deg);
	background: #18273f;
}

.content {
	transform: skewY(3deg);
}
</style>

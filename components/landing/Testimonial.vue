<template>
	<v-container v-fade-slide-down>
		<p class="text-center text-h4 font-weight-bold my-10 text-white">What Our Clients Say</p>

		<template v-if="chunkedTestimonials.length">
			<v-carousel hide-delimiter-background show-arrows="hover" cycle class="text-white">
				<v-carousel-item v-for="(chunk, index) in chunkedTestimonials" :key="index">
					<v-row>
						<v-col v-for="(testimonial, i) in chunk" :key="i" class="d-flex">
							<v-hover v-slot="{ isHovering, props }" open-delay="100">
								<v-card
									class="mx-auto card"
									max-width="350"
									height="400"
									:color="isHovering ? 'indigo-darken-4' : undefined"
									:elevation="isHovering ? 16 : 2"
									:class="{ 'on-hover': isHovering }"
									open-delay="200"
									v-bind="props"
								>
									<v-card-text class="d-flex flex-column justify-space-between h-100 pa-10">
										<div>
											<Icon
												name="mdi:format-quote-open-outline"
												size="2em"
												class="text-light-blue-accent-2"
											/>
											<p class="text-white d-inline pa-3">{{ testimonial.quote }}</p>
											<Icon
												name="mdi:format-quote-close-outline"
												size="2em"
												class="text-light-blue-accent-2"
											/>
										</div>

										<div class="d-flex flex-column justify-center align-center">
											<v-avatar :image="testimonial.image" size="80" />
											<p class="text-white mt-3">{{ testimonial.author }}</p>
										</div>
									</v-card-text>
								</v-card>
							</v-hover>
						</v-col>
					</v-row>
				</v-carousel-item>
			</v-carousel>
		</template>
	</v-container>
</template>

<script lang="ts" setup>
const { vFadeSlideDown } = useAnimation()

interface Testimonial {
	quote: string
	author: string
	image: string
}

const testimonials: Testimonial[] = [
	{
		quote: "We've been using this ERP solution for over a year now and it has completely transformed our business. Our processes are streamlined, our data is more accurate, and we're able to make better decisions thanks to the powerful analytics and reporting capabilities. Highly recommended!",
		author: 'John Doe, CEO of ABC Corp',
		image: './img/landing/testimonial/test1.jpg',
	},
	{
		quote: "Since implementing this ERP system, we've seen a significant increase in efficiency across our organization. Tasks that used to take hours now take minutes, and our team is able to focus on more important initiatives. It's been a game-changer for us.",
		author: 'Jane Smith, CFO of XYZ Corp',
		image: './img/landing/testimonial/test2.jpg',
	},
	{
		quote: "I was initially skeptical about implementing an ERP system, but after seeing the results firsthand, I'm a believer. Our inventory management has improved, our financial reporting is more accurate, and our team is able to collaborate more effectively thanks to the integrated communication tools. It's made a big difference in our day-to-day operations.",
		author: 'Bob Johnson, COO of 123 Corp',
		image: './img/landing/testimonial/test3.jpg',
	},
	{
		quote: "The ERP system has been a real lifesaver for our small business. We used to struggle with manual processes and keeping track of inventory, but now everything is automated and streamlined. Plus, the customer data insights have allowed us to improve our marketing efforts and increase our sales. It's been a great investment for us.",
		author: 'Mary Johnson, COO of 456 Corp',
		image: './img/landing/testimonial/test3.jpg',
	},
	{
		quote: "As a fast-growing startup, we needed an ERP system that could scale with us. This solution has exceeded our expectations - it's flexible, customizable, and has allowed us to expand our operations without missing a beat. Our team loves using it and we're excited about the future possibilities.",
		author: 'Alex Lee, CTO of 789 Corp',
		image: './img/landing/testimonial/test2.jpg',
	},
	{
		quote: "We've been using this ERP system for several years now and it's become an essential part of our business operations. It's helped us improve our supply chain management, reduce costs, and make better decisions thanks to the real-time analytics. We couldn't imagine running our business without it.",
		author: 'Grace Chen, CMO of ABCD Corp',
		image: './img/landing/testimonial/test1.jpg',
	},
]

const chunkedTestimonials = ref<Testimonial[][]>([])

const updateChunkedTestimonials = () => {
	const screenSize = window.innerWidth
	const chunkSize = screenSize < 960 ? 1 : 3

	const chunkedArray: Testimonial[][] = []
	for (let i = 0; i < testimonials.length; i += chunkSize) {
		chunkedArray.push(testimonials.slice(i, i + chunkSize))
	}

	chunkedTestimonials.value = chunkedArray
}

onMounted(() => {
	updateChunkedTestimonials()
	window.addEventListener('resize', updateChunkedTestimonials)
})

onBeforeUnmount(() => {
	window.removeEventListener('resize', updateChunkedTestimonials)
})
</script>

<style scoped>
.card {
	background-color: #18273f;
}
</style>

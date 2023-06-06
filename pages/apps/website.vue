<template>
	<div>
		<!-- Hero Section -->
		<v-container color="bg-landingPrimary">
			<div class="d-flex justify-space-between h-screen">
				<div class="px-4 d-flex flex-column justify-center text-white">
					<p class="text-h6">Create a</p>
					<p class="text-h3 pb-3 font-weight-bold">Professional Business Website</p>
					<p class="text-subtitle-1">
						Create a stunning, professional website in minutes with our easy-to-use drag-and-drop
						builder.
					</p>
					<div class="mt-10">
						<v-btn class="bg-orange text-white text-capitalize" size="large">Start Demo</v-btn>
					</div>
				</div>
				<div class="d-flex flex-column justify-center align-center px-5">
					<v-img src="../img/apps/websitehero.png" width="550" class="rounded-lg" />
				</div>
			</div>
		</v-container>

		<!--  Feature Section -->

		<section class="bg-landingSecondary py-10" fluid>
			<v-container fill-height>
				<p class="text-h4 text-center font-weight-bold text-white pb-10">
					Drag-and-Drop Website Editor
				</p>
				<v-row align="center" justify="center">
					<v-col cols="12" md="6">
						<p class="text-h6 text-white pb-5">Create professional-quality designs with ease</p>
						<p class="text-light-blue-accent-2 text-h4 font-weight-bold">
							Using the efficiency of building blocks
						</p>
					</v-col>
					<v-col cols="12" md="6">
						<v-img
							src="../img/apps/websiteresponsive.webp"
							width="800"
							class="ma-auto rounded-lg"
						/>
					</v-col>
				</v-row>
			</v-container>
		</section>

		<!-- Responsive Section -->

		<v-container class="mb-10 py-10 bg-tertiary" fluid>
			<div class>
				<p class="text-h4 text-white font-weight-bold text-center pa-5">Responsive to any device</p>
				<p class="text-subtitle-1 text-light-blue-accent-1 text-center">
					Seamless browsing, anytime, anywhere - our website is always responsive to any device!
				</p>
				<div class="d-flex justify-space-evenly mt-5">
					<div v-for="(icon, i) in icons" :key="i">
						<Icon :name="icon.icon" size="7em" class="text-white" />
						<p class="text-center text-light-blue-accent-2">{{ icon.caption }}</p>
					</div>
				</div>
			</div>
		</v-container>

		<!--  Features  Section-->

		<LandingAppsFeature title="Features" :features="features" />

		<!--  Why  Section-->

		<LandingAppsWhy title="" :items="items" />

		<!--  Testimonial  Section-->
		<LandingAppsTestimonial title="What is Website Builder?" :testimonials="testimonials" />

		<!-- Accordion FAQ -->

		<LandingAppsFAQ title="Apollo Website Builder ERP-FAQ" :faqs="faqs" class="my-10" />
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	layout: 'landing',
})

const icons = [
	{
		caption: 'Smartphone',
		icon: 'material-symbols:smartphone',
	},
	{
		caption: 'Tablet',
		icon: 'material-symbols:aod-tablet',
	},
	{
		caption: 'Laptop',
		icon: 'material-symbols:laptop-mac-outline',
	},
	{
		caption: 'Desktop',
		icon: 'material-symbols:desktop-mac-outline',
	},
]

const features = [
	{
		icon: 'mdi-web',
		title: 'Drag-and-Drop Website Editor',
		description:
			'Create and customize your website design and layout with ease using our user-friendly website editor.',
	},
	{
		icon: 'mdi-view-grid',
		title: 'Template Library',
		description:
			'Choose from a wide range of customizable website templates to get started quickly and easily.',
	},
	{
		icon: 'mdi-shopping',
		title: 'E-commerce Integration',
		description:
			'Our website builder ERP offers built-in support for online stores with shopping carts, payment gateways, and order management.',
	},
	{
		icon: 'mdi-web-clock',
		title: 'Domain Management',
		description:
			'Register and manage your domain names directly from our platform, with easy DNS configuration and domain forwarding.',
	},
	{
		icon: 'mdi-magnify',
		title: 'SEO Optimization',
		description:
			'Optimize your website for search engines with tools for keyword research, meta tags, and analytics integration.',
	},
	{
		icon: 'mdi-chart-areaspline',
		title: 'Analytics and Reporting',
		description:
			'Track the performance uilt-in analytics and reporting tools, with detailed insights and reporting dashboards.',
	},
]

const items = [
	{
		title: 'Reduced Costs',
		content:
			'Our ERP solutions automate many business processes, freeing up time for your team to focus on more important tasks.',
		subcontent: {
			list1: 'Streamlining processes - By automating many business processes, our ERP solutions can help reduce manual errors, increase efficiency, and save time and resources.',
			list2: 'Improved inventory management - With real-time data and analytics, our ERP solutions can help you optimize your inventory levels, reducing the risk of overstocking or stockouts, and ultimately saving you money.',
			list3: 'Enhanced financial visibility - Our ERP solutions provide powerful financial reporting and analytics capabilities, enabling you to gain a deeper understanding of your financial performance and identify areas where you can reduce costs and increase profitability.',
		},
		image: '../img/landing/why/save-money.jpg',
	},
	{
		title: 'Simplified Creation',
		content:
			'Our ERP solutions help reduce costs by improving efficiency and accuracy, and providing valuable insights into your business operations.',
		subcontent: {
			list1: 'Streamlining processes - Our ERP solutions automate many business processes, reducing the need for manual intervention, and freeing up time for your team to focus on other important tasks.',
			list2: 'Improved collaboration - With centralized data and real-time communication tools, our ERP solutions can help improve collaboration between teams, reducing the time spent on communication and coordination',
			list3: 'Faster decision-making - With access to real-time data and analytics, our ERP solutions can help you make faster, data-driven decisions, saving time spent on manual data collection and analysis.',
		},
		image: '../img/landing/why/save-money.jpg',
	},
	{
		title: 'Drive Growth',
		content:
			'Our flexible and scalable ERP solutions can easily adapt to changing business needs, enabling you to expand your operations and reach new heights.',
		subcontent: {
			list1: 'Enhanced efficiency - By automating processes, our ERP solutions can help your team work more efficiently, freeing up time for more strategic initiatives.',
			list2: 'Real-time insights - With powerful analytics and reporting capabilities, our ERP solutions provide real-time insights into your business performance, enabling you to make more informed decisions.',
			list3: 'Improved customer experiences - Our ERP solutions streamline processes and provide better visibility into customer data, leading to increased loyalty and repeat business.',
		},
		image: '../img/landing/why/growth.png',
	},
]

const faqs = [
	{
		title: 'What is a website builder?',
		text: ' A website builder is a tool that allows users to create and design websites without the need for manual coding. It provides a visual interface and pre-built templates, making it easy for individuals or businesses to create professional-looking websites quickly and efficiently.',
	},
	{
		title: 'Do I need coding skills to use a website builder?',
		text: ' No, you do not need coding skills to use a website builder. Website builders are designed to be user-friendly and provide a visual interface where you can customize the websites design, layout, and content using drag-and-drop functionality. This means you can create and maintain your own website without any technical knowledge or coding experience.',
	},
	{
		title: 'Can I customize the design of my website with a website builder?',
		text: 'Yes, website builders offer customization options that allow you to personalize the design of your website. You can choose from pre-built templates and modify them to suit your needs. Additionally, you can customize the layout, colors, fonts, and add your own images and content to create a unique and professional-looking website.',
	},
	{
		title: 'Are there any limitations to using a website builder?',
		text: 'While website builders are a convenient and efficient way to create websites, they may have some limitations compared to custom-coded websites. The customization options and flexibility might be limited to the features and functionalities provided by the website builder platform. Additionally, if you have complex website requirements or need extensive customization, you may find that a custom-coded website developed by a professional is a better option.',
	},
]
const testimonials = [
	{
		content: `A website builder is a tool for creating websites without coding. It has a visual interface and templates, making it easy for anyone to create professional-looking websites quickly. Users can customize the layout, add content, and incorporate features with drag-and-drop functionality. Even without technical skills, individuals and businesses can create and maintain their own websites.`,

		quote: `I've been using the website builder for my small business, and it has been a 		  game-changer. I was able to create a beautiful website without any coding knowledge. The drag-and-drop interface made it incredibly easy to customize the design and layout. The pre-built templates provided a great starting point, and I could easily add my own content and images. The website builder has saved me time and money, and I now have a professional online presence that helps attract more customers. I highly recommend it!`,
		avatar: '../img/landing/testimonial/test1.jpg',
		name: 'Alniv',
		company: 'Acme CEO',
	},
]
</script>

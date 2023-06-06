<template>
	<div>
		<LandingAppsHero
			title="Sales Management"
			subtitle="Effectively manage leads and opportunities through automated workflows, ensuring timely follow-ups, and maximizing conversion rates. Streamline the sales process from initial contact to closure, reducing manual efforts and potential errors."
			image="../img/apps/accountinghero.png"
			:lists="lists"
		/>

		<LandingAppsTestimonial
			title="Obtain full clarity from every vantage point and the ability to adapt your workflow to suit your preferences."
			:testimonials="testimonials"
		/>

		<LandingAppsFeature title="Features" :features="features" />

		<LandingAppsWhy title="Why Apollo System Inventory Management" :items="items" />

		<LandingAppsFAQ title="Apollo Inventory FAQs" :faqs="faqs" />
	</div>
</template>
<script lang="ts" setup>
definePageMeta({
	layout: 'landing',
})

const lists = [
	{
		content:
			'Comprehensive financial reporting and analysis to help you make informed business decisions',
	},
	{
		content: 'Streamlined bookkeeping and accounting processes to save time and reduce errors',
	},
	{
		content: 'Automated invoicing and payment processing to improve cash flow management',
	},
	{
		content: 'Multi-currency support for global business operations',
	},
	{
		content: 'Secure and reliable data storage and backup for peace of mind',
	},
]
const testimonials = [
	{
		content: `Inventory ERP offers businesses a suite of powerful inventory management tools, including
					real-time tracking, item movement monitoring, and stock optimization, all of which can be
					customized to meet the specific needs of the business. By streamlining inventory
					management, Inventory ERP helps businesses optimize their operations and achieve greater
					efficiency.`,
		quote: `The automated invoicing and payment processing features of the accounting management ERP
					have been a game changer for our business. It has significantly improved our cash flow
					management and saved us hours of manual work.`,
		avatar: '../img/landing/testimonial/test1.jpg',
		name: 'Alniv',
		company: 'Acme CEO',
	},
]
const features = [
	{
		title: 'Lead Management',
		description:
			'Effectively capture, track, and nurture leads throughout the sales process, ensuring efficient lead management and maximizing conversion rates.',
		icon: 'mdi:account-plus',
	},
	{
		title: 'Opportunity Management',
		description:
			'Manage sales opportunities from initial contact to deal closure, track stages, assign tasks, and collaborate with team members for effective opportunity management.',
		icon: 'mdi:target-account',
	},
	{
		title: 'Quoting and Proposal Generation',
		description:
			'Generate professional quotes and proposals, customize pricing, and streamline the quotation process for accurate and timely customer proposals.',
		icon: 'mdi:file-document',
	},
	{
		title: 'Sales Order Processing',
		description:
			' Generate professional quotes and proposals, customize pricing, and streamline the quotation process for accurate and timely customer proposals.',
		icon: 'mdi:cart-plus',
	},
	{
		title: 'Sales Performance Analytics',
		description:
			'Gain actionable insights into sales performance, track key metrics, analyze trends, and identify opportunities for sales growth and performance optimization.',
		icon: 'mdi:chart-line',
	},
	{
		title: 'CRM Integration',
		description:
			'Seamlessly integrate with your CRM system to synchronize customer data, streamline sales processes, and facilitate efficient collaboration between sales and customer service teams.',
		icon: 'mdi:database-plus',
	},
]
const faqs = [
	{
		title: 'What is a sales ERP system, and how can it benefit my business?',
		text: 'A sales ERP (Enterprise Resource Planning) system is a software solution that integrates various sales processes and data into a centralized platform. It streamlines sales activities such as lead management, order processing, inventory management, and customer relationship management (CRM). The benefits of using a sales ERP system include improved efficiency, better sales forecasting, enhanced customer service, and increased profitability.',
	},
	{
		title: 'Can your sales ERP product be customized to suit our specific business requirements?',
		text: 'Yes, our sales ERP product is designed to be highly customizable. It can be tailored to meet the unique needs and processes of your business. Our solution offers flexible configuration options, allowing you to define workflows, fields, reports, and dashboards according to your requirements. This ensures that the sales ERP system aligns with your business operations seamlessly.',
	},
	{
		title: 'Does your sales ERP product support integration with other business systems?',
		text: 'Absolutely! Our sales ERP product is built to integrate smoothly with other essential business systems such as accounting software, CRM platforms, e-commerce platforms, and marketing automation tools. This integration eliminates data silos, improves data accuracy, and enables a holistic view of your sales operations. We provide standard connectors and APIs to facilitate seamless integration with third-party systems.',
	},
	{
		title: 'How secure is your sales ERP product in terms of data protection?',
		text: ' Data security is a top priority for us. Our sales ERP product incorporates robust security measures to safeguard your sensitive business data. We employ advanced encryption techniques to protect data transmission and storage. User access controls, role-based permissions, and audit trails are implemented to ensure that only authorized personnel can access and modify data. Regular security updates and vulnerability assessments are conducted to maintain a high level of protection.',
	},
	{
		title: 'What kind of support and training do you offer for your sales ERP product?',
		text: 'We provide comprehensive support and training for our sales ERP product. Our dedicated support team is available to assist you with any technical issues, questions, or concerns you may have. We offer multiple channels of support, including email, phone, and a ticketing system. Additionally, we provide thorough training to help your team understand and effectively utilize the features of our sales ERP system. This includes on-site or remote training sessions, documentation, and user guides to ensure a smooth implementation and adoption process.',
	},
]
const items = [
	{
		title: 'Improved Management',
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
		title: 'Increased Efficiency',
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
</script>

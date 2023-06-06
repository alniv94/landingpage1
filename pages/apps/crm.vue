<template>
	<div>
		<LandingAppsHero
			title="CRM Management"
			subtitle="Revolutionize your inventory management with our advanced ERP. Maximize efficiency, streamline processes, and take control of your inventory. Our state-of-the-art software offers comprehensive tools and features to optimize your operations."
			image="../img/apps/crm.png"
			:lists="lists"
		/>

		<LandingAppsTestimonial
			title="Acquire total transparency from all angles and the autonomy to customize your work methodology."
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
		title: ' Contact Management',
		description:
			'Effortlessly manage and organize your contacts, track interactions, and maintain a centralized database for effective customer relationship management.',
		icon: 'mdi-account-box-outline',
	},
	{
		title: 'Sales Opportunity Tracking',
		description:
			'Track and manage sales opportunities throughout the sales pipeline, from lead generation to deal closure, ensuring efficient sales management and maximizing revenue potential.',
		icon: 'mdi-bullseye-arrow',
	},
	{
		title: 'Customer Communication',
		icon: 'mdi-email-outline',
		description:
			'Streamline customer communication by managing emails, calls, and other interactions within the CRM system, ensuring prompt and effective communication with customers.',
	},
	{
		title: 'Sales Forecasting and Analytics',
		description:
			' SUtilize advanced forecasting and analytics tools to predict sales trends, identify opportunities, and make informed decisions to drive sales growth and optimize performance',
		icon: 'mdi-trending-up',
	},
	{
		title: 'Task and Activity Management',
		description:
			' Efficiently manage tasks, appointments, and activities, assign them to team members, set reminders, and ensure timely completion for improved productivity and customer service.',
		icon: 'mdi-checkbox-marked-outline',
	},
	{
		title: 'Reporting and Dashboards',
		description:
			'Generate comprehensive reports and visual dashboards to gain insights into sales performance, customer behavior, and other key metrics, empowering data-driven decision-making.',
		icon: 'mdi-chart-areaspline',
	},
]
const faqs = [
	{
		title: 'What is Accounting ERP?',
		text: ' Accounting ERP is a comprehensive accounting software solution designed to help businesses streamline their financial processes and manage their finances more efficiently. The system offers a range of features, including accounts payable and receivable, general ledger management, financial reporting, and payroll management.',
	},
	{
		title: 'What features does Accounting ERP offer?',
		text: ' Accounting ERP offers a wide range of features designed to help businesses manage their finances more effectively. These features include accounts payable and receivable management, which allows businesses to manage their bills and invoices in one place. The system also offers general ledger management, which enables businesses to track their financial transactions and generate accurate financial reports. Additionally, the system includes payroll management functionality, which allows businesses to manage employee payroll and benefits. Finally, Accounting ERP offers a range of financial reporting tools, including cash flow statements, balance sheets, and income statements, designed to help businesses make informed financial decisions.',
	},
	{
		title: 'How can Accounting ERP help my business save money?',
		text: 'Accounting ERP can help businesses save money in several ways. First, by streamlining financial processes, businesses can reduce the amount of time and resources they spend on manual accounting tasks. Second, by providing accurate financial reporting, businesses can make informed financial decisions that can help to reduce costs and increase profitability. Finally, by automating payroll and other financial processes, businesses can reduce the risk of errors and ensure compliance with relevant regulations, which can save them time and money.',
	},
	{
		title: 'How secure is my data with Accounting ERP?',
		text: ' Accounting ERP takes data security very seriously and employs a range of measures to protect customer data. Our system is hosted on secure servers and all data is encrypted to ensure maximum protection. We also follow best practices when it comes to data security, including regular backups, user access controls, and data redundancy.',
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

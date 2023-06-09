<template>
  <v-container class="pa-0 ma-0 banner" fluid>
    <LandingHero />
    <LandingProduct />
    <LandingAbout />
    <LandingAppsWhy
      title="Why Apollo Systems Enterprise Resource Planning (ERP)?"
      :items="items"
    />
    <LandingClient />
    <LandingTestimonial />
    <LandingContact />
    <LandingSubfooter />
  </v-container>
</template>

<script setup lang="ts">
const items = [
  {
    title: "Save Money",
    content:
      "Our ERP solutions automate many business processes, freeing up time for your team to focus on more important tasks.",
    subcontent: {
      list1:
        "Streamlining processes - By automating many business processes, our ERP solutions can help reduce manual errors, increase efficiency, and save time and resources.",
      list2:
        "Improved inventory management - With real-time data and analytics, our ERP solutions can help you optimize your inventory levels, reducing the risk of overstocking or stockouts, and ultimately saving you money.",
      list3:
        "Enhanced financial visibility - Our ERP solutions provide powerful financial reporting and analytics capabilities, enabling you to gain a deeper understanding of your financial performance and identify areas where you can reduce costs and increase profitability.",
    },
    image: "./img/landing/why/save-money.jpg",
  },
  {
    title: "Save Time",
    content:
      "Our ERP solutions help reduce costs by improving efficiency and accuracy, and providing valuable insights into your business operations.",
    subcontent: {
      list1:
        "Streamlining processes - Our ERP solutions automate many business processes, reducing the need for manual intervention, and freeing up time for your team to focus on other important tasks.",
      list2:
        "Improved collaboration - With centralized data and real-time communication tools, our ERP solutions can help improve collaboration between teams, reducing the time spent on communication and coordination",
      list3:
        "Faster decision-making - With access to real-time data and analytics, our ERP solutions can help you make faster, data-driven decisions, saving time spent on manual data collection and analysis.",
    },
    image: "./img/landing/why/save-time.png",
  },
  {
    title: "Drive Growth",
    content:
      "Our flexible and scalable ERP solutions can easily adapt to changing business needs, enabling you to expand your operations and reach new heights.",
    subcontent: {
      list1:
        "Enhanced efficiency - By automating processes, our ERP solutions can help your team work more efficiently, freeing up time for more strategic initiatives.",
      list2:
        "Real-time insights - With powerful analytics and reporting capabilities, our ERP solutions provide real-time insights into your business performance, enabling you to make more informed decisions.",
      list3:
        "Improved customer experiences - Our ERP solutions streamline processes and provide better visibility into customer data, leading to increased loyalty and repeat business.",
    },
    image: "./img/landing/why/growth.png",
  },
];
</script>
<style scoped>
.banner {
  background: #151f32;
}
</style>

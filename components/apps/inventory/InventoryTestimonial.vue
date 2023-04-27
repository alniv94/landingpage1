<template>
  <v-container class="bg-tertiary" fluid>
    <v-row justify="space-evenly" class="ma-15">
      <v-col class="">
        <p class="text-h4 text-accent py-5 font-weight-bold">
          What is Apollo Inventory ERP?
        </p>
        <p class="text-body-2 text-accent text-body-2">
          Inventory ERP offers businesses a suite of powerful inventory
          management tools, including real-time tracking, item movement
          monitoring, and stock optimization, all of which can be customized to
          meet the specific needs of the business. By streamlining inventory
          management, Inventory ERP helps businesses optimize their operations
          and achieve greater efficiency.
        </p>
      </v-col>
      <v-col>
        <Icon
          name="mingcute:quote-left-fill"
          size="2em"
          class="text-secondary"
        />
        <p class="text-accent py-12 d-inline font-italic text-body-1">
          The automated invoicing and payment processing features of the
          accounting management ERP have been a game changer for our business.
          It has significantly improved our cash flow management and saved us
          hours of manual work.
        </p>
        <Icon
          name="mingcute:quote-right-fill"
          size="2em"
          class="text-secondary"
        />
        <div class="d-flex justify-center align-center ma-5">
          <v-avatar image="../images/accounting/hero.png" size="80"></v-avatar>
          <div class="mx-8">
            <p class="text-accent"><strong>Alniv</strong></p>
            <p class="">Acme CEO</p>
          </div>
        </div>
      </v-col>
    </v-row>

    <p class="text-accent text-h4 text-center py-8">Apollo Inventory ERP-FAQ</p>

    <!-- Accordion FAQ -->
    <v-container>
      <v-expansion-panels variant="accordion">
        <v-expansion-panel
          v-for="item in items"
          class="text-accent"
        >
        <v-expansion-panel-title class="text-h6 font-weight-bold">
          {{ item.title }}
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          {{ item.text }}
        </v-expansion-panel-text>
      </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </v-container>
</template>

<script setup>
const items = [
  {
    title: "What is Inventory ERP?",
    text: " Inventory ERP is a comprehensive inventory management solution that helps businesses optimize their inventory processes and streamline their operations. The system offers a suite of features, including real-time inventory tracking, item movement monitoring, and stock optimization tools, designed to increase efficiency and reduce costs.",
  },
  {
    title: "What features does Inventory ERP offer?",
    text: " Inventory ERP offers a wide range of features to help businesses manage their inventory more effectively. These features include real-time inventory tracking, which provides businesses with accurate, up-to-date information about their inventory levels. Item movement monitoring allows businesses to track the movement of inventory items throughout their supply chain, while stock optimization tools help businesses optimize their inventory levels to reduce the amount of excess stock they keep on hand. The system also offers multi-location support, which allows businesses to manage inventory across multiple warehouses easily. Finally, Inventory ERP includes built-in barcode scanning functionality, which ensures quick and accurate item tracking, reducing errors and improving productivity.",
  },
  {
    title:
      "Can Inventory ERP be customized to meet my business's specific needs?",
    text: "Yes, Inventory ERP can be customized to meet the specific needs of your business. Our team works closely with each customer to understand their unique requirements and tailor the system accordingly. We can customize the system's features and functionality to ensure that it meets your specific needs, whether you're a small business or a large enterprise.",
  },
  {
    title:
      "How can Inventory ERP help my business save money?",
    text: "Inventory ERP can help businesses save money in several ways. First, by optimizing inventory levels, businesses can reduce the amount of excess stock they keep on hand, which helps to minimize storage costs. Second, by providing real-time inventory tracking, businesses can quickly respond to changes in demand or unexpected stockouts, which can help to reduce the risk of lost sales and additional expenses. Finally, the system's built-in barcode scanning functionality helps to reduce errors and increase efficiency, which can save businesses time and money.",
  },
];
</script>

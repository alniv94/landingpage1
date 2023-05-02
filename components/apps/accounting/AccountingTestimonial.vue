<template>
  <v-container class="bg-tertiary" fluid >
    <v-row justify="space-evenly" class="ma-15">
      <v-col class="">
        <p class="text-h5 text-accent py-5">
          <strong
            >Streamline Your Financial Management with Our Accounting Management
            ERP</strong
          >
        </p>
        <p class="text-body-1 text-accent">
          Streamline your financial management with our accounting management
          ERP. Our system offers advantages such as automated invoicing and
          payment processing, accurate payroll management, customizable
          dashboards and reports, and integration with other business systems.
          With our ERP, you can maximize your financial potential and stay ahead
          of the competition. Contact us today to learn more.
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

        <!-- Accordion FAQ -->
        <v-container>
          <p class="text-accent text-h4 text-center py-8">Apollo Accountings ERP-FAQ</p>
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

// accordion data array
const items = [
  {
    title: "What is Accounting ERP?",
    text: " Accounting ERP is a comprehensive accounting software solution designed to help businesses streamline their financial processes and manage their finances more efficiently. The system offers a range of features, including accounts payable and receivable, general ledger management, financial reporting, and payroll management.",
  },
  {
    title: "What features does Accounting ERP offer?",
    text: " Accounting ERP offers a wide range of features designed to help businesses manage their finances more effectively. These features include accounts payable and receivable management, which allows businesses to manage their bills and invoices in one place. The system also offers general ledger management, which enables businesses to track their financial transactions and generate accurate financial reports. Additionally, the system includes payroll management functionality, which allows businesses to manage employee payroll and benefits. Finally, Accounting ERP offers a range of financial reporting tools, including cash flow statements, balance sheets, and income statements, designed to help businesses make informed financial decisions.",
  },
  {
    title:
      "How can Accounting ERP help my business save money?",
    text: "Accounting ERP can help businesses save money in several ways. First, by streamlining financial processes, businesses can reduce the amount of time and resources they spend on manual accounting tasks. Second, by providing accurate financial reporting, businesses can make informed financial decisions that can help to reduce costs and increase profitability. Finally, by automating payroll and other financial processes, businesses can reduce the risk of errors and ensure compliance with relevant regulations, which can save them time and money.",
  },
  {
    title:
      "How secure is my data with Accounting ERP?",
    text: " Accounting ERP takes data security very seriously and employs a range of measures to protect customer data. Our system is hosted on secure servers and all data is encrypted to ensure maximum protection. We also follow best practices when it comes to data security, including regular backups, user access controls, and data redundancy.",
  },
];
</script>

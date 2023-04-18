<template>
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <h1 class="text-center">Accounting</h1>
          <p class="text-center">Our Accounting module provides a comprehensive solution for managing your financial operations, streamlining your processes and providing real-time insights into your business performance.</p>
          <v-card class="my-8">
            <v-card-text>
              <h2 class="text-center mb-4">Key Features</h2>
              <v-row>
                <v-col cols="12" md="6">
                  <v-list dense>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title class="font-weight-bold">Accounts Payable</v-list-item-title>
                        <v-list-item-subtitle>Track and manage your payable accounts.</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title class="font-weight-bold">Accounts Receivable</v-list-item-title>
                        <v-list-item-subtitle>Track and manage your receivable accounts.</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title class="font-weight-bold">General Ledger</v-list-item-title>
                        <v-list-item-subtitle>Manage your financial transactions and accounts.</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-col>
                <v-col cols="12" md="6">
                  <v-list dense>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title class="font-weight-bold">Billing and Invoicing</v-list-item-title>
                        <v-list-item-subtitle>Create and manage invoices and payments.</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title class="font-weight-bold">Financial Reporting</v-list-item-title>
                        <v-list-item-subtitle>Generate financial statements and reports.</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title class="font-weight-bold">Budgeting and Forecasting</v-list-item-title>
                        <v-list-item-subtitle>Create and manage budgets and forecasts.</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
          <v-btn color="primary" class="white--text mx-auto">Learn More</v-btn>
        </v-col>
        <v-col cols="12" md="6">
          <v-img src="https://picsum.photos/800/600" aspect-ratio="1.33"></v-img>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <style scoped>
    p {
      font-size: 1.2rem;
      line-height: 1.6;
    }
  </style>
  
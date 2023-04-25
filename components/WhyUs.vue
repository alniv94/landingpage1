<template>
  <v-container v-motion
            :initial="{
            opacity: 0,
            y: 100,
            }"
            :visible="{
            opacity: 1,
            y: 0,
            }">
    <p class="text-center pa-5 mb-10 text-accent text-h4">
      Why us Apollo Systems Enterprise Resource Planning (ERP)?
    </p>
    <v-card flat class="bg-grey-lighten-5">
      <v-toolbar class="w-100">
        <v-tabs v-model="tab" class="d-flex justify-space-between w-100 ">
          <v-tab v-for="item in items" class="w-33 font-weight-bold text-accent">
            {{ item.title }}
          </v-tab>
        </v-tabs>
      </v-toolbar>

      <v-window v-model="tab">
        <v-window-item v-for="(item, index) in items" :key="index">
          <v-row>
            <v-col cols="12" md="6" class="pa-10">
              <span class="text-h5 ma-2 text-justify">{{ item.content }}</span>
              <v-list class="bg-grey-lighten-5">
                <v-list-item
                  v-for="(listItem, index) in item.subcontent"
                  :key="index"
                  class="pa-3"
                >
                  {{ listItem }}
                </v-list-item>
              </v-list>
            </v-col>
            <v-col cols="12" md="6" class="hidden-sm-and-down">
              <div class="d-flex justify-center align-center mt-5 rounded-lg">
                <v-img :src="item.image" height="300" ></v-img>
              </div>
              
            </v-col>
          </v-row>
        </v-window-item>
      </v-window>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const tab = ref(null);
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
    image: "./images/save-money.png",
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
    image: "./images/save-time.png",
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
    image: "./images/growth.png",
  },
];
</script>

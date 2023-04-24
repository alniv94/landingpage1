<template>
  <v-container>
    <h1 class="text-center my-10 text-accent">What Our Clients Say</h1>
    <v-carousel hide-delimiters show-arrows="hover">
      <v-carousel-item
        v-for="(testimonial, index) in testimonials"
        :key="index"
      >
        <v-card>
          <v-row>
            <v-col>
              <v-card-text>
                <p class="text--primary">{{ testimonial.quote }}</p>
                <p class="text--secondary">{{ testimonial.author }}</p>
              </v-card-text>
            </v-col>
            <v-col>
              <div>Image here </div>
            </v-col>
          </v-row>
        </v-card>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script setup>
const testimonials = [
  {
    quote:
      "Since implementing the ERP software provided by Apollo System, our operations have become much more streamlined and efficient. We can now track inventory, manage orders, and handle accounting tasks all in one place, which has saved us a lot of time and resources. What I appreciate most about Apollo System is their commitment to customer service. Whenever we have had questions or encountered issues, their support team has been there to help us find solutions quickly and effectively. Overall, I would highly recommend Apollo System to any business looking to improve their operations and increase their productivity.",
    author: "John Doe, CEO of ABC Corp",
  },
  {
    quote:
      "The support provided by the Apollo System team has been outstanding. They are always quick to respond and resolve any issues we have encountered.",
    author: "Jane Smith, CFO of XYZ Corp",
  },
  {
    quote:
      "Since implementing the ERP solution from Apollo System, we have seen a significant increase in our productivity and efficiency. We highly recommend their services.",
    author: "Bob Johnson, COO of 123 Corp",
  },
];
</script>

<template>
  <v-container>
    <h1 class="text-center my-10 text-accent">What Our Clients Say</h1>
    <v-carousel hide-delimiters show-arrows="hover" cycle>
      <v-carousel-item
        v-for="(testimonial, index) in testimonials"
        :key="index"
      >
        <v-card>
          <v-card-text>
            <v-icon size="x-large" color="accent"
              >mdi-format-quote-open-outline</v-icon
            >
            <p class="text--primary d-inline pa-3">{{ testimonial.quote }}</p>
            <v-icon size="x-large" color="accent"
              >mdi-format-quote-close-outline</v-icon
            >
            <div class="d-flex flex-column justify-center align-center ma-5">
              <v-avatar :image="testimonial.image" size="80"></v-avatar>
              <p class="text-accent">{{ testimonial.author }}</p>
            </div>
          </v-card-text>
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
    image: "./images/testimonial.avif",
  },
  {
    quote:
      "The support from the Apollo System team has been exceptional, with quick and effective responses to any issues we encounter. Their expertise and professionalism are top-notch, and they consistently go above and beyond to provide us with the support we need. Their ability to explain complex concepts in an easy-to-understand manner has been invaluable, and we highly recommend them to anyone in need of a reliable, knowledgeable, and responsive team of experts. We are grateful for their ongoing partnership and their instrumental role in our success.",
    author: "Jane Smith, CFO of XYZ Corp",
    image: "",
  },
  {
    quote:
      "Since implementing the ERP solution from Apollo System, we have seen a significant increase in our productivity and efficiency. We highly recommend their services.",
    author: "Bob Johnson, COO of 123 Corp",
    image: "",
  },
];
</script>

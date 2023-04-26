<template>
  <v-container>
    <h1 class="text-center my-10 text-accent">What Our Clients Say</h1>
    <v-carousel hide-delimiters show-arrows="hover" cycle>
      <v-carousel-item v-for="(chunk, index) in chunkedTestimonials" :key="index">
        <v-row>
          <v-col v-for="(testimonial, i) in chunk" :key="i">
            <v-card width="350" height="400">
              <v-card-text>
                <v-icon size="large" color="accent">mdi-format-quote-open-outline</v-icon>
                <p class="text--primary d-inline pa-3">{{ testimonial.quote }}</p>
                <v-icon size="large" color="accent">mdi-format-quote-close-outline</v-icon>
                <div class="d-flex flex-column justify-center align-center ma-5">
                  <v-avatar :src="testimonial.image" size="80"></v-avatar>
                  <p class="text-accent">{{ testimonial.author }}</p>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script setup>
const testimonials = [
  {
    quote: "card1",
    author: "John Doe, CEO of ABC Corp",
    image: "./images/testimonial.avif",
  },
  {
    quote: "card2",
    author: "Jane Smith, CFO of XYZ Corp",
    image: "",
  },
  {
    quote: "card3",
    author: "Bob Johnson, COO of 123 Corp",
    image: "",
  },
  {
    quote: "card4",
    author: "Mary Johnson, COO of 456 Corp",
    image: "",
  },
  {
    quote: "card5",
    author: "Alex Lee, CTO of 789 Corp",
    image: "",
  },
  {
    quote: "card6",
    author: "Grace Chen, CMO of ABCD Corp",
    image: "",
  },
  {
    quote: "card7",
    author: "asdasds Chen, CMO of ABCD Corp",
    image: "",
  },
];

// Splitting the testimonials array into chunks of three
const chunkedTestimonials = testimonials.reduce((resultArray, item, index) => {
  const chunkIndex = Math.floor(index / 3);

  if (!resultArray[chunkIndex]) {
    resultArray[chunkIndex] = [];
  }

  resultArray[chunkIndex].push(item);

  return resultArray;
}, []);
</script>

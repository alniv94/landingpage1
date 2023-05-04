<template>
  <section class="bg-light-blue-lighten-4 py-10">
  <v-container class="hidden-sm-and-down">
    <p class="text-center text-h4 font-weight-bold my-10 text-accent">
      What Our Clients Say
    </p>

    <v-carousel
      hide-delimiter-background
      show-arrows="hover"
      cycle
    >
      <v-carousel-item
        v-for="(chunk, index) in chunkedTestimonials"
        :key="index"
      >
        <v-row>
          <v-col
            v-for="(testimonial, i) in chunk"
            :key="i"
            class="d-flex"
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-delay="500"
          >
            <v-hover v-slot="{ isHovering, props }" open-delay="100">
              <v-card
                class="mx-auto"
                max-width="350"
                height="400"
                :color="isHovering ? 'hover' : undefined"
                :elevation="isHovering ? 16 : 2"
                :class="{ 'on-hover': isHovering }"
                open-delay="200"
                v-bind="props"
              >
                <v-card-text
                  class="d-flex flex-column justify-space-between h-100 pa-10"
                >
                  <div>
                    <v-icon size="large" color="accent"
                      >mdi-format-quote-open-outline</v-icon
                    >
                    <p class="text-accent d-inline pa-3">
                      {{ testimonial.quote }}
                    </p>
                    <v-icon size="large" color="accent">
                      mdi-format-quote-close-outline
                    </v-icon>
                  </div>

                  <div class="d-flex flex-column justify-center align-center">
                    <v-avatar :image="testimonial.image" size="80"></v-avatar>
                    <p class="text-accent mt-3">{{ testimonial.author }}</p>
                  </div>
                </v-card-text>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</section>

  <!-- Show on sm screen  -->
  <v-container
    class="hidden-md-and-up"
    data-aos="zoom-in"
    data-aos-easing="ease-out-cubic"
    data-aos-delay="100"
  >
    <p class="text-center text-h4 font-weight-bold my-10 text-accent">
      What Our Clients Say
    </p>
    <v-carousel hide-delimiters cycle>
      <v-carousel-item
        v-for="(testimonial, index) in testimonials"
        :key="index"
      >
        <v-card class="mx-auto" max-width="350" height="400">
          <v-card-text
            class="d-flex flex-column justify-space-between h-100 pa-10"
          >
            <div>
              <v-icon size="large" color="accent"
                >mdi-format-quote-open-outline</v-icon
              >
              <p class="text-accent d-inline pa-3">
                {{ testimonial.quote }}
              </p>
              <v-icon size="large" color="accent">
                mdi-format-quote-close-outline
              </v-icon>
            </div>

            <div class="d-flex flex-column justify-center align-center">
              <v-avatar :image="testimonial.image" size="80"></v-avatar>
              <p class="text-accent mt-3">{{ testimonial.author }}</p>
            </div>
          </v-card-text>
        </v-card>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script lang="ts" setup>
const testimonials = [
  {
    quote:
      "We've been using this ERP solution for over a year now and it has completely transformed our business. Our processes are streamlined, our data is more accurate, and we're able to make better decisions thanks to the powerful analytics and reporting capabilities. Highly recommended!",
    author: "John Doe, CEO of ABC Corp",
    image: "./images/test1.jpg",
  },
  {
    quote:
      "Since implementing this ERP system, we've seen a significant increase in efficiency across our organization. Tasks that used to take hours now take minutes, and our team is able to focus on more important initiatives. It's been a game-changer for us.",
    author: "Jane Smith, CFO of XYZ Corp",
    image: "./images/test2.jpg",
  },
  {
    quote:
      "I was initially skeptical about implementing an ERP system, but after seeing the results firsthand, I'm a believer. Our inventory management has improved, our financial reporting is more accurate, and our team is able to collaborate more effectively thanks to the integrated communication tools. It's made a big difference in our day-to-day operations.",
    author: "Bob Johnson, COO of 123 Corp",
    image: "./images/test1.jpg",
  },
  {
    quote:
      "The ERP system has been a real lifesaver for our small business. We used to struggle with manual processes and keeping track of inventory, but now everything is automated and streamlined. Plus, the customer data insights have allowed us to improve our marketing efforts and increase our sales. It's been a great investment for us.",
    author: "Mary Johnson, COO of 456 Corp",
    image: "./images/test2.jpg",
  },
  {
    quote:
      "As a fast-growing startup, we needed an ERP system that could scale with us. This solution has exceeded our expectations - it's flexible, customizable, and has allowed us to expand our operations without missing a beat. Our team loves using it and we're excited about the future possibilities.",
    author: "Alex Lee, CTO of 789 Corp",
    image: "./images/test1.jpg",
  },
  {
    quote:
      "We've been using this ERP system for several years now and it's become an essential part of our business operations. It's helped us improve our supply chain management, reduce costs, and make better decisions thanks to the real-time analytics. We couldn't imagine running our business without it.",
    author: "Grace Chen, CMO of ABCD Corp",
    image: "./images/test2.jpg",
  },
];

const chunkedTestimonials = testimonials.reduce(
  (resultArray: Array<Array<any>>, item, index) => {
    const chunkIndex = Math.floor(index / 3);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  },
  []
);
</script>
<style scoped>

</style>
<template>
    <v-carousel>
      <v-carousel-item-wrapper>
        <v-carousel-item v-for="(card, index) in cards" :key="index" :class="`slide${index % 3}`">
          <v-card>
            <v-card-title>{{ card.title }}</v-card-title>
            <v-card-subtitle>{{ card.subtitle }}</v-card-subtitle>
            <v-img :src="card.image" alt="Card image"></v-img>
            <v-card-text>{{ card.description }}</v-card-text>
          </v-card>
        </v-carousel-item>
      </v-carousel-item-wrapper>
    </v-carousel>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cards: [
          {
            title: 'Card 1',
            subtitle: 'Subtitle 1',
            image: 'https://via.placeholder.com/350x150',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          },
          {
            title: 'Card 2',
            subtitle: 'Subtitle 2',
            image: 'https://via.placeholder.com/350x150',
            description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          },
          {
            title: 'Card 3',
            subtitle: 'Subtitle 3',
            image: 'https://via.placeholder.com/350x150',
            description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          },
        ],
      }
    },
  }
  </script>
  
  <style>
  .slide0 {
    transform: translateX(0%);
  }
  
  .slide1 {
    transform: translateX(-33.33%);
  }
  
  .slide2 {
    transform: translateX(-66.66%);
  }
  </style>
  
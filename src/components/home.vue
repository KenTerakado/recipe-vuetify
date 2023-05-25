<template>
  <v-card>
      <v-row>
          <v-col>
              <v-container class="background">
                  <v-img src="../assets/logo-black.png" alt="logo"></v-img>
              </v-container>
          </v-col>
      </v-row>
      <v-row>
          <h2>Discover the deliciousness of Kembussin's bussin</h2>
      </v-row>
      <v-spacer></v-spacer>
      <v-row>
          <div>
              <router-link to="/Apple Pie">
                  <v-img src="../assets/logo-black.png" @click="navigateToAnotherPage"></v-img>
              </router-link>
          </div>
      </v-row>
  </v-card>
</template>

<script>
  export default {
    name: 'home-page',

    data: () => ({
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com',
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com',
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuejs.com/vuetify',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs',
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify',
        },
      ],
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer',
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],
    }),
  }
</script>
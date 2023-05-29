<template>
  <v-card>
      <v-row>
          <v-col>
              <v-container class="background mt-n16" fluid>
              </v-container>
          </v-col>
          <v-img class="logo" src="../assets/logo-white.png" alt="logo"></v-img>
      </v-row>
      <v-spacer></v-spacer>
      <v-card class="mt-7 px-5">
        <v-card-title class="ml-6 mb-4"><h1>Latest Recipes</h1></v-card-title>
        <v-row>
          <v-col col="3">
            <v-card>
              <v-card-title class="ml-6"><h3>Apple Pie</h3></v-card-title>
              <v-container class="ml-6 mt-n2">
                <RouterLink to="/applePie">
                  <v-img class="icon" src="../assets/applePieIcon.jpeg"></v-img>
                </RouterLink>
              </v-container>
              <p class="mx-9 pb-6">
                A American classic - one of the most iconic deserts across the world...
              </p>
            </v-card>
          </v-col>
          <v-col col="3">
            <v-card>
              <v-card-title class="ml-6"><h3>Chicken Alfredo</h3></v-card-title>
              <v-container class="ml-6 mt-n2">
                <RouterLink to="/chickenAlfredo">
                  <v-img class="icon" src="../assets/alfredoIcon.jpg"></v-img>
                </RouterLink>
              </v-container>
              <p class="mx-9 pb-6">
                A creamy and cheesy pasta dish that many consider to be their comfort...
              </p>
            </v-card>
          </v-col>
          <v-col col="3">
            <v-card>
              <v-card-title class="ml-6"><h3>Chicken Noodle Soup</h3></v-card-title>
              <v-container class="ml-6 mt-n2">
                <RouterLink to="/chickenNoodle">
                  <v-img class="icon" src="../assets/chickenNoodleIcon.jpeg"></v-img>
                </RouterLink>
                </v-container>
              <p class="mx-9 pb-6">
                Perfect for light meals or on a rainy day - chicken noodle soup is an ...
              </p>
            </v-card>
          </v-col>
          <v-col col="3">
            <v-card height="402">
              <v-card-title class="ml-6"><h3>Coming Soon...</h3></v-card-title>
              <v-container class="ml-6 mt-n2"><v-img class="icon" src="../assets/comingSoonIcon.jpeg"></v-img></v-container>
              <p class="mx-9 pb-6">
                New recipes will be added soon!
              </p>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card height="402">
              <v-card-title class="ml-6"><h3>About</h3></v-card-title>
              <p class="mx-9 pb-6">
                About section
              </p>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
  </v-card>
</template>

<style>
.background {
  background-image: url('../assets/background.jpg');
  background-size: cover;
  height: 500px;
  width: 1500px;
  margin-top: -55px;
  filter: brightness(0.5);
}

.logo {
  position: absolute;
  height: 300px;
  width: 300px;
  margin-left: 600px;
  margin-top: 80px;
}

.icon {
  height: 250px;
  width: 250px;
}
</style>

<script>
import { RouterLink } from 'vue-router';

  export default {
    name: "home-page",
    data: () => ({
        ecosystem: [
            {
                text: "vuetify-loader",
                href: "https://github.com/vuetifyjs/vuetify-loader",
            },
        ],
    }),
    components: { RouterLink }
}
</script>
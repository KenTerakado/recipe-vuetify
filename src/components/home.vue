<template>
  <v-card>
      <v-row>
          <v-col>
              <v-container class="background pa-0" fluid>
              </v-container>
          </v-col>
          <v-img class="logo" src="../assets/logo-white.png" alt="logo"></v-img>
      </v-row>
      <v-row>
          <h2>Discover the deliciousness of Kembussin's bussin</h2>
      </v-row>
      <v-spacer></v-spacer>
      <v-row>
          <!--div>
              <router-link to="/applePie">
                  <v-img src="../assets/logo-black.png" @click="navigateToAnotherPage"></v-img>
              </router-link>
          </div-->
      </v-row>
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
</style>

<script>
  export default {
    name: 'home-page',

    data: () => ({
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
      ],
    }),
  }
</script>
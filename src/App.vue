<template>
  <v-app>
    <v-app-bar
      color="rgba(220, 220, 220, 0.8)"
      app
      fixed
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      class="menu-drawer"
    >
      <v-card
        class="menu-card px-0 mx-0"
        tile
      >
        <v-list
          nav
          dense
          class="list pa-0 ma-0"
        >
          <v-list-item-group
            v-model="group"
            active-class="deep-black--text text--accent-7"
            class="menu mt-8"
          >
            <v-list-item>
              <RouterLink to="/"><h3>Home</h3></RouterLink>
            </v-list-item>

            <v-list-item>
              <RouterLink to="/applePie">Apple Pie</RouterLink>
            </v-list-item>

            <v-list-item>
              <RouterLink to="/chickenAlfredo">Chicken Alfredo</RouterLink>
            </v-list-item>

            <v-list-item>
              <RouterLink to="/chickenNoodle">Chicken Noodle Soup</RouterLink>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<style>
.menu-drawer {
  height: 100%;
}

.menu-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  align-items: center;
}

.menu {
  justify-content: center;
}

.v-list-item a:not(.v-list-item__action) {
  text-decoration: none;
  color: black;
}

</style>

<script>
import { RouterLink } from 'vue-router';

export default {
  name: "App",
  data: () => ({
    drawer: false,
    group: null,
  }),
  watch: {
    group() {
      this.drawer = false;
    },
  },
  components: { RouterLink },
};
</script>

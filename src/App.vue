<template>
  <v-app>
    <v-app-bar
      color='rgba(220, 220, 220, 0.8)'
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <!--div class="d-flex align-center">
          <v-img
            alt="cook-logo"
            class="shrink mr-2"
            contain
            src="assets/cook-logo.png"
            transition="scale-transition"
            width="40"
          ></v-img>
        </div-->
        <v-spacer></v-spacer>  
    </v-app-bar>
      <v-navigation-drawer
        v-model="drawer"
        absolute
        bottom
        temporary
      >
        <v-list
          nav
          dense
        >
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >
            <v-list-item>
                <RouterLink to="/">Home</RouterLink>
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
      </v-navigation-drawer>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

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
    components: { RouterLink }
};
</script>

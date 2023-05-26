<template>
  <v-app>
    <v-app-bar
        app
        color="white"
        light
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          <div class="d-flex align-center">
            <v-img
                alt="cook-logo"
                class="shrink mr-2"
                contain
                src="assets/cook-logo.png"
                transition="scale-transition"
                width="40"
            ></v-img>
              </div>
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
              <v-list-item link>
                  <v-list-item-title>Home</v-list-item-title>
              </v-list-item>

              <v-list-item>
                  <v-list-item-title>Apple Pie</v-list-item-title>
              </v-list-item>

              <v-list-item>
                  <v-list-item-title>Chicken Alfredo</v-list-item-title>
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
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

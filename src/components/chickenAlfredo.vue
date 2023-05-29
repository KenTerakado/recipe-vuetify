<template fluid>
    <v-card>
        <v-row>
            <v-col>
                <v-container class="chickenAlfredoBackground mt-n16" fluid>
                </v-container>
            </v-col>
            <v-img class="logo" src="../assets/alfredoBanner.png" alt="logo"></v-img>
        </v-row>
        <v-row>
            <v-col cols="4">
                <v-card class="ml-10 mb-6 mt-4">
                    <v-card-title class="ml-6"><h3>Ingredients</h3></v-card-title>
                    <v-list class="mx-9 pb-6">
                        <v-list-item v-for="(item, index) in ingredientItems" :key="index">
                        <v-chip>{{ item }}</v-chip>
                        </v-list-item>
                    </v-list>    
                </v-card>
            </v-col>
            <v-col cols="8">
                <v-card class="mr-10 mb-6 mt-4">
                    <v-card-title><h3>Directions</h3></v-card-title>
                    <v-list>
                        <v-list-item-group>
                        <v-list-item v-for="(step, index) in directionSteps" :key="index">
                            <v-list-item-content>
                            <h3>Step {{ index + 1 }}</h3>
                            <p>{{ step }}</p>
                            </v-list-item-content>
                        </v-list-item>
                        </v-list-item-group>
                    </v-list>
                </v-card>
            </v-col>
        </v-row>
    </v-card>
</template>

<style>
.chickenAlfredoBackground {
  background-image: url('../assets/chickenAlfredoBackground.jpeg');
  background-size: cover;
  height: 500px;
  width: 1500px;
  margin-top: -55px;
  filter: brightness(0.4);
}    
</style>

<script>
export default {
  data() {
    return {
      ingredientItems: [
        '2 tbsp. extra-virgin olive oil',
        '2 boneless skinless chicken breasts',
        'Kosher salt',
        'Freshly ground black pepper',
        '1 1/2 cups whole milk',
        '1 1/2 cups chicken broth',
        '2 cloves minced garlic',
        '1/2 cup heavy cream',
        '1 cup freshley grated parmesan',
        'Freshley chopped parsley',
        '8 oz fettuccine',
      ],
      directionSteps: [
        'In a large skillet over medium-high heat, heat oil',
        'Add chicken and season with salt and pepper. Cook until golden and cooked through, 8 minutes per side. Let rest 10 minutes, then slice',
        'Add milk, broth, and garlic to skillet',
        'Season with salt and pepper and bring to a simmer',
        'Add fettuccine, stirring frequently for about 3 minutes. Let cook until al dente, 8 minutes more',
        'Stir in heavy cream and Parmesan until combined. Simmer until sauce thickens',
        'Remove from heat and stir in sliced chicken. Garnish with parsley',
      ],
    };
  },
};
</script>
<template fluid>
    <v-card>
        <v-row>
            <v-col>
                <v-container class="chickenNoodleBackground mt-n16" fluid>
                </v-container>
            </v-col>
            <v-img class="logo" src="../assets/chickenNoodleBanner.png" alt="logo"></v-img>
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
.chickenNoodleBackground {
  background-image: url('../assets/chickenNoodleBackground.webp');
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
        '2 tablespoons unsalted butter',
        '1 onion, diced',
        '2 carrots, peeled and diced',
        '2 ribs celery, diced',
        '3 cloves garlic, minced',
        '8 cups chicken stock',
        '2 bay leaves',
        'Kosher salt',
        'Freshly ground black pepper',
        '2 ½ pounds bone-in, skinless chicken breasts',
        '2 ½ cups wide egg noodles',
        'Chopped fresh parsley leaves',
        'Chopped fresh dill',
        'Chopped fresh thyme',
        'Chopped fresh rosemary',
        'Freshly squeezed lemon juice, or more, to taste',
      ],
      directionSteps: [
        'Melt butter in a large stockpot or Dutch oven over medium heat. Add onion, carrots and celery. Cook, stirring occasionally, until tender, about 3-4 minutes',
        'Stir in garlic until fragrant, about 1 minute',
        'Stir in chicken stock and bay leaves; season with salt and pepper, to taste. Add chicken and bring to boil; reduce heat and simmer, covered, until the chicken is cooked through, about 30-40 minutes. Remove chicken and let cool before dicing into bite-size pieces, discarding bones',
        'Stir in chicken and pasta and cook until tender, about 6-7 minutes',
        'Remove from heat; stir in parsley, dill, thyme, rosemary, and lemon juice; season with salt and pepper, to taste',
        'Serve and enjoy!',
      ],
    };
  },
};
</script>
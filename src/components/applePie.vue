<template fluid>
    <v-card>
        <v-row>
            <v-col>
                <v-container class="applePieBackground mt-n16" fluid>
                </v-container>
            </v-col>
            <v-img class="logo" src="../assets/applePieBanner.png" alt="logo"></v-img>
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
                        <!-- Pie Crust section -->
                        <v-list-item>
                            <v-list-item-content>
                            <h3 id="directions" style="margin-left: 10px;">Pie Crust</h3>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-content>
                            <p style="margin-left: 10px;">Skip this section and go to <a href="#pieFilling" style="color: rgb(18, 43, 205);">Pie Filling</a> if you are using pre-made pie crusts</p>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item v-for="(step, index) in pieCrustSteps" :key="index">
                            <v-list-item-content>
                            <h3>Step {{ index + 1 }}</h3>
                            <p>{{ step }}</p>
                            </v-list-item-content>
                        </v-list-item>

                        <!-- Pie Filling/Finish section -->
                        <v-list-item>
                            <v-list-item-content>
                            <h3 id="pieFilling" style="margin-left: 10px;">Pie Filling/Finish</h3>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item v-for="(step, index) in pieFillingSteps" :key="index">
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
.applePieBackground {
  background-image: url('../assets/applePieBackground.jpeg');
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
        '2 1/2 cups of flour',
        '1 cup (2 sticks) of butter (ice cold or frozen)',
        '1/2 tsp of salt',
        '7 tbsp of ice cold water',
        '1 tbsp of apple cider vinegar',
        '5~6 apples (granny smith or fuji)',
        '1 cup of sugar',
        '5 tbsp of cinnamon',
        '1 tsp of ginger',
        'pinch of nutmeg',
        '1 egg',
      ],
      pieCrustSteps: [
        'Put your food processor blades (or knife if you do not have one) into the freezer to chill',
        'Cut the frozen butter into manageable pieces (around the size of a dice)',
        'Blend the flour with the frozen pieces of butter. If you are using a food processor, blend on two-second intervals as the friction/heat can cause the butter to soften and melt. If you used a knife to chop up the frozen butter, you can easily blend the butter with the flour using either your hand or a fork (if you use your hands, be careful not to over-handle, as your body heat can melt the butter).',
        'Add in the salt and apple cider vinegar, and slowly add ice-cold water bit by bit - adjusting until a shaggy dough forms. Once formed, wrap and chill in the fridge until use.',
      ],
      pieFillingSteps: [
        'Preheat the oven at 200 degrees Celsius.',
        'Peel and chop/slice your apples, and mix the apples with the sugar and cinnamon in a large colander, placing a large bowl underneath.',
        'Let sit for at least an hour. The sugar will pull the water out of the apples, resulting in 2 things:\n1. The water released from the apples will ensure that the water released by the apples during the cooking process will be minimal, preventing soggy pie crusts.\n2. The juice released from the apples can be reduced and made into a caramel later (step 7), which will add even more flavor.',
        'Take the pie dough out, cut into two pieces, and roll out on a floured surface. Half will be used for the bottom crust, the other for the top.',
        'Fit the bottom crust dough into the baking dish, and use a fork to dot the bottom surface for ventilation (Using a shimmy technique can help with fitting the dough to your baking dish, without stretching out or poking holes in the dough). Cut off any excess dough, and crimp the edges',
        'Lay parchment paper on top, and fill with pie weight. Blind bake the bottom dough from 15 mins to prevent undercooked crust',
        'While blind baking, take the released juices from the apples, and reduce in a sauce pan over low heat. (Optional: Add butter to smooth out)',
        'Fill the bottom dough with the apples and top with the reduce apple juice caramel',
        'Julienne the top crust dough for a lattice lace pattern, and lay out the dough',
        'You can either brush the top crust with egg wash or sprtiz with sugar water for a nice golden brown/glossy finish',
        'Bake until golden brown',
        'Let rest for 30~45 min and enjoy!',
      ]
    };
  },
};
</script>
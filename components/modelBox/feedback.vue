<template>
  <div>
    <v-dialog v-model="modalFeedback" persistent max-width="490">
      <template v-slot:activator="{ on }">
        <v-btn class="ml-7" outlined color="success darken-1" v-on="on">
          I am Happy
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline">Write a feedback</v-card-title>

        <v-card-text>
          <v-row align="center">
            <v-col cols="5">
              ABC Limited
            </v-col>

            <v-col cols="7">
              <!-- Rating -->
              <rating />
              <!-- Rating -->
            </v-col>

            <v-col cols="5">
              XYZ Services
            </v-col>

            <v-col cols="7">
              <!-- Rating -->
              <rating />
              <!-- Rating -->
            </v-col>
          </v-row>

          <br />

          <v-textarea label="Write in Detail" outlined required></v-textarea>
        </v-card-text>

        <v-card-actions class="pb-3">
          <v-spacer></v-spacer>

          <v-btn text color="error lighten-1" @click="modalFeedback = false">
            Cancel
          </v-btn>

          <!--  Confirm Button  -->
          <modelConfirm />
          <!--  //Confirm Button//  -->
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import rating from '~/components/forms/rating.vue'

import modelConfirm from '~/components/modelBox/confirm.vue'

export default {
  name: 'Feedback',

  components: { rating, modelConfirm },

  data() {
    return {
      modalFeedback: false
    }
  }
}
</script>

<style></style>

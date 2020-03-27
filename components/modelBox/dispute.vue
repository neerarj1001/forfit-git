<template>
  <div>
    <v-dialog v-model="modalDispute" persistent max-width="490">
      <template v-slot:activator="{ on }">
        <v-btn class="mr-7" outlined color="red lighten-1" v-on="on">
          Open Dispute
        </v-btn>
      </template>

      <v-card>
        <v-card-title> Open Dispute </v-card-title>

        <v-card-text>
          <v-row align="center">
            <v-col cols="12">
              <v-select
                :items="items"
                label="Choose an issue"
                outlined
              ></v-select>
            </v-col>
          </v-row>

          <v-text-field label="Subject" required outlined></v-text-field>

          <v-textarea label="Write in Detail" outlined required></v-textarea>
        </v-card-text>

        <v-card-actions class="pb-3">
          <v-spacer></v-spacer>

          <v-btn text color="error lighten-1" @click="modalDispute = false">
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
import modelConfirm from '~/components/modelBox/confirm.vue'

export default {
  components: { modelConfirm },

  data() {
    return {
      modalDispute: false,

      items: [
        'Non-delivery',
        'Quality not satisfactory',
        'Damage on shipment',
        'Wrong product'
      ]
    }
  }
}
</script>

<style></style>

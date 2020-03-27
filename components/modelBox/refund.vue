<template>
  <div>
    <v-dialog v-model="dialogRequest" persistent width="390">
      <template v-slot:activator="{ on }">
        <v-btn class="ma-2" outlined color="red lighten-2" v-on="on">
          <v-icon left>mdi-reply</v-icon> Refund
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="grey lighten-2">
          Refud Request
        </v-card-title>

        <v-card-text>
          <br />

          <v-text-field
            value="pay_4s5d054dahasiskjdvsugda"
            label="Payment Id"
            filled
            shaped
            readonly
          >
          </v-text-field>

          <v-text-field
            value="ORD876JHJK"
            label="Order Number"
            filled
            shaped
            readonly
          >
          </v-text-field>

          <v-text-field
            value="John Doe"
            label="Customer"
            filled
            shaped
            readonly
          >
          </v-text-field>

          <v-text-field
            value="₹ 1200.00"
            label="Transaction Amount"
            filled
            shaped
            readonly
          >
          </v-text-field>

          <v-text-field
            prefix="₹"
            label="Refund Amount"
            outlined
            shaped
            hint="The amount must be less than the transaction amount."
          >
          </v-text-field>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text color="error lighten-1" @click="dialogRequest = false">
            Cancel
          </v-btn>

          <!-- Confirm -->
          <confirm />
          <!-- //Confirm// -->
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import confirm from '~/components/modelBox/confirm.vue'

export default {
  name: 'Refund',
  components: { confirm },

  data() {
    return {
      dialogRequest: false
    }
  }
}
</script>

<style></style>

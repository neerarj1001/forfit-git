<template>
  <div>
    <v-dialog v-model="modelConfirm" persistent max-width="290">
      <template v-slot:activator="{ on }">
        <v-btn class="ma-2" text color="green darken-1" v-on="on">
          Submit
        </v-btn>
      </template>

      <v-card>
        <v-card-title>Are you sure?</v-card-title>

        <!-- --------------- Text for Refund --------------- -->
        <v-card-text>
          Do you want to refund the payment? This operation cannot be undone.
        </v-card-text>
        <!-- --------------- Text for Refund --------------- -->

        <!-- --------------- Text for Vendor Verify --------------- -->
        <v-card-text>
          Are you sure the information on the vendor is correct? This operation
          cannot be undone.
        </v-card-text>
        <!-- --------------- Text for Vendor Verify --------------- -->

        <!-- --------------- Text for Review --------------- -->
        <v-card-text>
          We will release the payment to the Merchant / Vendor as soon as
          possible. Thanks for your time for the feedback.
        </v-card-text>
        <!-- --------------- Text for Review --------------- -->

        <!-- --------------- Text for Dispute --------------- -->

        <v-card-text>
          We apologize for the inconvenience caused. We will share your problem
          with the Merchant / Vendor. Be patient for the revert.
        </v-card-text>
        <!-- --------------- Text for Dispute --------------- -->

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text color="error lighten-1" @click="modelConfirm = false">
            Cancel
          </v-btn>

          <v-btn text color="green darken-1" @click="modelConfirm = false">
            Confirm
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'Confirm',

  data() {
    return {
      modelConfirm: false
    }
  }
}
</script>

<style></style>

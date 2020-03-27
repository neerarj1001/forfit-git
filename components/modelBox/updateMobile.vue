<template>
  <div>
    <v-dialog v-model="modalMobile" persistent max-width="400">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" text small :ripple="false" v-on="on">
          Update
        </v-btn>
      </template>

      <v-card outlined>
        <v-card-title>
          Update Mobile
        </v-card-title>

        <v-card-text>
          <br />
          <v-text-field
            v-model="mobile"
            label="Mobile Number"
            type="text"
            prepend-inner-icon="mdi-cellphone-iphone"
            required
            outlined
          ></v-text-field>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text color="error lighten-1" @click="modalMobile = false">
            Cancel
          </v-btn>

          <v-btn class="ma-2" text color="primary" @click="modalMobile = false">
            Update
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modalMobile: false
    }
  }
}
</script>

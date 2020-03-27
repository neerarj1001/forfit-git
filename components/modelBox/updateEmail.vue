<template>
  <div>
    <v-dialog v-model="modalEmail" persistent max-width="400">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" text small :ripple="false" v-on="on">
          Update
        </v-btn>
      </template>

      <v-card outlined>
        <v-card-title>
          Update email
        </v-card-title>

        <v-card-text>
          <br />
          <v-text-field
            v-model="email"
            label="Email"
            type="text"
            prepend-inner-icon="mdi-email"
            required
            outlined
          ></v-text-field>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text color="error lighten-1" @click="modalEmail = false">
            Cancel
          </v-btn>

          <v-btn class="ma-2" text color="primary" @click="modalEmail = false">
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
      modalEmail: false
    }
  }
}
</script>

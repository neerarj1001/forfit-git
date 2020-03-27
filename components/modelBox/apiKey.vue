<template>
  <div>
    <v-dialog v-model="modalApiKey" persistent max-width="350">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" outlined dark class="mb-4 ml-4" v-on="on">
          Generate New Key
        </v-btn>
      </template>

      <v-card outlined>
        <v-card-title>Generate new?</v-card-title>

        <v-card-text>
          By generating a new API, the existing API will be deactivated.

          <v-radio-group>
            <v-radio label="Deactivate in 24 Hours" color="primary"></v-radio>
            <v-radio label="Deactivate Immediatly" color="primary"></v-radio>
          </v-radio-group>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text color="error lighten-1" @click="modalApiKey = false">
            Cancel
          </v-btn>

          <v-btn text color="green darken-1" @click="modalApiKey = false">
            Confirm
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
      modalApiKey: false
    }
  }
}
</script>

<style></style>

<template>
  <div>
    <v-dialog v-model="modalPassword" persistent max-width="400">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" text small :ripple="false" v-on="on">
          Update
        </v-btn>
      </template>

      <v-card outlined>
        <v-card-title>
          Update Password
        </v-card-title>

        <v-card-text>
          <br />

          <v-text-field
            label="Current Password"
            name="currentPassword"
            prepend-inner-icon="mdi-lock-open"
            type="password"
            outlined
          ></v-text-field>

          <v-text-field
            label="Password"
            name="password"
            prepend-inner-icon="mdi-lock-open"
            type="password"
            outlined
          ></v-text-field>

          <v-text-field
            label="Password (Confirm)"
            name="password"
            prepend-inner-icon="mdi-lock-open"
            type="password"
            outlined
          ></v-text-field>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text color="error lighten-1" @click="modalPassword = false">
            Cancel
          </v-btn>

          <v-btn
            class="ma-2"
            text
            color="primary"
            @click="modalPassword = false"
          >
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
      modalPassword: false
    }
  }
}
</script>

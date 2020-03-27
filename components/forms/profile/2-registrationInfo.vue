<template>
  <div>
    <v-row>
      <v-col cols="12" sm="1" md="1"></v-col>
      <v-col cols="12" sm="8" md="8">
        <v-text-field
          required
          outlined
          dense
          label="Business Registration Number"
          hint="Enter  Registration Number"
        ></v-text-field>

        <v-text-field
          required
          outlined
          dense
          label="Business PAN"
          hint="Enter business PAN Number"
        ></v-text-field>

        <v-text-field
          required
          outlined
          dense
          label="Local Body Licence"
          hint="Enter Local Body Licence Number"
        ></v-text-field>

        <v-text-field
          required
          outlined
          dense
          label="Udyog Aadhaar Number"
          hint="Enter  Udyog Aadhaar Number"
        ></v-text-field>

        <v-text-field
          required
          outlined
          dense
          label="Business GSTN"
          hint="Enter business GST Number"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="1" md="1"></v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="1" md="1"></v-col>
      <v-col cols="12" sm="8" md="8">
        <!-- Save Button -->

        <v-btn color="primary darken-1" outlined>
          Save
        </v-btn>

        <!-- Save Button -->
      </v-col>
      <v-col cols="12" sm="1" md="1"></v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'RegistrationInfo'
}
</script>

<style></style>

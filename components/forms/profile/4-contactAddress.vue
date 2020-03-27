<template>
  <div>
    <v-row>
      <v-col cols="12" sm="1" md="1"></v-col>

      <v-col cols="12" sm="10" md="8">
        <v-text-field
          v-model="guardian"
          label="Guardian"
          hint="Gardian as per the Aadhaar"
          required
          outlined
          dense
        ></v-text-field>

        <v-text-field
          v-model="houseName"
          label="House Name"
          hint="House Name as per the Aadhaar"
          required
          outlined
          dense
        ></v-text-field>

        <v-text-field
          v-model="street"
          label="Street"
          hint="Street as per the Aadhaar"
          required
          outlined
          dense
        ></v-text-field>

        <v-text-field
          v-model="town"
          label="Town/ City"
          hint="Town/ City as per the Aadhaar"
          required
          outlined
          dense
        ></v-text-field>

        <v-text-field
          v-model="postOffice"
          label="Post Office"
          hint="Post Office as per the Aadhaar"
          required
          outlined
          dense
        ></v-text-field>

        <v-text-field
          v-model="district"
          label="District"
          hint="District as per the Aadhaar"
          required
          outlined
          dense
        ></v-text-field>

        <v-text-field
          v-model="state"
          label="State"
          hint="State as per the Aadhaar"
          required
          outlined
          dense
        ></v-text-field>

        <v-text-field
          v-model="pinCode"
          label="Postal PIN"
          hint="Postal PIN as per the Aadhaar"
          required
          outlined
          dense
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
  name: 'ContactAddress'
}
</script>

<style></style>

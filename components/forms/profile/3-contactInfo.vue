<template>
  <div>
    <v-row>
      <v-col cols="12" sm="1" md="1"></v-col>

      <v-col cols="12" sm="10" md="8">
        <v-text-field
          v-model="personName"
          label="Contact Person Name"
          hint="Name of primary contact person"
          required
          outlined
          dense
        ></v-text-field>

        <v-text-field
          v-model="mobileNumber"
          label="Mobile Number"
          hint="Enter your primary Mobile Number"
          required
          outlined
          dense
        ></v-text-field>

        <v-text-field
          v-model="emailId"
          label="Email Id"
          hint="Enter your Email Id"
          required
          outlined
          dense
        ></v-text-field>
        <!-- date of birth -->
        <date dateLabel="Date of Birth"/>
        <!-- //date of birth// -->

        <v-select
          v-model="genderSelect"
          :items="gender"
          label="Gender"
          hint="Choose your Gender"
          required
          outlined
          dense
        ></v-select>

        <v-text-field
          v-model="panNumber"
          required
          outlined
          dense
          label="PAN Card Number"
          hint="Enter PAN card Number"
        ></v-text-field>

        <v-text-field
          v-model="aadhaarNumber"
          label="Aadhaar Number"
          hint="Enter Aadhaar Number"
          required
          outlined
          dense
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="1" md="1"></v-col>

      <v-col cols="12" sm="10" md="8">
        <!-- Save Button -->

        <v-btn color="primary darken-1" outlined>
          Save
        </v-btn>

        <!-- Save Button -->
      </v-col>
    </v-row>
  </div>
</template>

<script>
import date from '~/components/forms/date' 
export default {
  name: 'ContactInfo',

  data: () => ({
    gender: ['MALE', 'FEMALE', 'TRANSGENDER'],
    mobileNumber: '',
    emailId: '',
    panNumber: '',
    aadhaarNumber: '',
    personName: '',
    dob: '',
    genderSelect: '',
    guardian: '',
    houseName: '',
    street: '',
    town: '',
    postOffice: '',
    district: '',
    state: '',
    pinCode: ''
  }),
  components: {
    date
  }
}
</script>

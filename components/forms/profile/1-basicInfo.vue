<template>
  <div>
    <v-row>
      <v-col cols="12" sm="1" md="1"></v-col>
      <v-col cols="12" sm="8" md="8">
        <v-select
          v-model="businessType"
          :items="business"
          label="Business Type"
          hint="Choose your business type"
          required
          outlined
          dense
        ></v-select>

        <v-text-field
          v-model="businessName"
          required
          outlined
          dense
          label="Business Name"
          hint="Enter your business name"
        ></v-text-field>

        <v-text-field
          v-model="address1"
          required
          outlined
          dense
          label="Address Line 1"
        ></v-text-field>

        <v-text-field
          v-model="address2"
          required
          outlined
          dense
          label="Address Line 2"
        ></v-text-field>

        <v-text-field
          v-model="address2"
          required
          outlined
          dense
          label="Address Line 3"
        ></v-text-field>

        <v-text-field
          id="textboxstyle"
          v-model="city"
          required
          outlined
          dense
          label="City"
          hint="Enter your City"
        ></v-text-field>

        <v-select
          v-model="state"
          required
          outlined
          dense
          :items="states"
          label="State"
          hint="Choose your State"
        ></v-select>

        <v-text-field
          v-model="pincode"
          required
          outlined
          dense
          label="Pincode"
          hint="Enter your Pincode"
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
  name: 'BasicInfo',

  data: () => ({
    business: [
      'INDIVIDUAL',
      'PROPRIETORSHIP',
      'PARTNERSHIP/LLP',
      'PRIVATE LIMITED',
      'PUBLIC LIMITED',
      'CO-OP SOCIETY',
      'TRUST',
      'NGO'
    ],

    states: [
      'ANDHRA PRADESH',
      'ARUNACHAL PRADESH',
      'ASSAM',
      'BIHAR',
      'CHHATTISGARH',
      'GOA',
      'GUJARAT',
      'HARYANA',
      'HIMACHAL PRADESH',
      'JAMMU AND KASHMIR',
      'JHARKHAND',
      'KARNATAKA',
      'KERALA',
      'MADHYA PRADESH',
      'MAHARASHTRA',
      'MANIPUR',
      'MEGHALAYA',
      'MIZORAM',
      'NAGALAND',
      'ODISHA',
      'PUNJAB',
      'RAJASTHAN',
      'SIKKIM',
      'TAMIL NADU',
      'TELANGANA',
      'TRIPURA',
      'UTTAR PRADESH',
      'UTTARAKHAND',
      'WEST BENGAL'
    ],
    businessType: '',
    businessName: '',
    city: '',
    state: '',
    address: '',
    country: '',
    pincode: '',
    cinNumber: '',
    panNumber: '',
    localLicenceNum: '',
    gstNumber: '',
    tanNumber: ''
  })
}
</script>

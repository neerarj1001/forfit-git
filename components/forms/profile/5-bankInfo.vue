<template>
  <div>
    <v-row>
      <v-col cols="12" sm="1" md="1"></v-col>
      <v-col cols="12" sm="10" md="8">
        <v-text-field
          v-model="accHolderName"
          label="Account Holder Name"
          hint="Name as in the bank record"
          required
          outlined
          dense
        ></v-text-field>

        <v-text-field
          v-model="accountNumber"
          label="Account Number"
          hint="Enter bank account number"
          required
          outlined
          dense
        ></v-text-field>
        <v-text-field
          v-model="ifsc"
          label="Account IFSC"
          hint="Branch IFSC"
          required
          outlined
          dense
        ></v-text-field>

        <v-text-field
          v-model="branchName"
          label="Branch"
          hint="Enter branch name"
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
  name: 'BankInfo',

  data: () => ({
    accHolderName: '',
    accountNumber: '',
    ifsc: '',
    branchName: ''
  })
}
</script>

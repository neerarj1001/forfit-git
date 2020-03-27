<template>
  <div>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left body-2" width="40%">Vendor Id</th>
            <th class="text-left body-2" width="60%">
              vendor_4s5d054
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in orderInfo" :key="order.name">
            <td>{{ order.name }}</td>
            <td>{{ order.details }}</td>
          </tr>

          <tr v-for="calculation in calculationInfo" :key="calculation.name">
            <td>{{ calculation.name }}</td>
            <td>{{ calculation.details }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>

    <v-divider></v-divider>

    <br />

    <!-- Uploaded File -->
    <v-row class="mx-1">
      <v-col cols="12" md="5" sm="5">
        <label class="body-2"> Bank Document </label>
      </v-col>
      <v-col cols="12" md="7" sm="7">
        <v-btn outlined x-small fab color="primary">
          <v-icon>mdi-file-document</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <!-- Uploaded File -->

    <!-- Status -->
    <v-row class="mx-1">
      <v-col cols="12" md="5" sm="5">
        <label class="body-2"> Enable </label>
      </v-col>

      <v-col cols="12" md="4" sm="4">
        <v-switch v-model="switchStatus" class="mt-0 pt-0"></v-switch>
      </v-col>
    </v-row>
    <!-- Status -->

    <!-- Verification Status -->
    <v-row class="mx-1">
      <v-col cols="12" md="5" sm="5">
        <label class="body-2"> Status </label>
      </v-col>

      <v-col cols="12" md="4" sm="4">
        <v-chip color="green" outlined small label>
          Verified
        </v-chip>
      </v-col>
    </v-row>
    <!-- Verification Status -->
  </div>
</template>

<script>
export default {
  name: 'SideBar',

  data() {
    return {
      dialogVerify: false,
      switchStatus: true,

      orderInfo: [
        {
          name: 'Referance Id',
          details: '4s5d054dahasiugda'
        },

        {
          name: 'Created Time',
          details: '07 Sep 2017, 06:57:59 AM'
        },

        {
          name: 'Vendor',
          details: 'ABC Limited'
        },

        {
          name: 'Mobile',
          details: '9876543210'
        },

        {
          name: 'Email',
          details: 'abcabc@abc.abc'
        },

        {
          name: 'Bank Account No',
          details: '9896746464846513511'
        },

        {
          name: 'Bank IFCS',
          details: 'SBI005565'
        },

        {
          name: 'Branch',
          details: 'Kannur'
        }
      ]
    }
  }
}
</script>

<style></style>

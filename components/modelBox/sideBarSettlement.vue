<template>
  <div>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left body-2" width="50%">Settlement Id</th>
            <th class="text-left body-2" width="50%">
              settl_10a5s0d4g8g00h4a
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="settlement in settlementInfo" :key="settlement.name">
            <td>{{ settlement.name }}</td>
            <td>{{ settlement.details }}</td>
          </tr>

          <tr v-for="collection in collectionInfo" :key="collection.name">
            <td>{{ collection.name }}</td>
            <td>{{ collection.details }}</td>
          </tr>

          <tr>
            <br />
          </tr>

          <tr v-for="bank in bankInfo" :key="bank.name">
            <td>{{ bank.name }}</td>
            <td>{{ bank.details }}</td>
          </tr>

          <tr>
            <br />
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

    <v-row class="mx-1">
      <v-col cols="12" md="5" sm="5">
        <label class="body-2"> Status </label>
      </v-col>
      <v-col cols="12" md="7" sm="7">
        <v-chip color="green" outlined small label>
          Success
        </v-chip>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'SideBar',

  data() {
    return {
      settlementInfo: [
        {
          name: 'Created Time',
          details: '07 Sep 2017, 06:57:59 AM'
        },

        {
          name: 'Bank Referance Number',
          details: 'jdbvhkjshsji'
        }
      ],

      collectionInfo: [
        {
          name: 'Payment Ids',
          details: 'pay_4s5d054dahasiskjdvsugda'
        }
      ],

      bankInfo: [
        {
          name: 'Vendor',
          details: 'ABC Limited'
        },

        {
          name: 'Account Number',
          details: '52468456655659'
        },

        {
          name: 'IFSC',
          details: 'SBI000055555'
        },

        {
          name: 'Branch',
          details: 'Kannur'
        }
      ],

      calculationInfo: [
        {
          name: 'Transaction Amount',
          details: '₹ 2000'
        },

        {
          name: 'Marketplace Commission',
          details: '10%'
        },

        {
          name: 'Commission Amount',
          details: '₹ 200'
        },

        {
          name: 'Vendor Settlement Amount',
          details: ' ₹ 1800'
        },

        {
          name: 'Transaction Fee',
          details: '₹ 3'
        }
      ]
    }
  }
}
</script>

<style></style>

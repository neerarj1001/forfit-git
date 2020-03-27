<template>
  <div>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left body-2" width="40%">Refund Id</th>
            <th class="text-left body-2" width="60%">
              refund_10a5s0d4g8g00h4a
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="refund in refundInfo" :key="refund.name">
            <td>{{ refund.name }}</td>
            <td>{{ refund.details }}</td>
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
  name: 'SideBarRefund',

  data() {
    return {
      refundInfo: [
        {
          name: 'Payment Id',
          details: 'pay_4s5d054dahasiugda'
        },
        {
          name: 'Created Time',
          details: '07 Sep 2017, 06:57:59 AM'
        },

        {
          name: 'Bank Referance Number',
          details: 'jdbvhkjshsji'
        },

        {
          name: 'Transaction Amount',
          details: '₹ 2000'
        },
        {
          name: 'Refund Amount',
          details: '₹ 1800'
        },
        {
          name: 'Refund Reason',
          details: 'daamged product'
        },
        {
          name: 'Dispute ID',
          details: 'disp_kjhascy7hbkjhd'
        }
      ]
    }
  }
}
</script>

<style></style>

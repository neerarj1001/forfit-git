<template>
  <div>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left body-2" width="40%">Payment Id</th>
            <th class="text-left body-2" width="60%">
              pay_4s5d054dahasiskjdvsugda
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

    <v-row class="mx-1">
      <v-col cols="12" md="12" sm="12">
        <!-- Refund Request Button -->
        <refund />
        <!-- //Refund Request Button// -->
      </v-col>
    </v-row>
  </div>
</template>

<script>
import refund from '@/components/modelBox/refund.vue'

export default {
  name: 'SideBar',

  components: { refund },

  data() {
    return {
      dialogRequest: false,

      orderInfo: [
        {
          name: 'Order Number',
          details: '4s5d054dahasiugda'
        },

        {
          name: 'Created Time',
          details: '07 Sep 2017, 06:57:59 AM'
        },

        {
          name: 'Customer Name',
          details: 'Ashin'
        },

        {
          name: 'Customer Mobile',
          details: '9876543210'
        },

        {
          name: 'Customer Email',
          details: 'abcabc@abc.abc'
        },
        {
          name: 'Vendor',
          details: 'ABC Limited'
        }
      ],

      calculationInfo: [
        {
          name: 'Amount',
          details: '₹ 2000'
        },
        {
          name: 'Commission Percentage',
          details: '2%'
        },
        {
          name: 'Commission Amount',
          details: '₹ 20'
        },
        {
          name: 'Transaction Charge',
          details: '₹ 3'
        },
        {
          name: 'Total Deduction',
          details: '₹ 23'
        },
        {
          name: 'Settlement Amount',
          details: ' ₹ 1977'
        }
      ]
    }
  }
}
</script>

<style></style>

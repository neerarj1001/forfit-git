<template>
  <div class="pt-12">
    <v-row align="center">
      <v-col cols="5" class="mx-auto">
        <v-card outlined class="elevation-3">
          <!-- Logo -->
          <Logo />
          <!-- //Logo// -->

          <v-card-title>It's time for feedback</v-card-title>

          <v-card-text class="text--primary">
            Congratulations on your order. It's time for feedback.
          </v-card-text>

          <!-- ------ Merchant ------- -->
          <v-card class="mx-auto" width="90%" outlined>
            <v-card-text class="text--primary">
              <v-row align="center">
                <v-col cols="3">
                  Merchant
                </v-col>

                <v-col cols="6">
                  ABC Limited
                </v-col>

                <v-col cols="3">
                  <!-- Rating -->
                  <rating />
                  <!-- Rating -->
                </v-col>

                <v-col cols="3">
                  Vendor
                </v-col>

                <v-col cols="6">
                  XYZ Services
                </v-col>

                <v-col cols="3">
                  <!-- Rating -->
                  <rating />
                  <!-- Rating -->
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
          <!-- ------ //Merchant// ------- -->

          <v-row class="pt-1">
            <!-- ------ Product ------- -->
            <v-col cols="6">
              <v-card class="mx-auto ml-9" outlined>
                <v-card-text class="text--primary">
                  <!-- ------------------------------------------------------------ -->

                  <table>
                    <tbody>
                      <tr>
                        <th width="50%" class="text-left"></th>
                        <th width="50%" class="text-left"></th>
                      </tr>
                      <tr v-for="item in productInfo" :key="item.info">
                        <td>{{ item.info }}</td>
                        <td>{{ item.details }}</td>
                      </tr>
                    </tbody>
                  </table>

                  <!-- ------------------------------------------------------------ -->
                </v-card-text>
              </v-card>
            </v-col>
            <!-- ------ //Product// ------- -->

            <!-- ------ Order ------- -->
            <v-col cols="6">
              <v-card class="mx-auto mr-9" outlined>
                <v-card-text class="text--primary">
                  <!-- ------------------------------------------------------------ -->

                  <table>
                    <tbody>
                      <tr>
                        <th width="70%" class="text-left"></th>
                        <th width="30%" class="text-left"></th>
                      </tr>
                      <tr v-for="item in orderInfo" :key="item.info">
                        <td>{{ item.info }}</td>
                        <td>{{ item.details }}</td>
                      </tr>
                    </tbody>
                  </table>

                  <!-- ------------------------------------------------------------ -->
                </v-card-text>
              </v-card>
            </v-col>
            <!-- ------ Order ------- -->
          </v-row>

          <v-card-actions class="mb-6">
            <!--  Feedback Component  -->
            <feedback />
            <!--  //Feedback Component//   -->

            <v-spacer></v-spacer>
            <!--  Dispute Button  -->
            <dispute />
            <!--  //Dispute Button//   -->
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

import rating from '~/components/forms/rating.vue'

import feedback from '~/components/modelBox/feedback.vue'
import dispute from '~/components/modelBox/dispute.vue'

export default {
  components: { Logo, rating, feedback, dispute },

  data() {
    return {
      orderInfo: [
        {
          info: 'Order Number',
          details: 'ORD785HJGJ4556'
        },

        {
          info: 'Order Date',
          details: '10-03-2020'
        },

        {
          info: 'Order Amount',
          details: '1200'
        },

        {
          info: 'Settlement Amount',
          details: '1000'
        },

        {
          info: 'Delivery Date',
          details: '10-03-2020'
        },

        {
          info: 'Delivery Confirmation Date',
          details: '10-03-2020'
        }
      ],

      productInfo: [
        {
          info: 'Product Name',
          details: 'Watch'
        },

        {
          info: 'Description',
          details: 'New Watch with black strap'
        }
      ]
    }
  }
}
</script>

<style></style>

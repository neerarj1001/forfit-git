<template>
  <div>
    <v-card>
      <v-tabs class="pt-6">
        <v-tab>
          <v-icon left>mdi-account</v-icon>
          Profile
        </v-tab>

        <v-tab>
          <v-icon left>mdi-key-variant</v-icon>
          API Key
        </v-tab>

        <!-- ---------- -->

        <v-tab-item>
          <v-card flat height="490" width="50%" class="mx-auto pt-6">
            <v-card-text>
              <v-card outlined>
                <v-simple-table fixed-header class="border">
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th class="text-left" width="40%"></th>
                        <th class="text-left" width="40%"></th>
                        <th class="text-left" width="20%"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Registred Name</td>
                        <td>Forfit Tecnologies Pvt Ltd</td>
                        <td>
                          <!-- ----- Profile Button ------ -->
                          <profile />
                          <!-- ----- //Profile Button// ------ -->
                        </td>
                      </tr>

                      <tr>
                        <td>Merchant Id</td>
                        <td>R_anHGAVGf5785VJHghfasgh</td>
                        <td>
                          <v-btn color="primary" text small :ripple="false">
                            Copy
                          </v-btn>
                        </td>
                      </tr>

                      <tr>
                        <td>GST Number</td>
                        <td>GHAJGAUY6757VHJA</td>
                        <td></td>
                      </tr>

                      <tr>
                        <td>Mobie Number</td>
                        <td>9876543210</td>
                        <td>
                          <!-- ----- Mobile Update ------ -->
                          <mobile />
                          <!-- ----- //Mobile Update// ------ -->
                        </td>
                      </tr>

                      <tr>
                        <td>Email Address</td>
                        <td>ashin@shkjdh.com</td>
                        <td>
                          <!-- ----- Email Update ------ -->
                          <email />
                          <!-- ----- //Email Update// ------ -->
                        </td>
                      </tr>

                      <tr>
                        <td>Password</td>
                        <td>*************</td>
                        <td>
                          <!-- ----- Password Update ------ -->
                          <password />
                          <!-- ----- //Password Update// ------ -->
                        </td>
                      </tr>
                      <tr></tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-card>
            </v-card-text>
          </v-card>
        </v-tab-item>

        <!-- ---------- -->

        <v-tab-item>
          <v-card flat height="490">
            <v-card-text class="pt-12">
              <!-- API Button -->

              <apiKey />

              <!-- //API Button// -->

              <!-- API Table -->
              <apiTable />
              <!-- //API Table// -->
            </v-card-text>
          </v-card>
        </v-tab-item>

        <!-- ---------- -->
      </v-tabs>
    </v-card>
  </div>
</template>

<script>
import profile from '~/components/modelBox/profile.vue'
import mobile from '~/components/modelBox/updateMobile.vue'
import email from '~/components/modelBox/updateEmail.vue'
import password from '~/components/modelBox/updatePassword.vue'

import apiTable from '~/components/datatable/apiKey.vue'
import apiKey from '~/components/modelBox/apiKey.vue'

export default {
  layout: 'dashboard',

  components: {
    profile,
    mobile,
    email,
    password,

    apiKey,
    apiTable
  }
}
</script>

<style></style>

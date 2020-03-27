<template>
  <div>
    <v-dialog v-model="profile" persistent max-width="50%">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" text small :ripple="false" v-on="on">
          Profile
        </v-btn>
      </template>

      <v-card outlined class="mx-auto">
        <v-toolbar>
          <v-toolbar-title>My Profile</v-toolbar-title>

          <v-spacer></v-spacer>
          <v-btn icon @click="profile = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>

        <v-tabs vertical>
          <v-tab class="pl-0"> Business Info</v-tab>

          <v-tab class="pl-8"> Registration Info</v-tab>

          <v-tab class="pl-0"> Contact Info </v-tab>

          <v-tab class="pl-8"> Contact Address </v-tab>

          <v-tab class="pl-0"> Bank Details </v-tab>

          <v-tab class="pl-12"> Business Documents</v-tab>

          <v-tab class="pl-12"> Personal Documents</v-tab>

          <v-tab class="pl-6"> Bank Documents</v-tab>

          <v-tab-item>
            <v-card flat height="100%">
              <v-card-text>
                <!-- ---------------------- -->

                <basicInfo />

                <!-- ---------------------- -->
              </v-card-text>
            </v-card>
          </v-tab-item>

          <v-tab-item>
            <v-card flat height="590">
              <v-card-text>
                <!-- ---------------------- -->

                <registrationInfo />

                <!-- ---------------------- -->
              </v-card-text>
            </v-card>
          </v-tab-item>

          <v-tab-item>
            <v-card flat height="590">
              <v-card-text>
                <!-- ---------------------- -->

                <contactInfo />

                <!-- ---------------------- -->
              </v-card-text>
            </v-card>
          </v-tab-item>

          <v-tab-item>
            <v-card flat height="590">
              <v-card-text>
                <!-- ---------------------- -->

                <contactAddress />

                <!-- ---------------------- -->
              </v-card-text>
            </v-card>
          </v-tab-item>

          <v-tab-item>
            <v-card flat height="590">
              <v-card-text>
                <!-- ---------------------- -->

                <bankInfo />

                <!-- ---------------------- -->
              </v-card-text>
            </v-card>
          </v-tab-item>

          <v-tab-item>
            <v-card flat height="590">
              <v-card-text>
                <!-- ---------------------- -->

                <businessDocs />

                <!-- ---------------------- -->
              </v-card-text>
            </v-card>
          </v-tab-item>

          <v-tab-item>
            <v-card flat height="590">
              <v-card-text>
                <!-- ---------------------- -->

                <personalDocs />

                <!-- ---------------------- -->
              </v-card-text>
            </v-card>
          </v-tab-item>

          <v-tab-item>
            <v-card flat height="590">
              <v-card-text>
                <!-- ---------------------- -->

                <bankDocs />

                <!-- ---------------------- -->
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
        <v-card-actions class="pb-6 pr-6">
          <v-spacer></v-spacer>

          <!-- Submit Button -->
          <modelConfirm />
          <!-- //Submit Button// -->
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import basicInfo from '~/components/forms/profile/1-basicInfo.vue'
import registrationInfo from '~/components/forms/profile/2-registrationInfo.vue'
import contactInfo from '~/components/forms/profile/3-contactInfo.vue'
import contactAddress from '~/components/forms/profile/4-contactAddress.vue'
import bankInfo from '~/components/forms/profile/5-bankInfo.vue'
import businessDocs from '~/components/forms/profile/6-businessDocs.vue'
import personalDocs from '~/components/forms/profile/7-personalDocs.vue'
import bankDocs from '~/components/forms/profile/8-bankDocs.vue'

import modelConfirm from '~/components/modelBox/confirm.vue'

export default {
  name: 'Profile',

  components: {
    basicInfo,
    registrationInfo,
    contactInfo,
    contactAddress,
    bankInfo,
    businessDocs,
    personalDocs,
    bankDocs,

    modelConfirm
  },

  data() {
    return {
      profile: false
    }
  }
}
</script>

<style></style>

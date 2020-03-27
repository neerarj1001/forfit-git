<template>
  <div>
    <v-dialog v-model="modalVendor" persistent width="800">
      <template v-slot:activator="{ on }">
        <v-btn class="ma-2" dark x-large color="primary" v-on="on">
          <v-icon left>mdi-account-plus</v-icon> Add Vendor
        </v-btn>
      </template>

      <v-card outlined>
        <v-card-title>
          Create Vendor

          <v-spacer></v-spacer>

          <v-btn icon @click="modalVendor = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text>
          <v-row>
            <v-col>
              <v-card flat>
                <v-card-text>
                  <v-text-field
                    v-model="name"
                    outlined
                    prepend-inner-icon="mdi-account"
                    label="Business Name"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="mobileNo"
                    label="Mobile Number"
                    type="text"
                    prepend-inner-icon="mdi-cellphone-iphone"
                    required
                    outlined
                  ></v-text-field>

                  <v-text-field
                    v-model="email"
                    label="Email"
                    type="text"
                    prepend-inner-icon="mdi-email"
                    required
                    outlined
                  ></v-text-field>

                  <v-text-field
                    v-model="pan"
                    label="Business PAN"
                    type="text"
                    prepend-inner-icon="mdi-credit-card"
                    required
                    outlined
                  ></v-text-field>

                  <v-text-field
                    v-model="commission"
                    outlined
                    label="Maximum Commission"
                    prepend-inner-icon="mdi-percent"
                    required
                  ></v-text-field>
                </v-card-text>
              </v-card>
            </v-col>

            <v-col>
              <v-card flat>
                <v-card-text>
                  <v-text-field
                    v-model="accNo"
                    outlined
                    label="Beneficiary Name"
                    prepend-inner-icon="mdi-account-check"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="accNo"
                    outlined
                    label="Bank Account Number"
                    prepend-inner-icon="mdi-bank"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="accIFSC"
                    outlined
                    label="IFSC"
                    prepend-inner-icon="mdi-textbox"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="accBranch"
                    outlined
                    label="Branch"
                    prepend-inner-icon="mdi-home-map-marker"
                    required
                  ></v-text-field>

                  <v-file-input
                    prepend-icon=""
                    prepend-inner-icon="mdi-upload"
                    outlined
                    label="Cheque/ Passbook"
                    persistent-hint
                    hint="The maximum file size is 1 MB"
                  ></v-file-input>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text color="error lighten-1" @click="modalVendor = false">
            Cancel
          </v-btn>

          <!-- Submit Button -->
          <modelConfirm />
          <!-- //Submit Button// -->
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import modelConfirm from '~/components/modelBox/confirm.vue'

export default {
  name: 'Payer',
  components: {
    modelConfirm
  },

  data() {
    return {
      modalVendor: false
    }
  }
}
</script>

<style></style>

<template>
  <div>
    <v-col cols="12" xs="10" sm="10" md="10" lg="10" xl="10" class="mx-auto">
      <v-card width="350" class="mx-auto" outlined>
        <!-- Logo -->
        <Logo />
        <!-- //Logo// -->

        <v-card-text>
          <v-card outlined>
            <v-card-text>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                  v-model="name"
                  label="Name"
                  dense
                  prepend-icon="mdi-account"
                  clear-icon="mdi-pencil"
                  clearable
                  required
                  :rules="nameRules"
                >
                </v-text-field>

                <v-text-field
                  v-model="mobile"
                  label="Mobile"
                  dense
                  prepend-icon="mdi-phone"
                  clear-icon="mdi-pencil"
                  clearable
                  required
                  prefix="+91"
                  :rules="mobileRules"
                >
                </v-text-field>

                <v-text-field
                  v-model="email"
                  label="Email"
                  dense
                  prepend-icon="mdi-email-outline"
                  clear-icon="mdi-pencil"
                  clearable
                  required
                  :rules="emailRules"
                >
                </v-text-field>
              </v-form>
            </v-card-text>
          </v-card>
        </v-card-text>

        <v-card-text>
          <v-card outlined>
            <v-card-text>
              <v-text-field
                label="Merchant"
                dense
                readonly
                value="Forfit"
                prepend-icon="mdi-bank"
              ></v-text-field>

              <v-text-field
                label="Amount"
                dense
                readonly
                value="100"
                prepend-icon="mdi-currency-inr"
              ></v-text-field>

              <v-text-field
                label="Order Number"
                dense
                readonly
                value="ahn2H3aJ3J45sh32347da"
                prepend-icon="mdi-file-document-box"
              ></v-text-field>
            </v-card-text>
          </v-card>
        </v-card-text>

        <v-card-actions>
          <v-btn class="ma-2" outlined color="primary darken-1" large
            >Cancel</v-btn
          >

          <v-spacer></v-spacer>

          <v-btn class="ma-2" color="primary lighten-1" depressed dark large
            >Pay</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-col>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: { Logo },

  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      (v) => !!v || 'Name is required',
      (v) => (v && v.length <= 10) || 'Name must be less than 20 characters'
    ],

    mobile: '',
    mobileRules: [
      (v) => !!v || 'Mobile number is required',
      (v) => (v && v.length <= 10) || 'Mobile number must be valid'
      // Add mobile Validation
    ],

    email: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ],

    methods: {
      validate() {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
      }
    }
  })
}
</script>

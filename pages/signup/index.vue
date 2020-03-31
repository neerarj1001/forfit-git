<template>
  <div class="pt-12">
    <v-row align="center" justify="center">
      <v-col cols="10" sm="6" md="5" lg="4" xl="3">
        <div class="text-center pt-6 pb-6">
          <!-- logo component -->

          <Logo />
          <!-- logo component -->
        </div>

        <v-card outlined class="elevation-3">
          <v-card-title class="grey lighten-2" primary-title>
            Signup Here..!!!
          </v-card-title>

          <v-card-text>
            <br />

            <!-- Email -->
            <v-text-field
              v-model="email"
              label="Email"
              type="text"
              prepend-inner-icon="mdi-email"
              required
              outlined
            ></v-text-field>
            <!-- //Email// -->

            <!-- Password -->
            <v-text-field
              label="Password"
              name="password"
              prepend-inner-icon="mdi-lock-open"
              type="password"
              outlined
            ></v-text-field>
            <!-- //Password// -->

            <!-- Confirm Password -->
            <v-text-field
              label="Password (Confirm)"
              name="password"
              prepend-inner-icon="mdi-lock-open"
              type="password"
              outlined
            ></v-text-field>
            <!-- //Confirm Password// -->

            <!-- --------Check Box-------------------------- -->

            <v-checkbox v-model="terms" color="primary">
              <template v-slot:label>
                <div>
                  I agree to the
                  <template>
                    <a target="_blank" href="http://forfit.in/terms"
                      >Terms of service</a
                    >
                  </template>
                  and
                  <template>
                    <a target="_blank" href="http://forfit.in/privacy"
                      >Privacy policy</a
                    >
                  </template>
                </div>
              </template>
            </v-checkbox>

            <!-- --------//Check Box//-------------------------- -->

            <!-- -------- reCAPTCHA -------------------------- -->

            <!-- -------- reCAPTCHA -------------------------- -->
          </v-card-text>

          <v-card-actions>
            <div class="flex-grow-1"></div>

            <v-btn text color="error lighten-1">
              Cancel
            </v-btn>

            <v-btn
              color="primary"
              text
              href="/dashboard"
              :disabled="!terms"
              @click="signup"
            >
              Sign Up
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data: () => ({
    terms: '',
    email:'',
    password: '',
    confirmPassword:''
  })
}
</script>

<style></style>

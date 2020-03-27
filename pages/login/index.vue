<template>
  <div class="pt-12 mt-12">
    <v-row align="center" justify="center">
      <v-col cols="10" sm="6" md="5" lg="4" xl="3">
        <div class="text-center pt-6">
          <!-- logo component -->
          <Logo />
          <!-- logo component -->
        </div>

        <!--------------------->

        <v-card outlined class="elevation-3">
          <v-card-title class="grey lighten-2" primary-title>
            Login into account
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

            <v-row>
              <v-btn
                text
                class="ma-2 caption"
                color="primary"
                small
                href="/forgotPassword"
                v-on="on"
                >Forgot Password</v-btn
              >
              <div class="flex-grow-1"></div>

              <v-btn
                text
                class="ma-2 subtitle-2"
                color="primary"
                small
                href="signup"
                v-on="on"
                >Sign Up</v-btn
              >
            </v-row>
          </v-card-text>

          <v-card-actions>
            <div class="flex-grow-1"></div>

            <v-btn text color="error lighten-1">
              Clear
            </v-btn>

            <v-btn class="ma-2" text color="primary" href="dashboard">
              Login
            </v-btn>
          </v-card-actions>
        </v-card>

        <!--------------------->
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: { Logo }
}
</script>

<template>
  <div class="pt-12 mt-12">
    <v-row align="center" justify="center">
      <v-col cols="10" sm="6" md="5" lg="4" xl="3">
        <div class="text-center pt-6 pb-6">
          <!-- logo component -->
          <Logo />
          <!-- logo component -->
        </div>

        <v-card outlined class="elevation-3">
          <v-card-title class="grey lighten-2">
            Update password
          </v-card-title>

          <v-card-text>
            <br />

            <!-- Password -->
            <v-text-field
              v-model="password"
              label="Password"
              name="password"
              prepend-inner-icon="mdi-lock-open"
              type="password"
              :rules="genericRules.passwordRule"
              outlined
            ></v-text-field>
            <!-- //Password// -->

            <!-- Confirm Password -->
            <v-text-field
            v-model="confirmPassword"
              label="Password (Confirm)"
              name="confirmPassword"
              prepend-inner-icon="mdi-lock-open"
              type="password"
              :rules = "confirmPasswordRule"
              outlined
            ></v-text-field>
            <!-- //Confirm Password// -->
          </v-card-text>

          <v-card-actions>
            <div class="flex-grow-1"></div>

            <v-btn text color="error lighten-1">
              Cancel
            </v-btn>

            <v-btn class="ma-2" color="primary" text>
              Reset
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import validation from '../../mixins/validation'

export default {
  data (){
      return {
        password:'',
        confirmPassword:''

      }
   },
  mixins:[ validation ],

  components: {
    Logo
  }
}
</script>

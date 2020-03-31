<template>
  <div class="pt-12 mt-12">
    <v-row align="center" justify="center" class="pt-12">
      <v-col cols="10" sm="6" md="5" lg="4" xl="3">
        <div class="text-center pt-6 pb-6">
          <!-- logo component -->

          <Logo />
          <!-- logo component -->
        </div>

        <v-card outlined class="elevation-3">
          <v-card-title class="grey lighten-2" primary-title>
            Reset Passowrd
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
              :rules = "genericRules.emailRules"
            >
            </v-text-field>
            <!-- //Email// -->
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn text color="error lighten-1">
              Cancel
            </v-btn>

            <v-btn color="primary" text>Submit</v-btn>
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
        email:''
      }
   },
  mixins:[ validation ],

  components: { Logo }
}
</script>

<style></style>
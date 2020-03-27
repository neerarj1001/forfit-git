<template>
  <div>
    <v-col cols="12" xs="10" sm="10" md="10" lg="10" xl="10" class="mx-auto">
      <v-card width="350" class="mx-auto" outlined>
        <v-row class="pt-4" align="center" justify="center">
          <!-- Logo -->
          <Logo />
          <!-- //Logo// -->
        </v-row>

        <v-row class="pt-4" align="center" justify="center">
          <img width="80%" src="~/static/failed.png" />
        </v-row>
        <br />

        <v-card-text>
          <h2>Something went wrong ..!</h2>
          <br />
          <h4>The transaction failed due to some issues. Please try again.</h4>
        </v-card-text>

        <v-card-actions>
          <v-btn color="primary" depressed dark block>Retry</v-btn>
        </v-card-actions>

        <v-card-actions class="pb-6">
          <v-btn color="error" outlined depressed dark block>Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: { Logo }
}
</script>

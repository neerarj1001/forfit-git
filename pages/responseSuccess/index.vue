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
          <img height="80%" src="~/static/success.png" />
        </v-row>

        <v-card-text>
          <h1>Congratulations,</h1>
          <br />
          <h3>You have successfully completed the transaction</h3>
          <br />
          <h3>You will be redirected within 10 seconds</h3>
        </v-card-text>
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

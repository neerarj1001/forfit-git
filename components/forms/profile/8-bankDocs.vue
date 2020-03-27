<template>
  <div>
    <!-- -----Bank----- -->
    <v-row>
      <v-col cols="12" sm="1" md="1"></v-col>

      <v-col cols="12" sm="6" md="3">
        <label>Passbook/ Cheque</label>
      </v-col>

      <v-col cols="12" sm="5" md="4">
        <v-file-input
          ref="file"
          label="Bank Document"
          accept=".jpg, .jpeg, .png, .pdf"
          required
          outlined
          dense
          @change="handleFileUpload"
        ></v-file-input>
      </v-col>

      <v-col cols="12" sm="1" md="1">
        <v-btn
          :loading="loading5"
          :disabled="loading5"
          color="primary"
          icon
          large
          @click="insertBankdoc"
        >
          <v-icon>mdi-cloud-upload</v-icon>
        </v-btn>
      </v-col>

      <v-col cols="12" sm="1" md="1">
        <v-btn
          color="blue-grey"
          class="white--text"
          icon
          large
          @click="getBankdoc"
        >
          <v-icon>mdi-file-pdf</v-icon>
        </v-btn>
      </v-col>

      <v-col cols="12" sm="1" md="1"></v-col>
    </v-row>
    <!-- -----//Bank//----- -->
  </div>
</template>

<script>
export default {
  data: () => ({
    name: 'bankDocs',

    loading5: false,
    loader: null,
    file: ''
  }),

  watch: {
    loader() {
      const l = this.loader
      this[l] = !this[l]

      setTimeout(() => (this[l] = false), 3000)

      this.loader = null
    }
  }
}
</script>

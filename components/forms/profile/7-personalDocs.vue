<template>
  <div>
    <!-- -----Photo----- -->
    <v-row>
      <v-col cols="12" sm="1" md="1"></v-col>
      <v-col cols="12" sm="6" md="3">
        <label>Photo</label>
      </v-col>

      <v-col cols="12" sm="6" md="4">
        <v-file-input
          label="Photo"
          accept=".jpg, .jpeg, .png, .pdf"
          required
          outlined
          dense
        ></v-file-input>
      </v-col>

      <v-col cols="12" sm="1" md="1">
        <v-btn
          :loading="loading5"
          :disabled="loading5"
          color="primary"
          icon
          large
          @click="loader = 'loading5'"
        >
          <v-icon>mdi-cloud-upload</v-icon>
        </v-btn>
      </v-col>

      <v-col cols="12" sm="1" md="1">
        <v-btn color="blue-grey" class="white--text" icon large>
          <v-icon>mdi-file-pdf</v-icon>
        </v-btn>
      </v-col>

      <v-col cols="12" sm="1" md="1"></v-col>
    </v-row>
    <!-- -----//Photo//----->

    <!-- -----Aadhaar----- -->
    <v-row>
      <v-col cols="12" sm="1" md="1"></v-col>
      <v-col cols="12" sm="6" md="3">
        <label>Aadhaar</label>
      </v-col>

      <v-col cols="12" sm="5" md="4">
        <v-file-input
          label="Aadhaar Document"
          accept=".jpg, .jpeg, .png, .pdf"
          required
          outlined
          dense
        ></v-file-input>
      </v-col>

      <v-col cols="12" sm="1" md="1">
        <v-btn
          :loading="loading5"
          :disabled="loading5"
          color="primary"
          icon
          large
          @click="loader = 'loading5'"
        >
          <v-icon>mdi-cloud-upload</v-icon>
        </v-btn>
      </v-col>

      <v-col cols="12" sm="1" md="1">
        <v-btn color="blue-grey" class="white--text" icon large>
          <v-icon>mdi-file-pdf</v-icon>
        </v-btn>
      </v-col>

      <v-col cols="12" sm="1" md="1"></v-col>
    </v-row>
    <!-- -----//Aadhaar//----->

    <!-- -----PAN----- -->
    <v-row>
      <v-col cols="12" sm="1" md="1"></v-col>
      <v-col cols="12" sm="6" md="3">
        <label> PAN</label>
      </v-col>

      <v-col cols="12" sm="5" md="4">
        <v-file-input
          label="PAN Document"
          accept=".jpg, .jpeg, .png, .pdf"
          required
          outlined
          dense
        ></v-file-input>
      </v-col>

      <v-col cols="12" sm="1" md="1">
        <v-btn
          :loading="loading5"
          :disabled="loading5"
          color="primary"
          icon
          large
          @click="loader = 'loading5'"
        >
          <v-icon>mdi-cloud-upload</v-icon>
        </v-btn>
      </v-col>

      <v-col cols="12" sm="1" md="1">
        <v-btn color="blue-grey" class="white--text" icon large>
          <v-icon>mdi-file-pdf</v-icon>
        </v-btn>
      </v-col>

      <v-col cols="12" sm="1" md="1"></v-col>
    </v-row>
    <!-- -----//PAN//----- -->
  </div>
</template>

<script>
export default {
  name: 'PersonalDocs',

  data: () => ({
    loading5: false,
    loader: null
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

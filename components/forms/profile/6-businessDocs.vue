<template>
  <div>
    <!-- -----Registration Certificate----- -->
    <v-row>
      <v-col cols="12" sm="1" md="1"></v-col>

      <v-col cols="12" sm="6" md="4">
        <label>Registration Certificate</label>
      </v-col>

      <v-col cols="12" sm="6" md="4">
        <v-file-input
          label="Registration Certificate"
          accept=".jpg, .jpeg, .png, .pdf"
          outlined
          dense
          v-on="cin"
        ></v-file-input>
      </v-col>

      <v-col cols="12" sm="1" md="1">
        <v-btn
          :loading="loading5"
          :disabled="loading5"
          color="primary"
          icon
          large
          @click="insertCin"
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
          @click="getCinDoc"
        >
          <v-icon>mdi-file-pdf</v-icon>
        </v-btn>
      </v-col>

      <v-col cols="12" sm="1" md="1"></v-col>
    </v-row>
    <!-- -----//Registration Certificate//----->

    <!-- -----Partnership Deed----- -->
    <v-row>
      <v-col cols="12" sm="1" md="1"></v-col>

      <v-col cols="12" sm="6" md="4">
        <label>Partnership Deed</label>
      </v-col>

      <v-col cols="12" sm="6" md="4">
        <v-file-input
          label="Partnership Deed"
          accept=".jpg, .jpeg, .png, .pdf"
          outlined
          dense
          v-on="gstlicence"
        ></v-file-input>
      </v-col>

      <v-col cols="12" sm="1" md="1">
        <v-btn
          :loading="loading5"
          :disabled="loading5"
          color="primary"
          icon
          large
          @click="insertGstLicence"
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
          @click="getGstLicenceDoc"
        >
          <v-icon>mdi-file-pdf</v-icon>
        </v-btn>
      </v-col>

      <v-col cols="12" sm="1" md="1"></v-col>
    </v-row>
    <!-- -----//Partnership Deed//----->

    <!-- -----Business PAN----- -->
    <v-row>
      <v-col cols="12" sm="1" md="1"></v-col>

      <v-col cols="12" sm="6" md="4">
        <label> Business PAN</label>
      </v-col>

      <v-col cols="12" sm="6" md="4">
        <v-file-input
          label="Business PAN"
          accept=".jpg, .jpeg, .png, .pdf"
          outlined
          dense
          v-on="pan"
        ></v-file-input>
      </v-col>

      <v-col cols="12" sm="1" md="1">
        <v-btn
          :loading="loading5"
          :disabled="loading5"
          color="primary"
          icon
          large
          @click="insertPan"
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
          @click="getPanDoc"
        >
          <v-icon>mdi-file-pdf</v-icon>
        </v-btn>
      </v-col>

      <v-col cols="12" sm="1" md="1"></v-col>
    </v-row>
    <!-- -----//Business PAN//----->

    <!-- -----Licence----- -->
    <v-row>
      <v-col cols="12" sm="1" md="1"></v-col>

      <v-col cols="12" sm="6" md="4">
        <label>Local Body Licence</label>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <v-file-input
          label="Licence"
          accept=".jpg, .jpeg, .png, .pdf"
          outlined
          dense
          v-on="licence"
        ></v-file-input>
      </v-col>

      <v-col cols="12" sm="1" md="1">
        <v-btn
          :loading="loading5"
          :disabled="loading5"
          color="primary"
          icon
          large
          @click="insertLicence"
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
          @click="getLicenceDoc"
        >
          <v-icon>mdi-file-pdf</v-icon>
        </v-btn>
      </v-col>

      <v-col cols="12" sm="1" md="1"></v-col>
    </v-row>
    <!-- -----//Licence//----->

    <!-- -----GST----- -->
    <v-row>
      <v-col cols="12" sm="1" md="1"></v-col>

      <v-col cols="12" sm="6" md="4">
        <label>GST Certificate</label>
      </v-col>

      <v-col cols="12" sm="6" md="4">
        <v-file-input
          label="GST Certificate"
          accept=".jpg, .jpeg, .png, .pdf"
          outlined
          dense
          v-on="gstlicence"
        ></v-file-input>
      </v-col>

      <v-col cols="12" sm="1" md="1">
        <v-btn
          :loading="loading5"
          :disabled="loading5"
          color="primary"
          icon
          large
          @click="insertGstLicence"
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
          @click="getGstLicenceDoc"
        >
          <v-icon>mdi-file-pdf</v-icon>
        </v-btn>
      </v-col>

      <v-col cols="12" sm="1" md="1"></v-col>
    </v-row>
    <!-- -----//GST//----->

    <!-- -----Resolution----- -->
    <v-row>
      <v-col cols="12" sm="1" md="1"></v-col>

      <v-col cols="12" sm="6" md="4">
        <label>Board Resolution/ Authorisation Letter</label>
      </v-col>

      <v-col cols="12" sm="6" md="4">
        <v-file-input
          label="Board Resolution/ Authorisation Letter"
          accept=".jpg, .jpeg, .png, .pdf"
          outlined
          dense
          v-on="gstlicence"
        ></v-file-input>
      </v-col>

      <v-col cols="12" sm="1" md="1">
        <v-btn
          :loading="loading5"
          :disabled="loading5"
          color="primary"
          icon
          large
          @click="insertGstLicence"
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
          @click="getGstLicenceDoc"
        >
          <v-icon>mdi-file-pdf</v-icon>
        </v-btn>
      </v-col>

      <v-col cols="12" sm="1" md="1"></v-col>
    </v-row>
    <!-- -----//Resolution//----->
  </div>
</template>

<script>
export default {
  name: 'BusinessDocs',

  data: () => ({
    loading5: false,
    loader: null,
    cin: '',
    pan: '',
    licence: '',
    gstlicence: ''
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

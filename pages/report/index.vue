<template>
  <div>
    <v-card>
      <v-tabs class="pt-6">
        <v-tab>Collection</v-tab>
        <v-tab>Settlements</v-tab>
        <v-tab>Monthly Invoice</v-tab>

        <!-- -------------- Collection ---------------- -->

        <v-tab-item>
          <v-card flat height="490">
            <v-card-text class="pl-12">
              <!-- ---------- -->

              <p>
                This report provides details of all payments that were created
                in the selected time range. Details include payment ID, status,
                method, issuer name, date, amount, and others.
              </p>

              <v-row>
                <v-col class="d-flex" cols="12" sm="6" md="4">
                  <!-- ---------- -->
                  <period />
                  <!-- ---------- -->
                </v-col>

                <v-col class="d-flex" cols="12" sm="6" md="4">
                  <!-- ---------- -->
                  <month />
                  <!-- ---------- -->
                </v-col>
              </v-row>

              <v-row>
                <v-col class="d-flex" cols="12" sm="6" md="4">
                  <!-- ---------- -->
                  <date />
                  <!-- ---------- -->
                </v-col>

                <v-col class="d-flex" cols="12" sm="6" md="4">
                  <!-- ---------- -->
                  <date />
                  <!-- ---------- -->
                </v-col>
              </v-row>

              <v-row>
                <v-col class="d-flex" cols="12" sm="6" md="4">
                  <!-- ---------- -->
                  <fileType />
                  <!-- ---------- -->
                </v-col>

                <v-col class="d-flex" cols="12" sm="6" md="4">
                  <!-- ---------- -->
                  <v-btn outlined large color="primary"> Generate </v-btn>
                  <!-- ---------- -->
                </v-col>
              </v-row>

              <!-- --------------  ------------ -->
            </v-card-text>
          </v-card>
        </v-tab-item>

        <!-- -------------- //Collection// ---------------- -->

        <!-- -------------- Settlement ---------------- -->

        <v-tab-item>
          <v-card flat height="490">
            <v-card-text class="pl-12">
              <!-- ---------- -->

              <p>
                This report provides details of all payments that were created
                in the selected time range. Details include payment ID, status,
                method, issuer name, date, amount, and others.
              </p>

              <v-row>
                <v-col class="d-flex" cols="12" sm="6" md="4">
                  <!-- ---------- -->
                  <period />
                  <!-- ---------- -->
                </v-col>

                <v-col class="d-flex" cols="12" sm="6" md="4">
                  <!-- ---------- -->
                  <month />
                  <!-- ---------- -->
                </v-col>
              </v-row>

              <v-row>
                <v-col class="d-flex" cols="12" sm="6" md="4">
                  <!-- ---------- -->
                  <date />
                  <!-- ---------- -->
                </v-col>

                <v-col class="d-flex" cols="12" sm="6" md="4">
                  <!-- ---------- -->
                  <date />
                  <!-- ---------- -->
                </v-col>
              </v-row>

              <v-row>
                <v-col class="d-flex" cols="12" sm="6" md="4">
                  <!-- ---------- -->
                  <fileType />
                  <!-- ---------- -->
                </v-col>

                <v-col class="d-flex" cols="12" sm="6" md="4">
                  <!-- ---------- -->
                  <v-btn outlined large color="primary"> Generate </v-btn>
                  <!-- ---------- -->
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-tab-item>

        <!-- -------------- //Settlement// ---------------- -->

        <!-- -------------- Invoice ---------------- -->

        <v-tab-item>
          <v-card flat height="490">
            <v-card-text class="pl-12">
              <p>
                This report provides details of all payments that were created
                in the selected time range. Details include payment ID, status,
                method, issuer name, date, amount, and others.
              </p>
              <v-row>
                <v-col class="d-flex" cols="12" sm="6" md="4">
                  <!-- ---------- -->
                  <month />
                  <!-- ---------- -->
                </v-col>
              </v-row>

              <v-row>
                <v-col class="d-flex" cols="12" sm="6" md="4">
                  <!-- ---------- -->
                  <fileType />
                  <!-- ---------- -->
                </v-col>
              </v-row>

              <v-row>
                <v-col class="d-flex" cols="12" sm="6" md="4">
                  <!-- ---------- -->
                  <v-btn outlined large color="primary"> Generate </v-btn>
                  <!-- ---------- -->
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-tab-item>

        <!-- -------------- //Invoice// ---------------- -->
      </v-tabs>
    </v-card>
  </div>
</template>

<script>
import period from '~/components/forms/period.vue'

import month from '~/components/forms/month.vue'
import date from '~/components/forms/date.vue'

import fileType from '~/components/forms/fileType.vue'

export default {
  layout: 'dashboard',

  components: {
    period,
    month,
    date,

    fileType
  }
}
</script>

<style></style>

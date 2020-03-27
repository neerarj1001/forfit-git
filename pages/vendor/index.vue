<template>
  <div>
    <v-row justify="center">
      <v-col cols="12" cols-md="12" cols-sm="12">
        <v-card min-height="300">
          <v-card-title>
            Vendor
            <div class="flex-grow-1"></div>
            <div class="flex-grow-1"></div>
            <div class="flex-grow-1"></div>
            <div class="flex-grow-1"></div>

            <!-- Search Deatails  -->
            <search />
            <!-- //Search Deatails//  -->

            <!-- Create Vendor -->
            <addVendor />
            <!-- Create Vendor -->
          </v-card-title>

          <!-- Transaction Table -->
          <vendors />
          <!-- //Transaction Table// -->
        </v-card>
        <div class="text-center pt-2">
          <!-- Pagination -->
          <pagination />
          <!-- Pagination -->
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import vendors from "~/components/datatable/vendor.vue";

import addVendor from "~/components/modelBox/vendor.vue";

import search from "~/components/forms/search.vue";
import pagination from "~/components/etc/pagination.vue";

export default {
  layout: "dashboard",

  components: { vendors, addVendor, search, pagination },

  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<style></style>

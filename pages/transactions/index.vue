<template>
  <div>
    <v-row justify="center">
      <v-col cols="12" cols-md="12" cols-sm="12">
        <v-card min-height="300">
          <v-card-title>
            Transactions
            <div class="flex-grow-1"></div>
            <div class="flex-grow-1"></div>
            <div class="flex-grow-1"></div>
            <div class="flex-grow-1"></div>

            <!-- Search Deatails  -->
            <search />
            <!-- //Search Deatails//  -->
          </v-card-title>

          <!-- Transaction Table -->
          <transaction />
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
import transaction from '~/components/datatable/transactions.vue'
import search from '~/components/forms/search.vue'
import pagination from '~/components/etc/pagination.vue'

export default {
  layout: 'dashboard',

  components: { transaction, search, pagination }
}
</script>

<style></style>

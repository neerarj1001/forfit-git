<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="vendors"
      :page.sync="page"
      :items-per-page="itemsPerPage"
      hide-default-footer
      :search="search"
      @page-count="pageCount = $event"
    >
      <!-- status -->
      <template v-slot:item.status="{ item }">
        <v-chip :id="chip" :color="getColor(item.status)" outlined label small>
          {{ item.status }}
        </v-chip>
      </template>

      <!-- Action -->

      <template v-slot:item.action="{ item }">
        <v-btn text icon>
          <v-icon @click.stop="drawer = !drawer">mdi-fullscreen</v-icon>
        </v-btn>
      </template>
    </v-data-table>

    <!-- SideBar -->

    <v-navigation-drawer
      v-model="drawer"
      right
      temporary
      hide-overlay
      app
      width="22%"
    >
      <sideBar />
    </v-navigation-drawer>

    <!-- //SideBar// -->
  </div>
</template>

<script>
import sideBar from '~/components/modelBox/sideBarVendor.vue'

export default {
  name: 'Vendors',

  components: { sideBar },

  data() {
    return {
      drawer: null,

      headers: [
        {
          text: 'Vendor Id',
          align: 'left',
          sortable: false,
          value: 'vendorId'
        },
        { text: 'Referance Id', value: 'referanceId' },
        { text: 'Name', value: 'name' },
        { text: 'Max Commission', value: 'maxCommission' },
        { text: 'Created At', value: 'created' },
        { text: 'Status', value: 'status' },
        { text: 'Action', value: 'action', sortable: false }
      ],
      vendors: [
        {
          vendorId: 'vendor_10a5s0d4g',
          referanceId: 'OR14521546',
          name: 'Ashin Limited',
          maxCommission: '10',
          created: '07 Sep 2017, 06:57:59 AM',
          amount: '1200.00',
          status: 'Active'
        },
        {
          vendorId: 'vendor_10a5s0d4g',
          referanceId: 'OR14521546',
          name: 'Ashin companies Limited',
          maxCommission: '10',
          created: '07 Sep 2017, 06:57:59 AM',
          amount: '1200.00',
          status: 'Deactive'
        }
      ]
    }
  },

  methods: {
    getColor(status) {
      if (status === 'Active') return 'green'
      else if (status === 'Inactive') return 'red'
      else if (status === 'Deactive') return 'dark'
      else return 'red'
    }
  }
}
</script>

<style></style>

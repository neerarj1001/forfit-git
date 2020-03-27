<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="settlementitem"
      :page.sync="page"
      :items-per-page="itemsPerPage"
      hide-default-footer
      :search="search"
      class="mytable"
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
      <sideBarRefund />
    </v-navigation-drawer>

    <!-- //SideBar// -->
  </div>
</template>

<script>
import sideBarRefund from '~/components/modelBox/sideBarSettlement.vue'

export default {
  components: { sideBarRefund },

  data() {
    return {
      drawer: null,

      headers: [
        {
          text: 'Settlement Id',
          align: 'left',
          sortable: false,
          value: 'settlement'
        },
        { text: 'Payment Id', value: 'payment' },
        { text: 'Amount', value: 'amount' },
        { text: 'Charges', value: 'charges' },
        { text: 'Created At', value: 'created' },
        { text: 'Status', value: 'status' },
        { text: 'Action', value: 'action', sortable: false }
      ],
      settlementitem: [
        {
          settlement: 'settl_10a5s0d4g8g0g4h510h4',
          payment: 'pay_10a5s0d4g8g0g4h510h4',
          amount: '1988.00',
          charges: '{2%+3}',
          created: '07 Sep 2017, 06:57:59 AM',
          status: 'Settled'
        },
        {
          settlement: 'settl_10a5s0d4g8g0g4h510h4',
          payment: 'pay_10a5s0d4g8g0g4h510h4',
          amount: '1988.00',
          charges: '{2%+3}',
          created: '07 Sep 2017, 06:57:59 AM',
          status: 'Rejected'
        },
        {
          settlement: 'settl_10a5s0d4g8g0g4h510h4',
          payment: 'pay_10a5s0d4g8g0g4h510h4',
          amount: '1988.00',
          charges: '{2%+3}',
          created: '07 Sep 2017, 06:57:59 AM',
          status: 'Processing'
        },
        {
          settlement: 'settl_10a5s0d4g8g0g4h510h4',
          payment: 'pay_10a5s0d4g8g0g4h510h4',
          amount: '1988.00',
          charges: '{2%+3}',
          created: '07 Sep 2017, 06:57:59 AM',
          status: 'Settled'
        }
      ]
    }
  },

  methods: {
    getColor(status) {
      if (status === 'Settled') return 'green'
      else if (status === 'Rejected') return 'red'
      else return 'orange'
    }
  }
}
</script>

<style></style>

<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="refunditem"
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
      <sideBarRefund />
    </v-navigation-drawer>

    <!-- //SideBar// -->
  </div>
</template>

<script>
import sideBarRefund from '~/components/modelBox/sideBarRefund.vue'

export default {
  name: 'Refund',

  components: { sideBarRefund },

  data() {
    return {
      drawer: null,

      headers: [
        {
          text: 'Refund Id',
          align: 'left',
          sortable: false,
          value: 'refund'
        },
        { text: 'Payment Id', value: 'payment' },
        { text: 'Amount', value: 'amount' },
        { text: 'Reason', value: 'reason' },
        { text: 'Created At', value: 'created' },
        { text: 'Status', value: 'status' },
        { text: 'Action', value: 'action', sortable: false }
      ],
      refunditem: [
        {
          refund: 'refund_10a5s0d4g84h510h4',
          payment: 'pay_10a5s0d4g8g0g4h510h4',
          amount: 1200.0,
          reason: 'Cancelled by Customer',
          created: '07 Sep 2017, 06:57:59 AM',
          status: 'Open'
        },
        {
          refund: 'refund_10a5s0d4g84h510h4',
          payment: 'pay_10a5s0d4g8g0g4h510h4',
          amount: 1200.0,
          reason: 'Cancelled by Customer',
          created: '07 Sep 2017, 06:57:59 AM',
          status: 'Pending'
        },
        {
          refund: 'refund_10a5s0d4g84h510h4',
          payment: 'pay_10a5s0d4g8g0g4h510h4',
          amount: 1200.0,
          reason: 'Cancelled by Customer',
          created: '07 Sep 2017, 06:57:59 AM',
          status: 'Completed'
        },
        {
          refund: 'refund_10a5s0d4g84h510h4',
          payment: 'pay_10a5s0d4g8g0g4h510h4',
          amount: 1200.0,
          reason: 'Cancelled by Customer',
          created: '07 Sep 2017, 06:57:59 AM',
          status: 'Completed'
        }
      ]
    }
  },

  methods: {
    getColor(status) {
      if (status === 'Completed') return 'green'
      else if (status === 'Pending') return 'orange'
      else return 'red'
    }
  }
}
</script>

<style></style>

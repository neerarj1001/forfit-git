<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="transactions"
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
import sideBar from '~/components/modelBox/sideBarTransaction.vue'

export default {
  name: 'Transactions',

  components: { sideBar },

  data() {
    return {
      drawer: null,

      headers: [
        {
          text: 'Payment Id',
          align: 'left',
          sortable: false,
          value: 'payment'
        },
        { text: 'Order Number', value: 'order' },
        { text: 'Customer', value: 'customer' },
        { text: 'Created At', value: 'created' },
        { text: 'Amount', value: 'amount' },
        { text: 'Status', value: 'status' },
        { text: 'Action', value: 'action', sortable: false }
      ],
      transactions: [
        {
          payment: 'pay_10a5s0d4g8g0g4h510h4',
          order: 'OR14521546',
          customer: 'Ashin',
          created: '07 Sep 2017, 06:57:59 AM',
          amount: '1200.00',
          status: 'Success'
        },
        {
          payment: 'pay_10a5s0d4g8g0g4h510h4',
          order: 'OR14521546',
          customer: 'Ashin',
          created: '07 Sep 2017, 06:57:59 AM',
          amount: '1200.00',
          status: 'Success'
        },
        {
          payment: 'pay_10a5s0d4g8g0g4h510h4',
          order: 'OR14521546',
          customer: 'Ashin',
          created: '07 Sep 2017, 06:57:59 AM',
          amount: '1200.00',
          status: 'Failed'
        },
        {
          payment: 'pay_10a5s0d4g8g0g4h510h4',
          order: 'OR14521546',
          customer: 'Ashin',
          created: '07 Sep 2017, 06:57:59 AM',
          amount: '1200.00',
          status: 'Failed'
        },
        {
          payment: 'pay_10a5s0d4g8g0g4h510h4',
          order: 'OR14521546',
          customer: 'Ashin',
          created: '07 Sep 2017, 06:57:59 AM',
          amount: '1200.00',
          status: 'Success'
        }
      ]
    }
  },

  methods: {
    getColor(status) {
      if (status === 'Success') return 'green'
      else if (status === 'Failed') return 'red'
      else return 'red'
    }
  }
}
</script>

<style></style>

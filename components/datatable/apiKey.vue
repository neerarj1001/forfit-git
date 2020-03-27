<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="keys"
      :items-per-page="5"
      hide-default-footer
      class="elevation-0 mytable"
    >
      <!-- status -->
      <template v-slot:item.status="{ item }">
        <v-chip :id="chip" :color="getColor(item.status)" outlined label small>
          {{ item.status }}
        </v-chip>
      </template>

      <!-- Download -->

      <template v-slot:item.download="{ item }">
        <v-btn text icon>
          <v-icon>mdi-download</v-icon>
        </v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: 'ApiTable',

  data() {
    return {
      headers: [
        {
          text: 'Client ID',
          align: 'left',
          sortable: false,
          value: 'cid'
        },
        { text: 'Client Key', value: 'ckey', sortable: false },
        { text: 'Created Time', value: 'time', sortable: false },
        { text: 'Status', value: 'status', sortable: false },
        { text: 'Download', value: 'download', sortable: false }
      ],
      keys: [
        {
          cid: 'HAndhabahsd',
          ckey: 'XXXXXXXXXXXXXXXXXXXXXXXXgkasdgkadgas',
          time: '07 Sep 2017, 06:57:59 AM',
          status: 'Active'
        },
        {
          cid: 'HAndhabahsd',
          ckey: 'XXXXXXXXXXXXXXXXXXXXXXXXXXhdgkasdgkadgas',
          time: '07 Sep 2017, 06:57:59 AM',
          status: 'Deactive'
        }
      ]
    }
  },
  methods: {
    getColor(status) {
      if (status === 'Active') return 'green'
      else if (status === 'Deactive') return 'red'
      else return 'red'
    }
  }
}
</script>

<style></style>

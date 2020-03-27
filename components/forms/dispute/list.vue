<template>
  <div>
    <v-list two-line dense>
      <v-list-item-group color="primary">
        <v-subheader>Open </v-subheader>

        <!-- Open Dispute -->

        <v-list-item v-for="item in items" :key="item.title" @click="">
          <v-list-item-avatar>
            <v-icon :class="[item.iconClass]" v-text="item.icon"></v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
            <v-list-item-subtitle
              v-text="item.disputeID"
            ></v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-icon color="grey lighten-1" v-on="on"
                  >mdi-information</v-icon
                >
              </template>
              <span v-text="item.decision"></span>
            </v-tooltip>
          </v-list-item-action>
        </v-list-item>

        <!-- //Open Dispute//  -->

        <v-divider inset></v-divider>

        <v-subheader>Closed </v-subheader>

        <!-- Closed Dispute -->

        <v-list-item v-for="item in items2" :key="item.title" @click="">
          <v-list-item-avatar>
            <v-icon :class="[item.iconClass]" v-text="item.icon"></v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
            <v-list-item-subtitle
              v-text="item.disputeID"
            ></v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-icon color="grey lighten-1" v-on="on"
                  >mdi-information</v-icon
                >
              </template>
              <span v-text="item.decision"></span>
            </v-tooltip>
          </v-list-item-action>
        </v-list-item>

        <!-- //Closed Dispute// -->
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
export default {
  name: 'DisputeList',

  data: () => ({
    items: [
      {
        icon: 'mdi-alert-circle-outline', // Decision Pending
        iconClass: 'amber lighten-1 white--text',
        title: 'Non Delivery',
        disputeID: 'Disp_sadgsgd765ghsd',
        decision: 'Pending for Admin decision'
      },
      {
        icon: 'mdi-comment-text-outline', // Comments
        iconClass: 'error lighten-1 white--text',
        title: 'Wrong Product',
        disputeID: 'Disp_sadgsgd765ghsd',
        decision: 'Discussing'
      },
      {
        icon: 'mdi-comment-text-outline', // Comments
        iconClass: 'error lighten-1 white--text',
        title: 'Quality Issue',
        disputeID: 'Disp_sadgsgd765ghsd',
        decision: 'Discussing'
      }
    ],
    items2: [
      {
        icon: 'mdi-reply-all', // Refunded
        iconClass: 'green darken-1 white--text',
        title: 'Shipment Damage',
        disputeID: 'Disp_sadgsgd765ghsd',
        decision: 'Refund'
      },
      {
        icon: 'mdi-check-all', // Settled
        iconClass: 'green  lighten-1 white--text',
        title: 'Shipment Damage',
        disputeID: 'Disp_sadgsgd765ghsd',
        decision: 'Settled'
      }
    ]
  })
}
</script>

<style></style>

<template>
  <div>
    <v-container>
      <v-timeline dense clipped>
        <!-- Add Comment -->

        <v-timeline-item
          fill-dot
          class="white--text mb-12"
          color="orange"
          large
        >
          <template v-slot:icon>
            <span class="mdi mdi-lead-pencil"></span>
          </template>
          <v-text-field
            v-model="input"
            label="Leave a comment..."
            solo
            :rules="rules"
            hide-details="auto"
            @keydown.enter="comment"
          >
            <template v-slot:append>
              <v-btn
                class="ma-2"
                color="primary"
                text
                depressed
                @click="comment"
              >
                Send
              </v-btn>
            </template>
          </v-text-field>
        </v-timeline-item>

        <v-slide-x-transition group>
          <v-timeline-item
            v-for="event in timeline"
            :key="event.id"
            class="mb-4"
            color="pink"
            small
          >
            <v-row justify="space-between">
              <v-col cols="10" v-text="event.text"></v-col>
              <v-col
                cols="2"
                class="text-right small"
                v-text="event.time"
              ></v-col>
            </v-row>
          </v-timeline-item>
        </v-slide-x-transition>

        <!-- Add Comment -->

        <v-timeline-item color="grey" icon-color="grey lighten-2" small>
          <v-row justify="space-between">
            <v-col cols="10">The disput has been closed.</v-col>
            <v-col cols="2" class="text-right small">
              25-02-2020 11:10:45 AM
            </v-col>
          </v-row>
        </v-timeline-item>

        <!-- ----------------------------------------------- -->

        <v-timeline-item
          v-for="(item, i) in items"
          :key="i"
          :color="item.chipColor"
          small
        >
          <v-row justify="space-between">
            <v-col cols="10">
              <v-chip
                label
                small
                :class="item.chipClass"
                :color="item.chipColor"
                v-text="item.user"
              >
              </v-chip>

              <p class="pt-2" v-text="item.comment"></p>
            </v-col>

            <v-col cols="2" class="text-right small" v-text="item.time">
            </v-col>
          </v-row>
        </v-timeline-item>

        <!-- -----------------------
------------------------ -->

        <v-divider inset></v-divider>
        <v-timeline-item color="primary" small>
          <v-row justify="space-between">
            <v-col cols="10">
              <p>
                "Customer" bought the "Product" from "Merchant/ Vendor" for Rs
                "Order Amount" on "Order Date" with the "Order Number".
              </p>
              <p>
                The merchant requested to settle the payment on the "Settlement
                Request Date." The customer opened a dispute because he / she
                was not happy with the product.
              </p>
            </v-col>
            <v-col class="text-right small" cols="2">
              25-02-2020 10:45:20 AM
            </v-col>
          </v-row>
        </v-timeline-item>

        <!-- -----------------------
------------------------ -->
      </v-timeline>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'DisputeDiscussion',
  data: () => ({
    items: [
      {
        user: 'Admin', //Operator
        chipClass: 'white--text ml-0',
        chipColor: 'blue-grey darken-4',
        comment:
          'ABC Ascjgs isudhasiud  Ascjgs dhgoiau saidhusa duihasdiouahsd iauhdaduhasdp iouahsd iauhdaduhasdp iahsdiaushdaisudhasiud BCD',
        time: '25-02-2020 11:30:25 AM'
      },

      {
        user: 'Me', //Customer
        chipClass: 'white--text ml-0',
        chipColor: 'purple lighten-2',
        comment:
          'ABC Ascjgs dhgoiau saidhusa duihasdiouahsd iauhdaduhasdp iahsdiaushdaisudhasiud Ascjgs dhgoiau saidhusa duihasdiouahsd iauhdaduhasdp iahsdiaushdaisudhasiud  Ascjgs dhgoiau saidhusa duihasdiouahsd iauhdaduhasdp iahsdiaushdaisudhasiud  Ascjgs dhgoiau saidhusa duihasdiouahsd iauhdaduhasdp iahsdiaushdaisudhasiud BCD',
        time: '25-02-2020 11:30:25 AM'
      },

      {
        user: 'ABC Limited', //Merchant
        chipClass: 'white--text ml-0',
        chipColor: 'red lighten-2',
        comment:
          'ABC Ascjgs dhgoiau saidhusa duihasdiouahsd iauhdaduhasdp iahsdiaushdaisudhasiud Ascjgs dhgoiau saidhusa duihasdiouahsd iauhdaduhasdp iahsdiaushdaisudhasiud  Ascjgs dhgoiau saidhusa duihasdiouahsd iauhdaduhasdp iahsdiaushdaisudhasiud  Ascjgs dhgoiau saidhusa duihasdiouahsd iauhdaduhasdp iahsdiaushdaisudhasiud BCD',
        time: '25-02-2020 11:30:25 AM'
      },

      {
        user: 'XYZ Services', //Vendor
        chipClass: 'white--text ml-0',
        chipColor: 'teal lighten-2',
        comment:
          'ABC Ascjgs dhgoiau saidhusa duihasdiouahsd iauhdaduhasdp iahsdiaushdaisudhasiud Ascjgs dhgoiau saidhusa duihasdiouahsd iauhdaduhasdp iahsdiaushdaisudhasiud  Ascjgs dhgoiau saidhusa duihasdiouahsd iauhdaduhasdp iahsdiaushdaisudhasiud  Ascjgs dhgoiau saidhusa duihasdiouahsd iauhdaduhasdp iahsdiaushdaisudhasiud BCD',
        time: '25-02-2020 11:30:25 AM'
      }
    ],

    rules: [
      (value) => !!value || 'Required.',
      (value) => (value && value.length >= 50) || 'Min 50 characters'
    ],

    events: [],
    input: null,
    nonce: 0
  }),

  computed: {
    timeline() {
      return this.events.slice().reverse()
    }
  },

  methods: {
    comment() {
      const time = new Date().toTimeString()
      this.events.push({
        id: this.nonce++,
        text: this.input,
        time: time.replace(
          /:\d{2}\sGMT-\d{4}\s\((.*)\)/,
          (match, contents, offset) => {
            return ` ${contents
              .split(' ')
              .map((v) => v.charAt(0))
              .join('')}`
          }
        )
      })

      this.input = null
    }
  }
}
</script>

<style></style>

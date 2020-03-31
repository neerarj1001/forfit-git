<template>
  <div>
    <v-menu
      v-model="menu2"
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
      max-width="290px"
      min-width="290px"
    >
      <template v-slot:activator="{ on }">
        <v-text-field
          v-model="computedDateFormatted"
          :label="dateLabel"
          hint="DD/MM/YYYY"
          persistent-hint
          append-icon="mdi-calendar-today"
          readonly
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker
        v-model="date"
        no-title
        @input="menu2 = false"
      ></v-date-picker>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: 'Date',

  data: (vm) => ({
    date: new Date().toISOString().substr(0, 10),
    dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
    menu1: false,
    menu2: false,
    errorMessages: '',
    name: null,
    amount: null,
    model: 0
  }),
  
  props: ['dateLabel'],

  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date)
    }
  },

  watch: {
    date(val) {
      this.dateFormatted = this.formatDate(this.date)
    }
  },

  methods: {
    formatDate(date) {
      if (!date) return null

      const [year, month, day] = date.split('-')
      return `${day}/${month}/${year}`
    },
    parseDate(date) {
      if (!date) return null

      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    }
  }
}
</script>

<style></style>

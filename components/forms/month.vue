<template>
  <div>
    <v-dialog
      ref="dialog"
      v-model="modal"
      :close-on-content-click="true"
      :return-value.sync="date"
      persistent
      full-width
      width="290px"
    >
      <template v-slot:activator="{ on }">
        <v-text-field
          v-model="date"
          label="Choose Month"
          hint="Select the period of report generation"
          append-icon="mdi-calendar"
          readonly
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker v-model="date" type="month" scrollable>
        <div class="flex-grow-1"></div>
        <v-btn text color="blue-grey" @click="modal = false">Cancel</v-btn>
        <v-btn text color="primary" @click="$refs.dialog.save(date)"
          >Choose</v-btn
        >
      </v-date-picker>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'MonthSelection',

  data: () => ({
    date: new Date().toISOString().substr(0, 7)
  })
}
</script>

<style></style>

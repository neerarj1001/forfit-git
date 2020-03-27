<template>
  <div>
    <v-select
      :items="period"
      label="Period"
      hint="Select the period of report generation"
    ></v-select>
  </div>
</template>

<script>
export default {
  name: 'Period',

  data: () => ({
    period: ['Monthly', 'Custom']
  })
}
</script>

<style></style>

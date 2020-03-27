<template>
  <div>
    <v-text-field
      v-model="search"
      outlined
      label="Search"
      hide-details
      clearable
    ></v-text-field>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: ''
    }
  }
}
</script>

<style></style>

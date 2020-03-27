<template>
  <div>
    <v-select
      :items="filetype"
      label="Export Type"
      hint="Choose the file type"
    ></v-select>
  </div>
</template>

<script>
export default {
  name: 'FileType',

  data: () => ({
    filetype: ['Excel', 'PDF']
  })
}
</script>

<style></style>

<template>
  <div>
    <v-pagination
      v-model="page"
      class="py-6"
      :length="pageCount"
    ></v-pagination>
  </div>
</template>

<script>
export default {
  name: 'Pagination',

  data() {
    return {
      page: 1,
      pageCount: 3,
      itemsPerPage: 10
    }
  }
}
</script>

<style></style>

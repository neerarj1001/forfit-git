<template>
  <div>
    <v-rating
      v-model="rating"
      background-color="yellow accent-4"
      color="yellow accent-4"
      dense
      hover
      size="18"
    ></v-rating>
  </div>
</template>

<script>
export default {
  name: 'Rating',

  data: () => ({
    rating: 1
  })
}
</script>

<style></style>

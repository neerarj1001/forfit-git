<template>
  <div>
    <v-row class="pt-4" justify="center">
      <v-col cols="3">
        <!-- List -->
        <list />
        <!-- //List// -->
      </v-col>

      <v-col cols="8">
        <!-- Discussion -->
        <discussion />
        <!-- //Discussion// -->
      </v-col>
    </v-row>
  </div>
</template>

<script>
import list from '~/components/forms/dispute/list'
import discussion from '~/components/forms/dispute/discussion'

export default {
  layout: 'dashboard',

  components: { discussion, list }
}
</script>

<style></style>

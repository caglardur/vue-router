<template>
  <v-container>
    <h1>Customer Container {{ itemId }}</h1>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name: "CustomerDetail",
  data: () => ({
    itemId: ""
  }),
  methods: {
    getId() {
      this.itemId = this.$route.params.id
    }
  },
  mounted: function () {
    this.getId()
    console.log("mounted")
    console.log(this.$route.params.id)
  },
  watch: {
    $route: function () {
      this.getId()
    }
  }
})
</script>

<style></style>

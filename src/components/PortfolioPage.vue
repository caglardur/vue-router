<template>
  <v-container>
    <h1>Portfolio</h1>
    <ul>
      <li>
        <v-btn class="my-2" to="/customer-detail/1">tab 1</v-btn>
      </li>
      <li>
        <v-btn class="my-2" to="/customer-detail/2">tab 2</v-btn>
      </li>
      <li>
        <v-btn class="my-2" to="/customer-detail/3">tab 3</v-btn>
      </li>
    </ul>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue"
import router from "vue-router"

export default Vue.extend({
  name: "PortfolioPage",

  data: () => ({
    basic: false
  }),
  methods: {
    pushRoute(e: any) {
      // router.push({ path: e })
    }
  }
})
</script>

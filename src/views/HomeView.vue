<template>
  <v-card tile flat>
    <v-tabs dark background-color="teal darken-3">
      <v-tab to="/customer-list">Portföyüm</v-tab>
      <v-tab v-for="tab in tabs" :key="tab" :to="'/customer-detail/' + tab">
        Item {{ tab }}
        <v-btn icon right @click.prevent="removeTab(tab)" class="closeButton"><v-icon x-small>mdi-close</v-icon></v-btn>
      </v-tab>
    </v-tabs>
    <v-card tile flat>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </v-card>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name: "HomeView",

  data: () => ({
    tabs: new Array<string>()
  }),
  methods: {
    addTab(e: string) {
      e && !this.tabs.includes(e) && this.tabs.push(e)
    },
    removeTab(e: string) {
      this.$route.params.id === e && this.$router.push("/customer-list")
      this.tabs = [...this.tabs.filter(item => item !== e)]
    }
  },
  watch: {
    $route: function () {
      this.addTab(this.$route.params.id)
    }
  },
  mounted: function () {
    this.addTab(this.$route.params.id)
  }
})
</script>

<style scoped>
.closeButton {
  z-index: 999999;
}
</style>

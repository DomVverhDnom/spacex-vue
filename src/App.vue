<template>
  <div id="root">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import { mapGetters } from "vuex";
export default {
  name: "App",
  components: {
    Header,
  },
  computed: {
    ...mapGetters("rockets", ["allRockets"]),
  },
  created() {
    this.$store.dispatch("rockets/fetchRockets");
  },
};
</script>

<style></style>

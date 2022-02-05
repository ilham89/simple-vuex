<template>
  <h4 v-if="countryLoading">Fetching ...</h4>
  <table v-else>
    <tr>
      <th>Country</th>
      <th>Capital</th>
      <th>Population</th>
    </tr>
    <tr v-for="country in countries" :key="country.name.official">
      <td>{{ country.name.official }}</td>
      <td>{{ country.fifa }}</td>
      <td>{{ country.population }}</td>
    </tr>
  </table>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["countries", "countryLoading"]),
  },
  methods: {
    ...mapActions(["fetchAllCountries"]),
  },
  created() {
    this.fetchAllCountries();
  },
};
</script>

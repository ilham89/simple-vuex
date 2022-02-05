<template>
  <div class="mainview">
    <div v-for="member in members" :key="member.id" class="members">
      <h3>{{ member.name }} - {{ member.point }}</h3>
      <img
        :src="require(`../static/images/${member.img}`)"
        :alt="member.id"
        width="200"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["members"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

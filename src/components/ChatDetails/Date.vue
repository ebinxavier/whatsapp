<template>
  <div class="container">
    <div class="date">{{ dateString }}</div>
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  props: ["date"],
  computed: {
    dateString() {
      return dayjs(this.date || new Date()).format("DD-MMM-YYYY");
    },
  },
};
</script>

<style scoped>
.container {
  text-align: center;
  margin: 10px;
}
.date {
  background: #1d2b2f;
  display: inline-block;
  padding: 5px;
  border-radius: 10px;
  font-size: 13px;
}
</style>
<template>
  <span class="check">
    <Check v-if="type === 'single'" style="vertical-align: middle" />
    <CheckAll v-if="type === 'double'" style="vertical-align: middle" />
    <CheckAll
      v-if="type === 'seen'"
      style="vertical-align: middle; color: #00b6ff"
    />
  </span>
</template>

<script>
import { Check, CheckAll } from "mdue";
export default {
  props: ["type"],
  components: {
    Check,
    CheckAll,
  },
  mounted() {},
};
</script>

<style>
.check {
  margin-right: 5px;
}
</style>
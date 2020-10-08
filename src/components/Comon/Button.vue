<template>
  <span class="btn">
    <component :style="style" :is="icon"> </component>
  </span>
</template>

<script>
export default {
  props: ["icon", "style"],
};
</script>

<style scoped>
.btn {
  padding: 7px 5px 0px 5px;
  border-radius: 50%;
  cursor: pointer;
}
.btn:hover {
  background: #323739;
}
</style>
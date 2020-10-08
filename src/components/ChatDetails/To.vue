<template>
  <div class="container">
    <div style="position: relative">
      <div class="triangle"></div>
      <div class="to">
        <span>{{ message }}</span>
        <span class="time">
          {{ time }}
          <Check style="font-size: 20px" :type="checkType" />
        </span>
      </div>
      <div style="clear: both" />
    </div>
  </div>
</template>

<script>
import Check from "../Comon/Check";

export default {
  props: ["message", "time", "checkType"],
  components: {
    Check,
  },
};
</script>

<style scoped>
.container{
  padding: 10px 0;
}
.triangle {
  width: 0;
  height: 0;
  border-top: 0px solid transparent;
  border-left: 25px solid #064740;
  border-bottom: 25px solid transparent;
  position: absolute;
  right: -10px;
}
.to {
  background: #064740;
  padding: 10px 15px 25px;
  border-radius: 10px;
  min-width: 200px;
  max-width: 50%;
  position: relative;
  float: right;
}
.time {
  color: #909496;
  font-size: 12px;
  position: absolute;
  right: 10px;
  bottom: 5px;
}
</style>
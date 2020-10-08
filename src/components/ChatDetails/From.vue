<template>
  <div class="container">
    <div style="position: relative">
      <div class="triangle"></div>
      <div class="from">
        <span>{{ message }}</span>
        <span class="time">{{ time }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["message", "time"],
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
  border-left: 25px solid #252f31;
  border-bottom: 25px solid transparent;
  transform: rotateZ(90deg);
  position: absolute;
  left: -10px;
}
.from {
  background: #252e31;
  display: inline-block;
  padding: 10px 15px 25px;
  border-radius: 10px;
  min-width: 200px;
  max-width: 50%;
  position: relative;
}
.time {
  color: #909496;
  font-size: 12px;
  position: absolute;
  right: 10px;
  bottom: 5px;
}
</style>
<template>
  <div class="search-bar">
    <Magnify class="search-icon" />
    <input class="input-box" placeholder="Search or start new chat" />
  </div>
  <Divider/>
</template>

<script>
import { Magnify } from "mdue";
import Divider from './Divider';

export default {
  components: {
    Magnify,
    Divider,
  },
};
</script>

<style scoped>
.search-bar {
  position: relative;
  padding: 10px;
}
.input-box {
  display: block;
  width: 300px;
  margin: 0 auto;
  border-radius: 15px;
  padding: 10px 0px 10px;
  padding-left: 30px;
  background: #323739;
  border: none;
  color: white;
}
.search-icon {
  position: absolute;
  top: 20px;
  left: 20px;
  color: gray;
}
</style>

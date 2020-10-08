<template>
  <div class="search-bar">
    <div class="search-icon-parent">
      <span class="search-icon">
        <Button :icon="Emoticon" />
        <Button style="transform: rotateZ(125deg)" :icon="Attachment" />
      </span>
    </div>
    <input class="input-box" placeholder="Search or start new chat" />
    <span class="mic">
      <Button :icon="Microphone" />
    </span>
  </div>
</template>

<script>
import { Emoticon, Attachment, Microphone } from "mdue";
import Button from "../Comon/Button";

export default {
  components: {
    Button,
  },
  data() {
    return {
      Microphone,
      Emoticon,
      Attachment,
    };
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
  width: calc(100% - 200px);
  margin: 0 auto;
  border-radius: 15px;
  padding: 10px 0px 10px;
  padding-left: 30px;
  background: #323739;
  border: none;
  color: white;
}
.search-icon-parent {
  position: absolute;
  top: 15px;
  left: 20px;
  color: gray;
  font-size: 25px;
}
.search-icon {
  padding-right: 10px;
}
.mic {
  position: absolute;
  top: 15px;
  right: 20px;
  color: gray;
  font-size: 25px;
}
</style>

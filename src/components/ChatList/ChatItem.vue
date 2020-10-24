<template>
  <div @click="onClickHndlr" class="item">
    <Avatar :avatar="avatar" :avatarColor="avatarColor" />
    <div class="details">
      <span class="name">
        {{ name }}
      </span>
      <br />
      <span class="msg">
        <Check :type="checkType" />
        <span style="vertical-align: middle">{{ lastMessage }} </span>
      </span>
    </div>
    <div style="float: right">
      <span v-if="count" class="time">{{ time }}</span>
      <br />
      <span v-if="count" class="count">{{ count }}</span>
    </div>
  </div>
  <Divider />
</template>

<script>
import { getRandomColor } from "../../helpers";
import Avatar from "../Comon/Avatar";
import Divider from "./Divider";
import Check from "../Comon/Check";

export default {
  props: ["roomId", "name", "time", "count", "lastMessage", "onClick"],
  data() {
    return {
      checkType: "double",
    };
  },
  mounted() {},
  components: {
    Avatar,
    Divider,
    Check,
  },
  computed: {
    avatar() {
      return this.name[0].toUpperCase();
    },
    avatarColor() {
      return getRandomColor();
    },
  },
  methods: {
    onClickHndlr() {
      console.log(this.roomId)
      this.onClick(this.roomId);
    },
  },
};
</script>

<style>
.item {
  padding: 10px;
  cursor: pointer;
}
.item:hover {
  background: #323739;
}
.details {
  margin-left: 15px;
  display: inline-block;
  vertical-align: middle;
}
.name {
  font-weight: bold;
}
.msg {
  color: #9ea1a4;
}
.count {
  background-color: #06af9b;
  padding: 2px 10px;
  border-radius: 10px;
  font-size: 12px;
  font-weight: bold;
  color: #131e22;
  float: right;
}
.time {
  color: #06af9b;
  font-size: 12px;
  font-weight: bold;
}
</style>

<template>
  <div class="header">
    <Avatar :avatarColor="avatarColor" :avatar="avatar" />
    <span class="name" v-if="!!name">{{ name }}</span>
    <DotsVertical class="icon" />
    <span v-if="type === 'list'">
      <ShapeCirclePlus class="icon" />
      <AndroidMessages class="icon" />
    </span>
    <span v-if="type === 'details'">
      <Magnify class="icon" />
    </span>
  </div>
</template>

<script>
import { getRandomColor } from "../../helpers";
import { DotsVertical, AndroidMessages, ShapeCirclePlus, Magnify } from "mdue";
import Avatar from "./Avatar";

export default {
  data() {
    return {
      avatarColor: getRandomColor(),
    };
  },
  props: ["avatar", "type", "name"],
  components: {
    Avatar,
    DotsVertical,
    AndroidMessages,
    ShapeCirclePlus,
    Magnify,
  },
};
</script>

<style scoped>
.header {
  background: #2a3032;
  padding: 10px;
}
.name {
  margin-left: 15px;
  font-size: 17px;
  font-weight: bold;
}

.icon {
  font-size: 25px;
  padding: 5px;
  vertical-align: middle;
  float: right;
}
</style>

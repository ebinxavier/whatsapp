<template>
  <span class="avatar" :style="{ background: avatarColor }">{{ avatar }}</span>
</template>

<script>
export default {
  props: ["avatar", "avatarColor"],
};
</script>

<style>
.avatar {
  padding: 10px 15px;
  border-radius: 50%;
  display: inline-block;
  font-weight: bold;
  text-shadow: 3px 1px 10px black;
}
</style>
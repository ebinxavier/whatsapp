<template>
  <div>
    <Message :sendMessage="sendMessage" />
  </div>
</template>

<script>
import Message from "./Message";

export default {
  props:["sendMessage"],
  components: {
    Message,
  },
};
</script>

<style>
</style>
<template>
  <div class="layout">
    <ChatList />
    <ChatDetails :name="name" />
  </div>
</template>

<script>
import ChatList from "../components/ChatList/index";
import ChatDetails from "../components/ChatDetails/index";

export default {
  data() {
    return {
      name: "dibin",
    };
  },

  methods: {
    log() {},
  },
  components: {
    ChatList,
    ChatDetails,
  },

};
</script>

<style>
.layout {
  display: flex;
  min-height: 100vh;
}
</style>

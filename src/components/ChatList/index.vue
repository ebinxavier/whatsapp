<template>
  <div class="chats">
    <ChatHeader :avatar="avatar" type="list" />
    <ChatSearch />
    <Chats :loading="loading" :chats="chats" :setSelectedRoom="setSelectedRoom" />
  </div>
</template>

<script>
import ChatHeader from "../Comon/ChatHeader";
import ChatSearch from "./ChatSearch";
import Chats from "./Chats";

export default {
  props: ["loading","chats","setSelectedRoom"],
  data() {
    return {
      name: "dibin ",
    };
  },
  computed: {
    avatar() {
      return this.name[0].toUpperCase();
    },
  },
  components: {
    ChatHeader,
    ChatSearch,
    Chats,
  },
};
</script>

<style scoped>
.chats {
  width: 350px;
  background-color: #131d21;
  border-right: 1px solid #31383c;
}

@media (max-width: 800px) {
  .chats {
    width: 100%;
  }
}
</style>
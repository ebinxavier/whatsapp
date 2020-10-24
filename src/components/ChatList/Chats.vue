<template>
  <div class="chats">
    <div v-if="loading" style="text-align: center"><Loading /></div>
    <div v-if="!loading">
      <ChatItem
        v-for="chat in chats"
        :key="chat.roomId"
        :roomId="chat.roomId"
        :name="chat.name"
        :time="chat.time"
        :count="chat.count"
        :lastMessage="chat.lastMessage"
        :onClick="onClick"
      />
    </div>
  </div>
</template>

<script>
import ChatItem from "./ChatItem";
import Loading from "../Comon/Loading";

export default {
  props: ["loading", "title", "chats", "setSelectedRoom"],
  data() {
    return {
      // chats: [
      //   // {
      //   //   name: "Ebin",
      //   //   time: "1:45 PM",
      //   //   count: 214,
      //   //   lastMessage: "Hello",
      //   // },
      // ],
    };
  },
  components: {
    ChatItem,
    Loading,
  },
  methods: {
    onClick(chat) {
      this.setSelectedRoom(chat);
    },
  },
};
</script>

<style scoped>
.chats {
  height: calc(100vh - 115px);
  overflow: auto;
}
</style>

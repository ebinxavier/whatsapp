<template>
  <div class="chats">
    <ChatItem
      v-for="chat in chats"
      :key="chat.name"
      :name="chat.name"
      :time="chat.time"
      :count="chat.count"
      :lastMessage="chat.lastMessage"
    />
  </div>
</template>

<script>
import ChatItem from "./ChatItem";

export default {
  props: ["title"],
  data() {
    return {
      chats: [
        {
          name: "Ebin",
          time: "1:45 PM",
          count: 214,
          lastMessage: "Hello",
        },
        {
          name: "Dibin",
          time: "1:45 PM",
          count: 2224,
          lastMessage: "Hi",
        },
        {
          name: "John",
          time: "1:45 PM",
          count: 324,
          lastMessage: "Thanks",
        },

        {
          name: "Jabir",
          time: "1:45 PM",
          count: 243,
          lastMessage: "Hello",
        },
        {
          name: "Suresh",
          time: "1:45 PM",
          count: 224,
          lastMessage: "Hi",
        },
        {
          name: "Yadhu",
          time: "1:45 PM",
          count: 9024,
          lastMessage: "Thanks",
        },
        {
          name: "Ebin",
          time: "1:45 PM",
          count: 214,
          lastMessage: "Hello",
        },
        {
          name: "Dibin",
          time: "1:45 PM",
          count: 2224,
          lastMessage: "Hi",
        },
        {
          name: "John",
          time: "1:45 PM",
          count: 324,
          lastMessage: "Thanks",
        },

        {
          name: "Jabir",
          time: "1:45 PM",
          count: 243,
          lastMessage: "Hello",
        },
        {
          name: "Suresh",
          time: "1:45 PM",
          count: 224,
          lastMessage: "Hi",
        },
        {
          name: "Yadhu",
          time: "1:45 PM",
          count: 9024,
          lastMessage: "Thanks",
        },
      ],
    };
  },
  mounted() {},
  updated() {},
  components: {
    ChatItem,
  },
};
</script>

<style scoped>
.chats {
  height: calc(100vh - 115px);
  overflow: auto;
}
</style>

<template>
  <DefaultRoom v-if="!selectedRoom" />
  <div v-if="selectedRoom" class="chat-window">
    <ChatHeader :avatar="avatar" type="details" :name="name" />
    <div class="chat-box">
      <div :key="chat.id" v-for="chat in chats">
        <From
          v-if="chat.type === 'from'"
          :message="chat.message"
          :time="chat.time"
        />
        <To
          v-if="chat.type === 'to'"
          :message="chat.message"
          :time="chat.time"
          :checkType="chat.checkType"
        />
        <Date v-if="chat.type === 'date'" :date="chat.date" />
      </div>
    </div>
    <Footer :sendMessage="sendMessage" />
  </div>
</template>

<script>
import ChatHeader from "../Comon/ChatHeader";
import From from "./From";
import To from "./To";
import Date from "./Date";
import Footer from "./Footer";
import DefaultRoom from "./DefaultRoom";

export default {
  data() {
    return {
      chats: [
        {
          id: "1",
          type: "to",
          message: "Hello",
          time: "2:25 AM",
          checkType: "seen",
        },
        {
          id: "2",
          type: "date",
          date: window.Date.now(),
        },
        {
          id: "3",
          type: "from",
          message: "Hello",
          time: "2:25 AM",
        },
        {
          id: "4",
          type: "to",
          message: "Hello",
          time: "2:25 AM",
          checkType: "double",
        },
      ],
    };
  },
  computed: {
    avatar() {
      return this.name[0].toUpperCase();
    },
  },
  components: {
    ChatHeader,
    From,
    To,
    Date,
    Footer,
    DefaultRoom,
  },
  props: ["name", "sendMessage", "selectedRoom"],
};
</script>

<style>
.chat-window {
  flex: 1;
}
.chat-box {
  background: black;
  background-image: url("/whatsapp/bg.jpg");
  height: calc(100vh - 115px);
  background-size: cover;
  padding: 0 50px;
  overflow: auto;
}
@media (max-width: 800px) {
  .chat-window {
    display: none;
  }
}
</style>
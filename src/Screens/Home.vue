<template>
  <div class="layout">
    <ChatList
      :loading="chatsLoading"
      :chats="chats"
      :setSelectedRoom="setSelectedRoom"
    />
    <ChatDetails
      :selectedRoom="selectedRoom"
      :name="name"
      :sendMessage="sendMessage"
    />
  </div>
</template>

<script>
import ChatList from "../components/ChatList/index";
import ChatDetails from "../components/ChatDetails/index";
import { baseUrl } from "../helpers";

export default {
  data() {
    return {
      name: null,
      chatsLoading: false,
      chats: [],
      chatMessages: {},
      publicMessages: {},
      selectedRoom: null,
    };
  },
  props: ["socket"],
  methods: {
    sendMessage(message) {
      this.socket.emit("message", {
        message,
        from: localStorage.getItem("roomId"),
        to: this.selectedRoom,
      });
    },
    setSelectedRoom(roomId) {
      console.log("Room Changed", roomId, this.chats);
      const chat = this.chats.find((chat) => chat.roomId === roomId);
      if (chat) {
        this.selectedRoom = roomId;
        this.name = chat.name;
      }
    },
    joinApp(name = "Ebin") {
      this.socket.emit("join", { name }, (ack) => {
        console.log("Ack:", ack);
        localStorage.setItem("roomId", ack.roomId);
      });
    },
  },
  components: {
    ChatList,
    ChatDetails,
  },
  async mounted() {
    this.chatsLoading = true;
    const raw = await fetch(`${baseUrl}/whatsapp-clone/get-users`);
    const data = await raw.json();
    this.chatMessages = data.users;
    const chats = Object.entries(data.users).map(([k, v]) => ({
      ...v,
      roomId: k,
    }));
    this.chats = chats;
    console.log(chats);
    this.chatsLoading = false;

    // Subscribe to public group
    // const publicRoom = chats[0];
    // this.socket.join(publicRoom.roomId)
    this.joinApp("Dibin");

    this.socket.on("joined", (data) => {
      // New member joined
      console.log("Joined", data);
      this.chats.push(data);
    });

    this.socket.on("disconnected", (data) => {
      // A member disconnected
      const index = this.chats.findIndex((chat) => chat.roomId === data.roomId);
      if (index !== -1) {
        this.chats.splice(index, 1);
        console.log("Disconnected", data, index, this.chats);
      }
    });

    this.socket.on("messaged", (data) => {
      // New message received
      console.log("New Msg", data);
      this.publicMessages.push(data);
    });
  },
};
</script>

<style>
.layout {
  display: flex;
  min-height: 100vh;
}
</style>

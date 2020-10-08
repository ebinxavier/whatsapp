<template>
  <div class="chat-window">
    <ChatHeader :avatar="avatar" type="details" name="Ebin Xavier" />
    <div class="chat-box">
      <From message="This is a from message." time="4:23 PM" />
      <From message="This is a from message." time="4:23 PM" />
      <Date />

      <From message="This is a from message." time="4:23 PM" />
      <To
        message="Ehis A long message to demonstrste multiple line message.This is a to message. A long message to demonstrste multiple line message.This is a to message. A long message to demonstrste multiple line message.This is a to message. A long message to demonstrste multiple line message.This is a to message. A long message to demonstrste multiple line message.This is a to message. A long message to demonstrste multiple line message.This is a to message. A long message to demonstrste multiple line message."
        time="4:23 PM"
        checkType="seen"
      />
      <Date />
      <To
        message="Ehis A long message to demonstrste multiple line message.This is a to message. A long message to demonstrste multiple line message.This is a to message. A long message to demonstrste multiple line message.This is a to message. A long message to demonstrste multiple line message.This is a to message. A long message to demonstrste multiple line message.This is a to message. A long message to demonstrste multiple line message.This is a to message. A long message to demonstrste multiple line message."
        time="4:23 PM"
        checkType="seen"
      />
      <To
        message="Ehis A long message to demonstrste multiple line message.This is a to message. A long message to demonstrste multiple line message.This is a to message. A long message to demonstrste multiple line message.This is a to message. A long message to demonstrste multiple line message.This is a to message. A long message to demonstrste multiple line message.This is a to message. A long message to demonstrste multiple line message.This is a to message. A long message to demonstrste multiple line message."
        time="4:23 PM"
        checkType="seen"
      />
    </div>
    <Footer />
  </div>
</template>

<script>
import ChatHeader from "../Comon/ChatHeader";
import From from "./From";
import To from "./To";
import Date from "./Date";
import Footer from "./Footer";

export default {
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
  },
  props: ["name"],
};
</script>

<style>
.chat-window {
  flex: 1;
}
.chat-box {
  background-image: url("/bg.jpg");
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
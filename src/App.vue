 <!-- <template>
   <Home v-if="socket" :socket="socket" />
 </template> -->

<template>
  <div>
    <router-view />
  </div>
</template>




<script>
import io from "socket.io-client";
import { baseUrl } from "./helpers";

export default {
  name: "App",
  data() {
    return {
      socket: null,
    };
  },
  methods: {
   navigate(path){
     this.$router.push(path)
   }
  },
  mounted() {
    this.socket = io(baseUrl);
    this.socket.on("connect", () => {
      console.log("Connected!");
      // this.socket.to("game").emit("nice game", "let's play a game");
    });
    // this.socket.on("init",(data)=>{
    //   console.log(data);
    // })
  },
};
</script>

<style>
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
  background: #252e31;
}
body {
  margin: 0;
  padding: 0;
}
h1 {
  margin: 0;
}
textarea:focus,
input:focus {
  outline: none;
}
</style>

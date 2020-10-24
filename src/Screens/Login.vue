<template>
  <div class="containerTop">
    <h1 style="padding: 15px">LOGIN</h1>
    <input
      v-model="message"
      class="input-box"
      placeholder="Enter Your Nick Name"
    />
    <button @click="() => navigate('/home')" class="button">JOIN</button>
  </div>
  <div class="logo">
    <DefaultRoom small="true" />
  </div>
</template>

<script>
import DefaultRoom from "../components/ChatDetails/DefaultRoom";
export default {
  components: {
    DefaultRoom,
  },
  methods: {
    navigate(path) {
      this.$router.push(path);
    },
    handleMessage(event) {
      if (event.key === "Enter") {
        console.log(event.target.value);
        this.sendMessage(event.target.value);
        this.message = "";
      }
    },
  },
};
</script>

<style scoped>
.containerTop {
  text-align: center;
  min-height: calc(100vh - 195px);
}

.input-box {
  display: block;
  width: 300px;
  margin: 15px auto;
  border-radius: 15px;
  padding: 10px 0px 10px;
  padding-left: 30px;
  background: #323739;
  border: none;
  color: white;
}
.button {
  margin-bottom: 15px;
  width: 100px;
  padding: 10px 15px;
  border-radius: 25px;
  border: 1px solid #262626;
  color: white;
  background: #262626;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 100px;
}
.button:focus {
  outline: none;
}
.button:hover {
  background: #1b1a1a;
}
.logo{
    padding: 25px;
}
</style>
<template>
  <Home />
</template>

<script>
import Home from "./Screens/Home";

export default {
  name: "App",
  components: {
    Home,
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
textarea:focus, input:focus{
    outline: none;
}
</style>

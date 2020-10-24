<template>
  <div class="container">
    <img
      class="img"
      src="https://cdn.iconscout.com/icon/free/png-256/whatsapp-circle-1868968-1583132.png"
      alt="logo"
      :style="[small ? 'width:60px' : 'width:256px']"
    />
    <p class="title" :style="[small ? 'font-size:25px' : 'font-size:35px']">
      Whatsapp Clone
    </p>
    <p class="credit">Developed by <b>Ebin Xavier</b></p>
    <p class="credit">
      Made with
      <img
        style="vertical-align: middle"
        width="20"
        src="https://cdn.iconscout.com/icon/free/png-256/vue-282497.png"
        alt="vue.js"
      />ue.js
    </p>
  </div>
</template>

<script>
export default {
  props: ["small"],
  mounted() {},
};
</script>

<style scoped>
.container {
  text-align: center;
  width: 100%;
  margin: auto;
}
.title {
  font-size: 35px;
  color: #9c9fa2;
  margin: 15px 0 0 0;
}
.credit {
  font-size: 15px;
  color: #9c9fa2;
  margin: 0;
}
</style>
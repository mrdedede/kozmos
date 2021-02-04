<template>
  <div class="login-screen">
    <div class="text-center py-5">
      <h1 class="display-1 py-5 font-kozmos">Kozmos</h1>
      <router-link to="/login" class="display-4 font-kozmos">Login</router-link><br>
      <a class="display-4 font-kozmos">Cadastro</a><br>
      <br>
      <a class="font-kozmos"><h2>politicas de privacidade</h2></a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class HomeScreen extends Vue {
}
</script>

<style scoped>
.login-screen {
  background-image: url('../assets/login-screen.jpg');
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.font-kozmos {
  font-family: "BlackGround";
  color: white;
}

</style>

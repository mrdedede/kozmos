<template>
  <div class="login-screen">
    <div class="text-center py-5 container">
      <h1 class="display-1 font-kozmos my-5">Login</h1>
      <div class="form container">
        <input v-model="email" placeholder="E-mail" class="form-control"><br>
        <input v-model="password" placeholder="Password" class="form-control"><br>
        <div class="container">
          <br>
          <div class="row">
            <div class="col-md-6">
              <router-link to="/feed" class="btn btn-success font-kozmos">Log In</router-link>
            </div>
            <div class="col-md-6">
              <router-link to="/cadastro" class="btn btn-primary font-kozmos">
                Cadastre-se Aqui
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class LoginForm extends Vue {
  email: string = ""
  password: string = ""
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

.form {
  width: 70%
}
</style>

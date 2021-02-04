<template>
  <div class="login-screen">
    <div class="text-center py-5 container">
      <h1 class="display-4 font-kozmos my-4">Cadastre-se</h1>
      <div class="form container">
        <input v-model="email" placeholder="E-mail" class="form-control"><br>
        <input v-model="password" placeholder="Password" class="form-control"><br>
        <input v-model="username" placeholder="Username" class="form-control"><br>
        <input v-model="organization" placeholder="Organization" class="form-control"><br>
        <div class="container">
          <br>
          <div class="row">
            <div class="col-md-6">
              <router-link to="/feed" class="btn btn-success font-kozmos">
                Cadastrar
              </router-link>
            </div>
            <div class="col-md-6">
              <router-link to="/login" class="btn btn-primary font-kozmos">
                Ir para Log In
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
export default class Cadastro extends Vue {
  email: string = ""
  password: string = ""
  username: string = ""
  organization: string = ""
  languages: string[] = []
  photo: string = ""
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
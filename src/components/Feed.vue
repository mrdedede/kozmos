<template>
  <div>
    <!-- Navbar -->
    <nav class="background-bar">
      <div class="container py-3">
        <div class="row">
          <div class="col-5">
            <input class="form-control"/>
          </div>
          <div class="col-2">
            <button class="btn btn-light circular">
              <img src="../assets/glass.png" height="15vmin">
            </button>
          </div>
          <div class="row col-5" v-on:click="open()">
            <div class="font-kozmos centralize text-right col-9">
              <a>Meu Perfil</a>
            </div>
            <div class="col-1">
              <img src="../assets/icon-carlos.png" height="35vmin">
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main -->
    <div class="bg-current-courses text-center">
      <h1 class="font-current-courses color-title py-4">CURSANDO</h1>
      <router-link to="/curso">
        <img src="../assets/bandeira-teste.jpg" height="180vmin">
      </router-link>
      <h2 class="font-current-courses color-courses py-4">Inglês Básico</h2>
    </div>
    <div class="text-center font-current-courses my-5">
      <p>Nenhum de seus amigos parece ter novidades...</p>
    </div>

    <!-- Sidebar -->
    <div v-if="isOpen" class="slider-background">
      <div class="row">
        <div class="col-4 offset-8 slider">
          <div class="text-center slider-top">
            <div class="col-2">
              <button class="btn btn-danger" v-on:click="open()">X</button>
            </div>
            <img src="../assets/icon-carlos-sidebar.png" height="150vmin"/>
            <h1 class="font-kozmos">Carlinhos</h1>
            <p class="font-current-courses text-light">carlos@email.com</p>
            <router-link to="/" class="font-kozmos text-right">Editar perfil</router-link>
          </div>
          <div class="slider-bottom text-center">
            <img src="../assets/ultimas-conquistas-sidebar.png" height="150vmin"/>
            <p class="font-current-courses">Ainda sem conquistas... Vamos fazer um curso?</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class Feed extends Vue {
  isOpen: boolean = false
  open() {
    this.isOpen = !this.isOpen
  }
}
</script>

<style  scoped>
.slider-background {
  position: fixed;
  bottom: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}


.slider-top {
  background-image: url('../assets/side-bar-banner.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.slider-bottom {
  background-color: white;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.background-bar {
  background-image: url('../assets/top-bar.jpg');
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.circular {
  border-radius: 100%;
}

.font-kozmos {
  font-family: "BlackGround";
  color: white;
}

.centralize {
  top: 10px;
}

.bg-current-courses {
  background-color: #EBEBEB;
}

.font-current-courses {
  font-family: "Montserrat-SemiBold";
}

.color-title {
  color: #112469;
}

.color-courses {
  color: #7E7E7E
}
</style>
<template>
  <div>
    <nav class="background-bar">
      <div class="container">
        <div class="row">
          <div class="col-1 py-2">
            <router-link to="/curso">
              <h3 class="font-kozmos">
                Voltar
              </h3>
            </router-link>
          </div>
          <div class="col-5 offset-4 py-2">
            <input class="form-control"/>
          </div>
          <div class="col-2 py-2">
            <button class="btn btn-light circular">
              <img src="../assets/glass.png" height="15vmin">
            </button>
          </div>
        </div>
      </div>
    </nav>
    <div class="container py-3">
      <h1 class="font-current-courses text-center color-title">Conjugue o Verbo To Be</h1>
      <div class="row my-3" v-for="question in questions" v-bind:key="question">
        <div class="col-1">
          {{question.question}}
        </div>
        <div class="col-11">
          <input placeholder="Your answer" class="form-control" v-model="question.userInput">
        </div>
      </div>
      <div class="text-center" v-if="!gotWrong">
        <button class="btn btn-success" v-on:click="corrigir()">Enviar</button>
      </div>
      <div v-else class="container text-center">
        <span class="text-danger">Parece que você cometeu alguns erros...</span>
        <div class="row">
          <div class="col-6">
            <button class="btn btn-danger">Ajuda de professor</button>
          </div>
          <div class="col-6">
            <router-link class="btn btn-primary" to="/lesson">Refazer</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Lesson extends Vue {
  questions = [
    {question: 'I', answer: 'am', userInput: ''},
    {question: 'You', answer: 'are', userInput: ''},
    {question: 'He', answer: 'is', userInput: ''},
    {question: 'She', answer: 'is', userInput: ''},
    {question: 'It', answer: 'is', userInput: ''},
    {question: 'We', answer: 'are', userInput: ''},
    {question: 'You', answer: 'are', userInput: ''},
    {question: 'They', answer: 'are', userInput: ''},
  ]

  gotWrong = false

  corrigir() {
    let gotWrong = false
    this.questions.forEach(question => {
      if(question.answer != question.userInput.toLowerCase()) {
        gotWrong = true
      }
    })
    this.gotWrong = gotWrong
  }
}
</script>

<style scoped>

.font-kozmos {
  font-family: "BlackGround";
  color: white;
}

.background-bar {
  background-image: url('../assets/top-bar.jpg');
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.font-current-courses {
  font-family: "Montserrat-SemiBold";
}

.color-title {
  color: #112469;
}

</style>

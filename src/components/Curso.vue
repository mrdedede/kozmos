<template>
  <div>
    <nav class="background-bar">
      <div class="container">
        <div class="row">
          <div class="col-1 py-2">
            <router-link to="/feed">
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
    <div class="text-center py-5 font-kozmos color-title">
      <h1>Ingles Basico</h1>
    </div>
    <div class="container text-center py-5 font-current-courses color-title">
      <span v-if="percentageCleared >= 50">
        Wow! You've already cleared {{percentageCleared}}% of your course! Keep learning!
      </span>
      <span v-else-if="percentageCleared < 50 && percentageCleared < 0">
        You've completed {{percentageCleared}}% of your course.
      </span>
      <span v-else>
        Let's start learning!
      </span>
    </div>
    <div class="container row py-5">
      <div class="col-4 offset-2">
        <ul>
          <li v-for="lesson in lessons" v-bind:key="lesson" class="font.">
            <router-link :to="`/${lesson.link}`">{{lesson.name}}</router-link>
          </li>
        </ul>
      </div>
      <div class="offset-4 text-center">
        <router-link class="btn btn-success" :to="`/${nextLesson.link}`">
          Next lesson!
        </router-link><br>
        <span class="font-current-courses">{{nextLesson.name}}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Curso extends Vue {
  lessons: {link: string, name: string, isCleared: boolean}[] = [
    {link: 'lesson', name: 'lesson 1 - the alphabet', isCleared: true},
    {link: 'lesson', name: 'lesson 2 - verb to be', isCleared: false}
  ]
  percentageCleared: number = 0
  nextLesson: any

  mounted() {
    let completed = 0
    let foundIncomplete = false
    console.log(this.lessons)
    this.lessons.forEach(lesson => {
      if(lesson.isCleared) {
        completed++
      } else {
        if(!foundIncomplete) {
          foundIncomplete = true
          this.nextLesson = lesson
        }
      }
    })
    this.percentageCleared = completed/this.lessons.length * 100
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

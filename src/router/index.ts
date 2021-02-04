import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeScreen from '../components/HomeScreen.vue'
import LoginForm from '../components/Login.vue'
import CadastroForm from '../components/Cadastro.vue'
import Feed from '../components/Feed.vue'
import Curso from '../components/Curso.vue'
import Lesson from '../components/Lesson.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: HomeScreen
  }, {
    path: '/login',
    name: 'Login',
    component: LoginForm,
  }, {
    path: '/cadastro',
    name: 'Cadastro',
    component: CadastroForm
  }, {
    path: '/feed',
    name: 'Feed',
    component: Feed
  }, {
    path: '/curso',
    name: 'Curso',
    component: Curso
  }, {
    path: '/lesson',
    name: "licao",
    component: Lesson
  }
]

const router = new VueRouter({
  routes
})

export default router

import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'matricula',
    component: () => import('../views/MatriculaCursos.vue')
  },
  {
    path: '/alunos',
    name: 'alunos',
    component: () => import('../views/InscricaoAlunos.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
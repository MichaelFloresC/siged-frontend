import { createRouter, createWebHistory } from 'vue-router'

import WelcomeView from '../views/WelcomeView.vue'
import DashboardView from '../views/DashboardView.vue'
import DependenciasView from '../views/DependenciasView.vue'
import SedesView from '../views/SedesView.vue'
import EdificiosView from '../views/EdificiosView.vue'
import AmbientesView from '../views/AmbientesView.vue'
import ResponsablesView from '../views/ResponsablesView.vue'
import ConfiguracionView from '../views/ConfiguracionView.vue'

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: WelcomeView,
    meta: {
      title: 'Bienvenida',
    },
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView,
    meta: {
      title: 'Dashboard',
    },
  },
  {
    path: '/dependencias',
    name: 'dependencias',
    component: DependenciasView,
    meta: {
      title: 'Dependencias',
    },
  },
  {
    path: '/sedes',
    name: 'sedes',
    component: SedesView,
    meta: {
      title: 'Sedes',
    },
  },
  {
    path: '/edificios',
    name: 'edificios',
    component: EdificiosView,
    meta: {
      title: 'Edificios',
    },
  },
  {
    path: '/ambientes',
    name: 'ambientes',
    component: AmbientesView,
    meta: {
      title: 'Ambientes',
    },
  },
  {
    path: '/responsables',
    name: 'responsables',
    component: ResponsablesView,
    meta: {
      title: 'Responsables',
    },
  },
  {
    path: '/configuracion',
    name: 'configuracion',
    component: ConfiguracionView,
    meta: {
      title: 'Configuración',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.afterEach((to) => {
  document.title = `${to.meta.title ?? 'SIGED'} | SIGED`
})

export default router
import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home 
    },
    {
      path: '/transacoes',
      name: 'transacoes',
      component:  () => import(/* webpackChunkName: "about" */ './views/Transacoes.vue'),
    },
    {
      path: '/contas',
      name: 'contas',
      component:  () => import(/* webpackChunkName: "about" */ './views/Contas.vue'),
    },
    {
      path: '/categorias',
      name: 'categorias',
      component:  () => import(/* webpackChunkName: "about" */ './views/Categorias.vue'),
    },
    {
      path: '/tags',
      name: 'tags',
      component:  () => import(/* webpackChunkName: "about" */ './views/Tags.vue'),
    },
    {
      path: '/relatorios',
      name: 'relatorios',
      component:  () => import(/* webpackChunkName: "about" */ './views/Relatorios.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});

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
      path: '/cadastro/transacao',
      name: 'cadastroTransacao',
      props: {tipo:'transacao'},
      component:  () => import(/* webpackChunkName: "about" */ './views/Cadastro.vue'),
    },
    {
      path: '/cadastro/conta',
      name: 'cadastroConta',
      props: {tipo:'conta'},
      component:  () => import(/* webpackChunkName: "about" */ './views/Cadastro.vue'),
    },
    {
      path: '/cadastro/categoria',
      name: 'cadastroCategoria',
      props: {tipo:'categoria'},
      component:  () => import(/* webpackChunkName: "about" */ './views/Cadastro.vue'),
    },
    {
      path: '/cadastro/tag',
      name: 'cadastroTag',
      props: {tipo:'tag'},
      component:  () => import(/* webpackChunkName: "about" */ './views/Cadastro.vue'),
    },
  
  ],
});

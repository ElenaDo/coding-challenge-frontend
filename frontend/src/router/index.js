import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Agent from '../views/Agent.vue';
import Call from '../views/Call.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/agent/:id',
    name: 'AgentLog',
    component: Agent,
    props: true,
  },
  {
    path: '/call/:number',
    name: 'NumberLog',
    component: Call,
    props: true,
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

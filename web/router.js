import {createRouter as _createRouter, createWebHistory} from 'vue-router';

export async function createRouter() {
  return _createRouter({
    history: createWebHistory(),
    routes: [{
      path: '/',
      component: () => import(
        /* webpackChunkName: "LandingPage" */
        './routes/LandingPage.vue'),
      meta: {title: 'Gambling Land'}
    }, {
      path: '/hello',
      component: () => import(
        /* webpackChunkName: "HelloPage" */
        './routes/HelloPage.vue'),
      meta: {title: 'Hello'}
    }, {
      path: '/games',
      component: () => import(
        /* webpackChunkName: "GamesPage" */
        './routes/GamesPage.vue'),
      meta: {title: 'Games'}
    }]
  });
}

import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import souceData from '../data.json'

const routes = [
  { path: "/", name: "Home", component: Home },
  {
    path: '/protected',
    name: 'Protected',
    component: () => import('../views/Protected.vue'),
    meta: {
      requiresAuth: true
    
    }
  },
  {
    path: "/destionation/:id/:slug",
    name: "destination.show",
    component: () => import("../views/DestinationShow.vue"),
    props: (route) => ({ ...route.params, id: parseInt(route.params.id) }),
    beforeEnter(to, from) {
      const exists = souceData.destinations.find(
        destination => destination.id === parseInt(to.params.id)
      )
      if (!exists) {
        return { 
          name: 'NotFound',
          params: { pathMatch: to.path.split('/').slice(1) },
          query: to.query,
          hash: to.hash,
        }
      }
    },
    children: [
      {
        path: ":experienceSlug",
        name: "experience.show",
        component: () => import("../views/ExperienceShow.vue"),
        props: (route) => ({ ...route.params, id: parseInt(route.params.id) }),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import("../views/NotFound.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || new Promise((resolve) => {
      setTimeout(() => {
        resolve({ top: 0, behavior: 'smooth' })
      }, 300)
    })
  },
});

router.beforeEach((to, from, next) => {

})

export default router;

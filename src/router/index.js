import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import contactview from '../views/contactview.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
      title:'Home'

      }  
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      
    },
    {
      path: '/contact',
      name: 'contact',
      component: contactview,
      // component: contactview
      meta: {
      title:'Contact'

      }  
    }
    
  ]
})

router.beforeEach((to, from) => {
  document.title = to.meta?.title ?? 'Default Title'
})


export default router;

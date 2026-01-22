import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import CreatePost from '../views/CreatePost.vue'
import Profile from '../views/Profile.vue'
import PostDetail from '../views/PostDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/create-post',
      name: 'create-post',
      component: CreatePost,
      meta: { requiresAuth: true } 
    },
    {
      path: '/edit-post/:id',
      name: 'edit-post',
      component: CreatePost,
      props: true, 
      meta: { requiresAuth: true }
    },
    {
      path: '/post/:id', 
      name: 'post-detail',
      component: PostDetail,
      props: true 
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta: { requiresAuth: true }
    },
    {
      path: '/:pathMatch(.*)*',redirect: '/'
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
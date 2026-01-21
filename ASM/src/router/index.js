import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'      // Trang Đăng ký
import CreatePost from '../views/CreatePost.vue'  // Trang Đăng bài
import Profile from '../views/Profile.vue'        // Trang Cá nhân
import PostDetail from '../views/PostDetail.vue'  // Trang Chi tiết bài viết

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
      component: CreatePost
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/post/:id', 
      name: 'post-detail',
      component: PostDetail
    }
  ]
})

export default router
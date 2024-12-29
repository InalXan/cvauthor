import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProfileView from '@/views/ProfileView.vue'
import FeedbackView from '@/views/FeedbackView.vue'
import MissionView from '@/views/MissionView.vue'
import LoginView from '@/views/auth/LoginView.vue'
import RegisterView from '@/views/auth/RegisterView.vue'
import ForgotView from '@/views/auth/ForgotView.vue'
import UserProfileView from '@/views/auth/UserProfileView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //login register
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/signup',
      name: 'register',
      component: RegisterView,
    },

    {
      path: '/forgot-password',
      name: 'forgotpassword',
      component: ForgotView,
    },
    {
      path: '/user-profile',
      name: 'user-profile',
      component: UserProfileView,
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
    },

    {
      path: '/feedback',
      name: 'feedback',
      component: FeedbackView,
    },
    {
      path: '/mission',
      name: 'mission',
      component: MissionView,
    },
  ],
})

export default router

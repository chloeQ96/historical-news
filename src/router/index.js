import { createRouter, createWebHistory } from 'vue-router';
import NewsPost from '@/views/NewsPost.vue';
import NewsDetail from '@/views/NewsDetail.vue';

const routes = [
  {
    path: '/',
    name: 'newspost',
    component: NewsPost
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: NewsDetail
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

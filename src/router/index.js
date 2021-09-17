import { createRouter, createWebHistory } from 'vue-router';
import EventList from '@/views/EventList.vue';
import EventDetails from '@/views/EventDetails.vue';
import EventCreate from '@/views/EventCreate.vue';
import About from '@/views/About.vue';
import ErrorDisplay from '@/views/ErrorDisplay.vue';

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList,
  },
  {
    path: '/event/:id',
    name: 'EventDetails',
    props: true,
    component: EventDetails,
  },
  {
    path: '/event/create',
    name: 'EventCreate',
    component: EventCreate,
  },
  {
    path: '/error/:error',
    name: 'ErrorDisplay',
    component: ErrorDisplay,
    props: true,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

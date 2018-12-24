import Vue from 'vue'
import Router from 'vue-router'
import About from './components/About'
import Offer from './components/Offer'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Gallery from './components/Gallery.vue'
import Card from './components/Card.vue'
import Home from './components/Home.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/offer',
      name: 'Offer',
      component: Offer
    },
    {
      path: '/testimonials',
      name: 'Testimonials',
      component: Testimonials
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/gallery',
      name: 'Gallery',
      component: Gallery
    },
    {
      path: '/card',
      name: 'Card',
      component: Card
    }
  ]
})

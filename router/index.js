import { createRouter, createWebHistory } from 'vue-router'
import appAbout from '../components/appAbout.vue'
import appIndex from '../components/appIndex.vue'
import appCheckout from '../views/appCheckout.vue'
import appPayment from '../views/appPayment.vue'
import appProfile from '../views/appProfile.vue'
import PageNotFound from '../views/PageNotFound.vue'
import appNavbar from '../components/appNavbar.vue'
import appJacketdenimVue from '../components/appJacketdenim.vue'
import appEditprofilVue from '../views/appEditprofil.vue'
import appEditalamat from '../views/appEditalamat.vue'
import appStatuspesanan from '@/views/appStatuspesanan.vue'
import appOrder from '@/views/appOrder.vue'
import appOpsikurir from '@/views/appOpsikurir.vue'
import appLogin from '@/views/appLogin.vue'
import appRegistrasi from '@/views/appRegistrasi.vue'
import appOpsialamat from '@/views/appOpsialamat.vue'
import datauser from '@/views/datauser'




const routes = [
  {
    path: '/Index',
    name: 'Index',
    component: appIndex,
  },
  {
    path: '/About', 
    name: 'About',
    component: appAbout,
  },
  {
    path: '/Jacketdenim',
    name: 'Jacketdenim',
    component: appJacketdenimVue,
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: appProfile,
  },
  {
    path: '/Checkout',
    name: 'Chechout',
    component: appCheckout,
  },
  {
    path: '/Payment',
    name: 'Payment',
    component: appPayment,
  }, 
  {
    path: '/Navbar',
    name: 'Navbar',
    component: appNavbar,
  },
  {
    path: '/:catchAll(.*)*',
    name: "PageNotFound",
    component: PageNotFound,
  },
  {
    path: '/Editprofil',
    name: 'Editprofil',
    component: appEditprofilVue,

  },
  {
    path: '/Editalamat',
    name: 'Editalamat',
    component: appEditalamat,
  },
  {
    path: '/Statuspesanan',
    name:'Statuspesanan',
    component: appStatuspesanan,
  },
  {
    path: '/Order',
    name: 'Order',
    component: appOrder,
  },
  {
    path: '/Opsikurir',
    name: 'Opsikurir',
    component: appOpsikurir,
  },
  {
    path: '/Login',
    name: 'Login',
    component: appLogin,
  },
  {
    path: '/Registrasi',
    name: 'Registrasi',
    component: appRegistrasi,
  },
  {
    path: '/Opsialamat',
    name: 'Opsialamat',
    component: appOpsialamat,
  },
  {
    path: '/datauser',
    name: 'datauser',
    component: datauser,
  }

]


const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.replace(router.currentRoute.value.fullPath)

export default router

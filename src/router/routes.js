
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/IndexPage.vue'), name: 'home' }
    ]
  },
  {
    path: '/biometric',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/BiometricPage.vue'), name: 'biometric' }
    ]
  },
  // {
  //   path: '/biometric',
  //   component: () => import('src/pages/IndexPage.vue'), name: 'login'
  // },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes

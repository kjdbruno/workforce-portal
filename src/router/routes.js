
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
  {
    path: '/leave',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/LeavePage.vue'), name: 'fileleave' }
    ]
  },
  {
    path: '/my/leave',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/LeaveTrackingPage.vue'), name: 'myleave' }
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

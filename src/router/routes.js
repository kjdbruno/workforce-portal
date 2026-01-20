import { useAuthStore } from 'src/stores/auth-store';
import { usePreferenceStore } from 'src/stores/preference-store';
import { useRecruitmentStore } from 'src/stores/recruitment-store';
import { useEmployeeStore } from 'src/stores/employee-store';

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/IndexPage.vue'), name: 'login' }
    ]
  },
  {
    path: '/biometric',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/BiometricPage.vue'), name: 'biometric' }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes

export default [
  {
    path: '/main',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/index') },
      { path: 'hg/POP1', component: () => import('pages/pop/higienizacao/POP1') },
      { path: 'hg/POP2', component: () => import('pages/pop/higienizacao/POP2') },
      { path: 'hg/POP3', component: () => import('pages/pop/higienizacao/POP3') },
      { path: 'hg/POP4', component: () => import('pages/pop/higienizacao/POP4') },
      { path: 'hg/POP5', component: () => import('pages/pop/higienizacao/POP5') },
      { path: 'hg/POP6', component: () => import('pages/pop/higienizacao/POP6') },
      { path: 'hg/POP7', component: () => import('pages/pop/higienizacao/POP7') },
      { path: 'hg/POP8', component: () => import('pages/pop/higienizacao/POP8') },
      { path: 'hg/POP9', component: () => import('pages/pop/higienizacao/POP9') },
      { path: 'hg/POP10', component: () => import('pages/pop/higienizacao/POP10') },
      { path: 'hg/POP11', component: () => import('pages/pop/higienizacao/POP11') },
      { path: 'hg/POP12', component: () => import('pages/pop/higienizacao/POP12') },
      { path: 'hg/POP13', component: () => import('pages/pop/higienizacao/POP13') },
      { path: 'hg/POP14', component: () => import('pages/pop/higienizacao/POP14') },
      { path: 'hg/POP15', component: () => import('pages/pop/higienizacao/POP15') },
      { path: 'hg/POP16', component: () => import('pages/pop/higienizacao/POP16') },
      { path: 'hg/POP17', component: () => import('pages/pop/higienizacao/POP17') },
      { path: 'hg/POP18', component: () => import('pages/pop/higienizacao/POP18') },
      { path: 'hg/POP19', component: () => import('pages/pop/higienizacao/POP19') },
      { path: 'hg/POP20', component: () => import('pages/pop/higienizacao/POP20') },
      { path: 'hg/POP21', component: () => import('pages/pop/higienizacao/POP21') },
      { path: 'PGRSS1', component: () => import('pages/pgrss/PGRSS1') },
      { path: 'PGRSS2', component: () => import('pages/pgrss/PGRSS2') },
      { path: 'PGRSS3', component: () => import('pages/pgrss/PGRSS3') },
      { path: 'PGRSS4', component: () => import('pages/pgrss/PGRSS4') },
      { path: 'PGRSS5', component: () => import('pages/pgrss/PGRSS5') },
      { path: 'PGRSS6', component: () => import('pages/pgrss/PGRSS6') },
      { path: 'PGRSS7', component: () => import('pages/pgrss/PGRSS7') }
    ]
  },
  {
    path: '/',
    component: () => import('pages/home')
  },
  {
    path: '/cps',
    component: () => import('pages/cadastro_ps')
  },
  {
    path: '/login',
    component: () => import('pages/login')
  },
  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]

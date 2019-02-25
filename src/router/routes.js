
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'pedidos', component: () => import('pages/Pedidos.vue') },
      { path: 'personalizar-pedido', component: () => import('pages/Personalizar.vue') },
      { path: 'resumo-pedido', component: () => import('pages/Resumo.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes

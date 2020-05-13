const routesPath = {
  home: '/',
}

const noAuthenRoutes = [
  {
    path: routesPath.home,
    exact: true,
    component: 'home'
  }
]

export { noAuthenRoutes }

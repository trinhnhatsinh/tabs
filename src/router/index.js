import React, { Suspense } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom'
import { noAuthenRoutes } from '@router/router'

const Home = React.lazy(() => import(`../pages/home`))

class RouterComponent extends React.PureComponent {
  render() {
    return (
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            {noAuthenRoutes.map(({ component, ...routeProps }, index) => (
              <Route
                key={index.toString()}
                {...routeProps}
                render={() => {
                  const Component = React.lazy(() =>
                    import(`../pages/${component}`)
                  )
                  return <Component />
                }}
              />
            ))}
            {/* <Redirect to={routesPath.notfound} /> */}
          </Switch>
        </Suspense>
      </Router>
    )
  }
}

export default RouterComponent

import React from 'react'
import {
  Route,
  Redirect,
  Switch,
  HashRouter
} from 'react-router-dom'

import AppContainer from '@/containers/AppContainer'
import HomeContainer from '@/containers/HomeContainer'

const routes = (
  <HashRouter basename='app'>
    <AppContainer>
      <Switch>
        <Route path='/home' component={HomeContainer} />
      </Switch>
      <Redirect from='/' to='/home' />
    </AppContainer>
  </HashRouter>
  )

export default routes

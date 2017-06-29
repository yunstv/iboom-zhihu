import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'

// 导航条
import AppHeader from '@/containers/AppHeader'
// 内容块
import AppContainers from '@/containers/AppContainers'

class HomeContainer extends Component {
  render () {
    return (
      <main>
      	<AppHeader />
      	<AppContainers />
      </main>
    )
  }
}

export default withRouter(connect()(HomeContainer))

import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'

// logo组件
import ComponentBrand from '@/components/Brand'
// 链接组件
import ComponentLink from '@/components/Links'
// 搜索组件
import ComponentSearchBar from '@/components/SearchBar'
// 消息通知组件
import ComponentUserInfo from '@/components/UserInfo'

class AppHeader extends Component {
  render () {
    return (
      <header className="Sticky AppHeader is-fixed">
      	<div className="AppHeader-inner">
      		<ComponentBrand />
      		<ComponentLink />
      		<ComponentSearchBar />
      		<ComponentUserInfo />
      	</div>
      </header>
    )
  }
}

export default withRouter(connect()(AppHeader))

import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'

// 推荐组件
import ComponentRecommend from '@/components/Recommend'
// 主体内容
import ComponentTopstoryItem from '@/components/TopstoryItem'
// 右侧边内容
import ComponentTopstorySideBar from '@/components/TopstorySideBar'

class AppContainers extends Component {
  render () {
    return (
      <section className="Sticky AppRecommend Topstory-container">
        <section className="Topstory-mainColumn">
          <div className="TopstoryHeader Card">
    		    <ComponentRecommend />
          </div>
          <div className="TopstoryMain">
            <ComponentTopstoryItem />
          </div>
        </section>
        <section className="TopstorySideBar">
          <ComponentTopstorySideBar />
        </section>
      </section>
    )
  }
}

export default withRouter(connect()(AppContainers))

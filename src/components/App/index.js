import React, {Component} from 'react'
import { Link, NavLink } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './index.styl'
let cx = classNames.bind(styles)

class App extends Component {
  render () {
    return (
      <div className={cx('app-p-box')}>
        {this.props.children}
      </div>
    )
  }
}

export default App

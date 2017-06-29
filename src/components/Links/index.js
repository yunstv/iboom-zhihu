import React from 'react'
class LinkChild extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick () {
		window.location.href = this.props.links;
	}

	render () {
		return (
			<span onClick={this.handleClick} className="AppHeader-navItem is-active">
				{this.props.name}
			</span>
		);
	}
}

class Links extends React.Component {
	render () {
		let arr = [{name: '首页', links: 'https://www.zhihu.com/'},{name: '发现', links: 'https://www.zhihu.com/explore'},{name: '话题', links: 'https://www.zhihu.com/topic'}];
		let CompArr = arr.map(function(item, index){
			return <LinkChild key={index} name={item.name} links={item.links}/>
		});

		return (
			<nav className="AppHeader-nav">
				{CompArr}
			</nav>
		);
	}
}
export default Links
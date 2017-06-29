import React from 'react'
class RecommendChild extends React.Component {
	constructor (props) {
		super(props);
	}
	render () {
		return (
			<span className="Topstoryspan" rel={this.props.id}>{this.props.name}</span>		
		);
	}
}
class Recommend extends React.Component {
	constructor (props) {
		super(props);
	}
	render () {
		let recArr = [{name: '电子竞技',id: '001'},{name: '英雄联盟',id: '002'},{name: '布姆电竞',id: '003'}]
		let recRender = recArr.map((item, index)=>{
			return <RecommendChild key={index} name={item.name} id={item.id} />	
		});
		return (
			<div>
				{recRender}
			</div>
		);
	}
}
export default Recommend
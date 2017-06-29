import React from 'react'
class UserInfoCard extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			barnumebr: 30,
			barall:3124
		}
	}
	render () {
		return (
			<div className="StickyCard">
				<div className="Popover">
					<p className="StickyCard-p">关注者</p>
					<p>{this.state.barnumebr}</p>
				</div>
				<div className="Popover StickyCard-i"></div>
				<div className="Popover">
					<p className="StickyCard-p">被浏览</p>
					<p>{this.state.barall}</p>
				</div>
			</div>
		);
	}
}
class UserInfoData extends React.Component {
	constructor (props) {
		super(props);
	}
	render () {
		return (
			<div className="StickyHandle">
				<button className="Button QuestionAskButton SearchBar-askButton Button--primary Button--blue" type="button">关注提问</button>
				<button className="Button QuestionAskButton SearchBar-askButton Button--primary Button--albedo" type="button">写回答</button>
			</div>
		);
	}
}
class TopstorySideBar extends React.Component {
	constructor (props) {
		super(props);
	}
	render () {
		return (
			<div className="Sticky Card">
				<UserInfoCard />
				<UserInfoData />
			</div>
		);
	}
}
export default TopstorySideBar
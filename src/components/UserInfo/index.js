import React from 'react'
import ImgUrl from '@/assets/1.jpg'
class Small extends React.Component {
	constructor (props) {
		super(props);
	}
	render () {
		return (
			<div className="Popover PushNotifications AppHeader-notifications">
				<button className="Button PushNotifications-icon Button--plain" type="button">
					<svg viewBox="0 0 20 22" className="Icon Icon--news" width="20" height="20" aria-hidden="true" style={{"height": "20px", "width": "20px"}}>
						<title></title>
						<g>
							<path d="M2.502 14.08C3.1 10.64 2 3 8.202 1.62 8.307.697 9.08 0 10 0s1.694.697 1.797 1.62C18 3 16.903 10.64 17.497 14.076c.106 1.102.736 1.855 1.7 2.108.527.142.868.66.793 1.206-.075.546-.542.95-1.09.943H1.1C.55 18.34.084 17.936.01 17.39c-.075-.547.266-1.064.794-1.206.963-.253 1.698-1.137 1.698-2.104zM10 22c-1.417.003-2.602-1.086-2.73-2.51-.004-.062.02-.124.063-.17.043-.045.104-.07.166-.07h5c.063 0 .124.025.167.07.044.046.067.108.063.17-.128 1.424-1.313 2.513-2.73 2.51z">
							</path>
						</g>
					</svg>
				</button>
			</div>
		);
	}
}
class Inform extends React.Component {
	constructor (props) {
		super(props);
	}
	render () {
		return (
			<div>
				<div className="Popover Messages AppHeader-messages">
					<button className="Button Messages-icon Button--plain" type="button">
						<svg viewBox="0 0 20 20" className="Icon Icon--message" width="20" height="20" aria-hidden="true" style={{"height": "20px", "width": "20px"}}>
							<title></title>
							<g>
								<path d="M9 0C3.394 0 0 4.13 0 8c0 1.654.522 3.763 2.014 5.566.314.292.518.82.454 1.17-.165 1.488-.842 1.905-.842 1.905-.328.332.105.67.588.582 1.112-.2 2.07-.58 3.526-1.122.4-.202.464-.147.78-.078C11.524 17.764 18 14 18 8c0-3.665-3.43-8-9-8z">
								</path>
								<path d="M19.14 9.628c.758.988.86 2.01.86 3.15 0 1.195-.62 3.11-1.368 3.938-.21.23-.354.467-.308.722.12 1.073.614 1.5.614 1.5.237.24-.188.563-.537.5-.802-.145-1.494-.42-2.545-.81-.29-.146-.336-.106-.563-.057-2.043.712-4.398.476-6.083-.926 5.964-.524 8.726-3.03 9.93-8.016z">
								</path>
							</g>
						</svg>
						<span className="Messages-count">2</span>
					</button>
				</div>
			</div>
		);
	}
}
class UserData extends React.Component {
	constructor (props) {
		super(props);
	}
	render () {
		return (
			<div className="AppHeader-profile">
				<div className="Popover AppHeader-menu">
					<button className="Button AppHeader-profileEntry Button--plain" type="button">
						<img className="Avatar AppHeader-profileAvatar" width="30" height="30" src={ImgUrl} />
					</button>
				</div>
			</div>
		);
	}
}
class UserInfo extends React.Component {
	constructor (props) {
		super(props);
	}
	render () {
		return (
			<div className="AppHeader-userInfo">
				<Small />
				<Inform />
				<UserData />
			</div>
		);
	}
}

export default UserInfo
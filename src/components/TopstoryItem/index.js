import React from 'react'
class TopstoryItemChildActions extends React.Component {
	constructor (props) {
		super(props);
	}
	render () {
		return (
			<div className="ContentItem-actions">
				<span>
					<button className="Button VoteButton VoteButton--up" aria-label="赞同" type="button">
						<svg viewBox="0 0 20 18" className="Icon VoteButton-upIcon Icon--triangle" width="9" height="16" aria-hidden="true" style={{"height": "16px", "width": "9px"}}>
							<title></title>
							<g>
								<path d="M0 15.243c0-.326.088-.533.236-.896l7.98-13.204C8.57.57 9.086 0 10 0s1.43.57 1.784 1.143l7.98 13.204c.15.363.236.57.236.896 0 1.386-.875 1.9-1.955 1.9H1.955c-1.08 0-1.955-.517-1.955-1.9z"></path>
							</g>
						</svg>
						3.7K
					</button>
					<button className="Button VoteButton VoteButton--down" aria-label="反对" type="button">
						<svg viewBox="0 0 20 18" className="Icon VoteButton-downIcon Icon--triangle" width="9" height="16" aria-hidden="true" style={{"height": "16px", "width": "13px"}}>
							<title></title>
							<g>
								<path d="M0 15.243c0-.326.088-.533.236-.896l7.98-13.204C8.57.57 9.086 0 10 0s1.43.57 1.784 1.143l7.98 13.204c.15.363.236.57.236.896 0 1.386-.875 1.9-1.955 1.9H1.955c-1.08 0-1.955-.517-1.955-1.9z"></path>
							</g>
						</svg>
					</button>
				</span>
				<button className="Button ContentItem-action Button--plain" type="button">
					<svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" className="Icon Icon--comment Icon--left" width="12" height="16" aria-hidden="true" style={{"height": "16px", "width": "12px"}} >
						<title></title>
						<g>
							<path d="M7.24 16.313c-.272-.047-.553.026-.77.2-1.106.813-2.406 1.324-3.77 1.482-.16.017-.313-.06-.394-.197-.082-.136-.077-.308.012-.44.528-.656.906-1.42 1.11-2.237.04-.222-.046-.45-.226-.588C1.212 13.052.027 10.73 0 8.25 0 3.7 4.03 0 9 0s9 3.7 9 8.25-4.373 9.108-10.76 8.063z"></path>
						</g>
					</svg>
					{this.props.number} 条评论
				</button>
				<div className="Popover ShareMenu ContentItem-action">
					<div>
						<button className="Button Button--plain" type="button">
							<svg viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg" className="Icon Icon--share Icon--left" width="13" height="16" aria-hidden="true" style={{"height": "16px", "width": "13px"}} >
								<title></title>
								<g>
									<path d="M.93 3.89C-.135 4.13-.343 5.56.614 6.098L5.89 9.005l8.168-4.776c.25-.128.477.197.273.388L7.05 10.66l.926 5.953c.18 1.084 1.593 1.376 2.182.456l9.644-15.243c.584-.892-.212-2.03-1.234-1.796L.93 3.89z"></path>\
								</g>
							</svg>
							分享
						</button>
					</div>
				</div>
				<button className="Button ContentItem-action Button--plain" type="button">
					<svg viewBox="0 0 20 20" className="Icon Icon--star Icon--left" width="13" height="16" aria-hidden="true" style={{"height": "16px", "width": "13px"}}>
						<title></title>
						<g>
							<path d="M3.515 17.64l.918-5.355-3.89-3.792c-.926-.902-.64-1.784.64-1.97L6.56 5.74 8.964.87c.572-1.16 1.5-1.16 2.072 0l2.404 4.87 5.377.783c1.28.186 1.566 1.068.64 1.97l-3.89 3.793.918 5.354c.22 1.274-.532 1.82-1.676 1.218L10 16.33l-4.808 2.528c-1.145.602-1.896.056-1.677-1.218z">
							</path>
						</g>
					</svg>
					收藏
				</button>
				<button className="Button ContentItem-action Button--plain" type="button">
					<svg width="14" height="16" viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg" className="Icon Icon--thank Icon--left" aria-hidden="true" style={{"height": "16px", "width": "13px"}}>
						<title></title>
						<g>
							<path d="M0 5.437C0 2.505 2.294.094 5.207 0 7.243 0 9.092 1.19 10 3c.823-1.758 2.65-3 4.65-3C17.546 0 20 2.507 20 5.432 20 13.24 11.842 18 10 18 8.158 18 0 13.24 0 5.437z" fill-rule="evenodd">
							</path>
						</g>
					</svg>
					感谢
				</button>
				<div className="Popover ContentItem-action">
					<button className="Button Button--plain" type="button">
						<svg viewBox="0 0 18 4" className="Icon Icon--dots" width="14" height="16" style={{"height": "16px", "width": "13px"}}>
							<title></title>
							<g><g>
							<circle cx="2" cy="2" r="2"></circle>
							<circle cx="9" cy="2" r="2">
							</circle><circle cx="16" cy="2" r="2">
							</circle>
							</g></g>
						</svg>
					</button>
				</div>
			</div>
		);
	}
}
class TopstoryItemChildButton extends React.Component {
	constructor (props) {
		super(props);
	}
	render () {
		return (
			<button className="Button TopstoryItem-rightButton Button--plain" data-tooltip="不感兴趣" data-tooltip-position="bottom" type="button"><svg viewBox="0 0 14 14" className="Icon Icon--remove" width="10" height="10" style={{"height": "10px", "width": "10px"}}><title></title><g><path d="M8.486 7l5.208-5.207c.408-.408.405-1.072-.006-1.483-.413-.413-1.074-.413-1.482-.005L7 5.515 1.793.304C1.385-.103.72-.1.31.31-.103.724-.103 1.385.305 1.793L5.515 7l-5.21 5.207c-.407.408-.404 1.072.007 1.483.413.413 1.074.413 1.482.005L7 8.485l5.207 5.21c.408.407 1.072.404 1.483-.007.413-.413.413-1.074.005-1.482L8.485 7z"></path></g></svg></button>		
		);
	}
}
class TopstoryItemChild extends React.Component {
	constructor (props) {
		super(props);
	}
	render () {
		return (
			<div className="Card TopstoryItem">
				<TopstoryItemChildButton />
				<h1>{this.props.name}</h1>
				<p>
					{this.props.content}
				</p>
				<TopstoryItemChildActions number={this.props.number}/>
			</div>		
		);
	}
}
class TopstoryItem extends React.Component {
	constructor (props) {
		super(props);
	}
	render () {
		let recArr = [
			{name: '这条新闻里标价30万的镯子实际价格大约是多少？', number: '233', content: '这事我不做发言权，我又来回答无关紧要的问题了，因为我只想问问一些同行，你们做生意不？！还有一些整天看热闹仇富的，你们是不是一点自身利益都没有啊？ 估价多少？8W，10W，16W，不是你们说了算！什么估价…'},
			{
				name: '为什么感觉Steam突然火了？',
				number: '1233',
				content: '我提一句，其实你们要感谢一下完美世界，steam的专线是完美出资拉的。如果没有完美的线，steam的下载速度就跟坑爹的PSN一样了，PS4还有实体版来降低网速带来的不便，Steam就没那么幸运了。加上完美在北京的关系和他们的努力公关，使得steam没有变成推特或脸叔...'
			}
		]
		let recRender = recArr.map((item, index)=>{
			return <TopstoryItemChild key={index} name={item.name} content={item.content} number={item.number} />	
		});
		return (
			<div>
				{recRender}
			</div>
		);
	}
}
export default TopstoryItem
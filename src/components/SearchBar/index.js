import React from 'react'

class SearchBar extends React.Component {
	constructor (props) {
		super(props);
	}
	render () {
		return (
			<div className="SearchBar">
				<div className="Input-wrapper">
					<input type="text" maxLength="100" className="Input" placeholder="搜索你感兴趣的内容…" ref={(input) => {this.textInput = input;}} />
					<div className="Input-after"><button className="Button SearchBar-searchIcon Button--primary" aria-label="搜索" type="button"><svg viewBox="0 0 16 16" className="Icon Icon--search" width="16" height="16" aria-hidden="true" style={{"height": "16px", "width": "16px"}}><title></title><g><path d="M12.054 10.864c.887-1.14 1.42-2.57 1.42-4.127C13.474 3.017 10.457 0 6.737 0S0 3.016 0 6.737c0 3.72 3.016 6.737 6.737 6.737 1.556 0 2.985-.533 4.127-1.42l3.103 3.104c.765.46 1.705-.37 1.19-1.19l-3.103-3.104zm-5.317.925c-2.786 0-5.053-2.267-5.053-5.053S3.95 1.684 6.737 1.684 11.79 3.95 11.79 6.737 9.522 11.79 6.736 11.79z"></path></g></svg></button></div>
				</div>
				<button className="Button QuestionAskButton SearchBar-askButton Button--primary Button--blue" type="button">提问</button>
			</div>
		);
	}
}
export default SearchBar
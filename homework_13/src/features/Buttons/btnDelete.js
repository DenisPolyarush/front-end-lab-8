import React, { Component } from 'react';

class btnClose extends Component {
	constructor(props){
		super(props);
		this.handleBtnDeleteClick = this.handleBtnDeleteClick.bind(this)
	}
	handleBtnDeleteClick(){
		this.props.click(this.props.targetId)
	}
	render(){
		return(
			<i 
				style={{display : this.props.setStyle}}
				onClick={ this.handleBtnDeleteClick }
				className="material-icons btn-close"
			>
			close
			</i>
		)
	}
}

export default btnClose;
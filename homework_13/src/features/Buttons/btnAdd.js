import React, { Component } from 'react'

class btnAdd extends Component {
	constructor(props){
		super(props);
		this.handleBtnClick = this.handleBtnClick.bind(this)
	}
	handleBtnClick(){
		this.props.onBtnClick(this.props.targetId)
	}

	render(){

		return(
			<button onClick={this.handleBtnClick}>
				<i className="material-icons btn-add">add</i>
				Add
			</button>
		)
	}
}

export default btnAdd;
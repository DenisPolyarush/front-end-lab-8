import React, { Component } from 'react';
import ColorItem from './ColorItem'

class ColorList extends Component {
	constructor(props){
		super(props)
	}

	render(){
		let colorItem;
		if(!this.props.items){
			colorItem = <p className="loading">Loading...</p>
		}else if(this.props.items.length === 0){
			colorItem = <p className="loading">There are no colors found</p>
		}else{
			colorItem = this.props.items.map(item => {
					return (
						<ColorItem 
							onBtnClick={this.props.onSelected}
							id={item.id}
							key={item.id}
							color={item.color}
						/>
					);
				})
		}
		return(
			<div className="color-list">
				{ colorItem }
			</div>	
		)
	}

}

export default ColorList;
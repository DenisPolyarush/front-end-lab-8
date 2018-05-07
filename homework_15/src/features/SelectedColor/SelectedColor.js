import React, { Component } from 'react';
import BtnClose from '../Buttons/btnDelete';

class SelectedColor extends Component{
	constructor(props){
		super(props);
	}

	render(){
		let selectArr;
		let visible = 'none';
		const defaultItem = [
			{ color : '#fff', border : '2px solid #DCD6F7', id : 100 },
		  { color : '#fff', border : '2px solid #A6B1E1', id : 200 },
		  { color : '#fff', border : '2px solid #8783D1', id : 300 }
		]
		
		if(this.props.selectedColor.length === 0){
			selectArr = defaultItem;
			visible = 'none'
		}else{
			let n = this.props.selectedColor.length;
			selectArr = [];

			if(n > 5){
				for(let i = n; i !== n - 5; i--){
					selectArr.unshift(this.props.selectedColor[i - 1])
				}
			}else{
				selectArr = this.props.selectedColor;
			}
			
			visible = 'block'
		}

		return(
			<div className='selected'>
				{selectArr.map( item => {
					return (
						<div 
							key={item.id}
							className='selected-item'
							style={{ backgroundColor : item.color, border : item.border }}
						>
							<BtnClose  
								targetId={ item.id } 
								setStyle={visible}
								click={ this.props.onDeleteSelected }
							/>
						</div>
					)
				})}
			</div>
		)
	}
}

export default SelectedColor;
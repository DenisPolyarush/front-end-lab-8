import React from 'react';
import Btn from './btnAdd'

const ColorItem = props => {
	return(
		<div
			id={ props.id } 
			style={{ backgroundColor : props.color }}
			className='color-item'>
			<Btn 
				targetId={ props.id }
				onBtnClick={props.onBtnClick}/>
		</div>
		)
}

export default ColorItem;
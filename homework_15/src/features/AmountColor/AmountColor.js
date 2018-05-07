import React, { Component } from 'react';

class AmountColor extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<p className='amount'>
				Colors : {this.props.amount.length}
			</p>
		)
	}
}
export default AmountColor;
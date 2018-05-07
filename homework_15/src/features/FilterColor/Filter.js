import React, { Component } from 'react'

class FilterColor extends Component {
	constructor(props){
		super(props);
		this.handleFilterValueChange = this.handleFilterValueChange.bind(this)
	}
	handleFilterValueChange(e) {
    this.props.onFilterValueChange(e.target.value);
  }

	render(){
		return (
			<form className='filter'>
				<input 
					value={this.props.filterColor}
					onChange={this.handleFilterValueChange}
					placeholder={`Color's name, tags`}
					type="text"
				/>
			</form>
		)
	}
}

export default FilterColor;
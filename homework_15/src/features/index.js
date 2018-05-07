import React, { Component } from 'react';
import ColorList from './ColorList/ColorList'
import Filter from './FilterColor/Filter'
import AmountColor from './AmountColor/AmountColor'
import SelectedColor from './SelectedColor/SelectedColor'

class Home extends Component {
	constructor(props){
		super(props);
		this.state = { store : [], allItems : false, filterColor : '', selectedItems : [] };
		this.handleFiltervalueChange= this.handleFiltervalueChange.bind(this);
		this.handleSelected= this.handleSelected.bind(this);
		this.handleDeleteSelected= this.handleDeleteSelected.bind(this);
	}

	componentDidMount(){
		fetch('https://epam-fe-homework-15.firebaseio.com/colors.json')
	  .then( response => {
	  	return response.json();
	  }).then( data => {
					this.setState({ allItems : data, store : data });
	    })
	  .catch(function(err) {
	    console.log('Fetch Error :-S', err);
	  });
	}

	handleSelected(id){
		const select = this.state.selectedItems;

		select.push(this.state.allItems.find(val => id === val.id));
		
		this.setState({
			allItems : this.state.allItems.filter(val => id !== val.id),
			store : this.state.store.filter(val => id !== val.id),
			selectedItems : select
		})
	}

	handleDeleteSelected(id){
		let currentAllItems = this.state.allItems;
		let currentStoreItems = this.state.store;
		
		currentAllItems.push(this.state.selectedItems.find(val => id === val.id));
		currentStoreItems.push(this.state.selectedItems.find(val => id === val.id));
		
		this.setState({
			selectedItems : this.state.selectedItems.filter(val => id !== val.id),
			allItems : currentAllItems,
			store : currentStoreItems
		})
	}

	handleFiltervalueChange(filterColor){
		const res = [];
		this.state.store.map(item => {
			if (item.tags.toString().indexOf(filterColor) === -1 ){
	    	return;
	 	  }
	 	  res.push(item)
		})
    this.setState({
      filterColor: filterColor,
      allItems : res
    });
  }
	
	render(){
		let	sortAllItems;
		if(this.state.allItems){
			sortAllItems = this.state.allItems.sort((a, b) => {
			  if (a.id > b.id) return 1;
			  if (a.id < b.id) return -1;
			  return 0
			});
		}else{
			sortAllItems = this.state.allItems;
		}
		
		return(
			<React.Fragment>
				<div className='header'>
					<Filter 
						filterColor={ this.state.filterColor }
						onFilterValueChange={ this.handleFiltervalueChange }
					/>
					<div className='header-right'>
						<SelectedColor 
							onDeleteSelected={ this.handleDeleteSelected }
							selectedColor={ this.state.selectedItems } 
						/>
						<AmountColor amount={ this.state.allItems } />
					</div>
				</div>
				<ColorList 
					onSelected={ this.handleSelected }
					filterColor={ this.state.filterColor }
					items={ sortAllItems } 
				/>
			</React.Fragment>
			
		)
	}
}
		 
export default Home;
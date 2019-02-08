import React, { Component } from 'react';

export default class ComponentOne extends Component{

	render(){
		return(
			<div className="row">
				
					{this.props.children}
					
			</div>			
		 )
	}
}
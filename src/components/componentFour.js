import React, { Component } from 'react';
import {connect} from 'react-redux';

class ComponentFour extends Component{

	render(){
		return(
			<div className="col-md-12">
				<div style={{border:"1px solid white", borderRadius:50,marginTop:'5%',paddingLeft:'5%',paddingTop:'3%',paddingBottom:'2%'}}>
				{
					this.props.currentValue != "" ?
					<h3 style={{color:'white'}}>
						Value is {this.props.currentValue}
					</h3>
					:
					<h3 style={{color:'white'}}>
						Value is {this.props.data[0]['value']}
					</h3>
				}	
				</div>
			</div>			
		 )
	}
}

const mapStateToProps =(state) =>{
  return {
  	data:state.homeReducer.data,
    currentValue:state.homeReducer.currentValue
  }
}

export default connect(mapStateToProps,null)(ComponentFour);
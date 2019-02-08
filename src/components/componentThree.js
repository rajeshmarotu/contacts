import React, { Component } from 'react';
import {connect} from 'react-redux';

class ComponentThree extends Component{

	render(){
		return(
			<div className="col-md-6" style={{border:"2px solid white", borderRadius:50,paddingLeft:'5%',paddingTop:'2%',paddingBottom:'2%'}}>
				<div className="row">
					<div>
						{
							this.props.currentName != "" ?
							<h3 style={{color:'white'}}>
								{this.props.currentName}
							</h3>
							:
							<h3 style={{color:'white'}}>
								{this.props.data[0]['name']}
							</h3>
						}
					</div>
					{
						this.props.children
					}
				</div>
				
			</div>			
		 )
	}
}

const mapStateToProps =(state) =>{
  return {
  	data:state.homeReducer.data,
    currentName:state.homeReducer.currentName
  }
}

export default connect(mapStateToProps,null)(ComponentThree);
import React, { Component } from 'react';
import {connect} from 'react-redux';

class ComponentFive extends Component{

	render(){
		const {data,currentPercentage} = this.props;
		var value = data[0]['value']
		var percentage=0,
        totalValue=0;

	    for(var i in data){
	      totalValue+=data[i]['value']
	    }
	    
	    percentage = Math.round((value/totalValue)*100);

	    console.log(percentage)
		return(
			<div className="col-md-12">
				<div style={{border:"1px solid white", borderRadius:50,paddingLeft:'5%',marginTop:'10%',paddingTop:'3%',paddingBottom:'2%'}}>
				{
					this.props.currentPercentage != "" ?
					<h3 style={{color:'white'}}>
						{this.props.currentPercentage}% of overall
					</h3>
					:
					<h3 style={{color:'white'}}>
						{percentage}% of overall
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
    currentPercentage:state.homeReducer.currentPercentage
  }
}

export default connect(mapStateToProps,null)(ComponentFive);
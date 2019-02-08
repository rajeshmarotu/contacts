import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Pie} from 'react-chartjs-2';
import { updateCurrentElementDetails } from '../actions/';
class ComponentTwo extends Component{
	constructor(props){
		super(props);
		this.state={

		}
	}

	getRandomColor() {
		  var letters = '0123456789ABCDEF';
		  var color = '#';
		  for (var i = 0; i < 6; i++) {
		    color += letters[Math.floor(Math.random() * 16)];
		  }
		  return color;
	}

	componentWillMount(){
		var data=[],labels=[],colors=[];
		var items = this.props.data;
		for(var item in items){
			console.log(items[item])
			data.push(items[item]['value']);
			labels.push(items[item]['name']);
			colors.push(this.getRandomColor())
		}
		this.setState({
				chartData:[{
					datasets:[
						{
							data:data,
							backgroundColor:colors
						}
					],
					labels:labels,
					colors:colors
				}]
			})

	}


	handleClick = elems =>{
		// console.log(elems[0]._datasetIndex + ', ' + elems[0]._index);
		this.props.updateCurrentElementDetails(this.props.data,elems[0]._datasetIndex,elems[0]._index);
	}
	
	render(){
		
		return(
			<div className="col-md-6 " style={{backgroundColor: "#fcfcff",paddingTop:'5%',paddingBottom:'5%',border:"1px solid #770929", borderRadius:50}}>
	
					<Pie 
						data={this.state.chartData[0]} 
						onElementsClick={(elem)=>this.handleClick(elem)}
						options={
							{
								legend: {
							        display: false,
							    },
							}
						}
						/>
			</div>			
		 )
	}
}

const mapStateToProps =(state) =>{
  return {
    data:state.homeReducer.data
  }
}

const mapDispatchToProps= (dispatch) => {
  return {
    updateCurrentElementDetails: (data,datasetIndex,index) => { dispatch(updateCurrentElementDetails(data,datasetIndex,index)) }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ComponentTwo);